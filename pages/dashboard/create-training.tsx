import { createTraining } from "@app/Training/training.slice";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import DocumentsUpload from "@components/Upload/DocumentsUpload";
import ImageUpload from "@components/Upload/ImageUpload";
import { Add, AddAPhoto, Delete, Edit } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTraining from "src/hooks/training.hook";
import CircularProgress from '@mui/material/CircularProgress';
import { TrainingBranchProps, TrainingBranchType, TrainingDataType } from "src/types/Training";
import { FieldArray, Formik } from "formik";
import FormInput, { FormInputTextArea } from "@components/Forms/FormInput/FormInput";
import * as Yup from "yup";
import { v4 } from "uuid";
import { toast } from "react-hot-toast";

const formatDate = (date: string) => {
    console.log("date", date);
    const newDate = new Date(date)
    console.log("newDate", newDate);
    //fix the hours problem
    newDate.setHours(newDate.getHours() + 3);
    //iso format
    const isoDate = newDate.toISOString().slice(0, 19)
    return isoDate
}


export const Loading = ({ message }: { message: string }) => {
    return <div className="absolute  top-0 left-0 w-screen h-screen bg-black-100 bg-opacity-40 z-50 grid place-content-center">
        <div className="w-[400px] h-[400px]  animate-pulse text-center bg-secondary-light flex flex-col justify-center items-center gap-2 rounded-full">
            <div>  <CircularProgress /></div>
            <Text type="h1" className="text-secondary !text-[20px]  w-full text-center">{message}</Text>
        </div>
    </div>
}

/* 
export interface TrainingBranchType {
    Order: number;
    Content: string;
    StartDate: string;
    Time: number;
}
*/

const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Bu alan zorunludur"),
    Details: Yup.string().required("Bu alan zorunludur"),
    DiscountRate: Yup.number().required("Bu alan zorunludur").min(0, "İndirim oranı 0'dan küçük olamaz").max(100, "İndirim oranı 100'den büyük olamaz"),
    Price: Yup.number().required("Bu alan zorunludur").min(0, "Fiyat 0'dan küçük olamaz"),
    GeneralDetail: Yup.object().shape({
        StartDate: Yup.string().required("Bu alan zorunludur"),
        EndDate: Yup.string().required("Bu alan zorunludur"),
        MaxParticipant: Yup.number().required("Bu alan zorunludur").min(0, "Maksimum katılımcı sayısı 0'dan küçük olamaz").max(200, "Maksimum katılımcı sayısı 200'den büyük olamaz"),
        VideoLink: Yup.string().required("Bu alan zorunludur").url("Geçerli bir link girin").matches(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/, "Youtube linki giriniz")
    }),
    EducationSections: Yup.array().of(Yup.object().shape({
        Content: Yup.string().required("Bu alan zorunludur"),
        StartDate: Yup.string().required("Bu alan zorunludur"),
        Time: Yup.number().required("Bu alan zorunludur").min(1, "Süre 0 ya da küçük olamaz"),
    })).required("Bu alan zorunludur")
});

const CreateTraining = () => {
    const [trainingImage, setUploadImages] = React.useState<null | File>(null);
    const [trainingDocuments, setTrainingDocuments] = React.useState<null | FileList>(null);
    const [trainingData, setTrainingData] = React.useState<TrainingDataType>({
        Name: '',
        Details: '',
        DiscountRate: 0,
        Price: 0.00,
        GeneralDetail: {
            StartDate: formatDate(new Date().toISOString()),
            EndDate: formatDate(new Date().toISOString()),
            MaxParticipant: 50,
            VideoLink: 'https://www.youtube.com/watch?değiştirilmeli',
        },
        EducationSections: Array<TrainingBranchType>()
    });

    const correctOrders = () => {
        // correct orders after delete
        setTrainingData({ ...trainingData, EducationSections: trainingData.EducationSections.map((item, i) => ({ ...item, Order: i + 1 })) })
    }
    useEffect(() => {
        correctOrders()
    }, [trainingData.EducationSections.length])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setTrainingData({ ...trainingData, [e.target.name]: e.target.value })
    }
    const handleGeneralDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'StartDate' || e.target.name === 'EndDate') {
            console.log("e.target.value", e.target.value);
            setTrainingData({ ...trainingData, GeneralDetail: { ...trainingData.GeneralDetail, [e.target.name]: formatDate(e.target.value) } })
        } else {
            setTrainingData({ ...trainingData, GeneralDetail: { ...trainingData.GeneralDetail, [e.target.name]: e.target.value } })
        }
    }

    const handleAddSection = () => {
        setTrainingData({ ...trainingData, EducationSections: [...trainingData.EducationSections, { Order: trainingData.EducationSections.length + 1, Content: 'Boş başlık', StartDate: formatDate(new Date().toISOString()), Time: 180 }] })
    }
    const handleBranchDelete = (index: number) => {
        setTrainingData({ ...trainingData, EducationSections: trainingData.EducationSections.filter((item, i) => i !== index) })
    }
    const handleChangeBranch = (data: TrainingBranchType, index: number) => {
        setTrainingData({ ...trainingData, EducationSections: trainingData.EducationSections.map((item, i) => i === index ? data : item) })
    }
    const dispatch = useDispatch<any>();

    const { loadingProcess: { loadingMessage, loading } } = useTraining();
    return (<>
        {loading && <Loading message={loadingMessage} />}
        <DashboardLayout>
            <div className="md:h-full w-[100%] flex flex-col rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="w-full h-fit flex flex-col bg-[#F4F4F4] text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full bg-[#F4F4F4]">
                        <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Eğitim Ekle</Text>
                    </div>
                </div>
                <Formik validationSchema={validationSchema} onSubmit={() => { }} initialValues={trainingData}>
                    {({ handleSubmit, values, handleChange: _handleChange, errors, setFieldValue, validateForm }) => {
                        console.log("errors", errors);
                        const _handleSubmit = () => {
                            if (Object.keys(errors).length > 0 && !!trainingImage) return;
                            else {
                                dispatch(createTraining({ trainingData: values, image: trainingImage, documents: trainingDocuments }))
                            }
                        }
                        return <form className='overflow-auto  w-full flex-col md:flex-row flex h-full bg-[#F4F4F4]' onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full pb-4 scrollbar-thin scrollbar-thumb-[#4E929D] border-2 overflow-auto  h-full px-[32px]">
                                {/* <Input value={trainingData.Name} name="Name" onChange={handleChange} text="Eğitim Adı" /> */}
                                <FormInput type="text" value={values.Name} name="Name" error={errors?.Name} label="Eğitim Adı" onChange={_handleChange} />
                                <div className="flex flex-col mt-1">
                                    {/* <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">Eğitim Detayı</Text>
                                     <textarea value={trainingData.Details} name="Details" onChange={handleChange} className="bg-primary-flat rounded-[5px_20px_0_20px] h-[147px] p-4" ></textarea> */}
                                    <FormInputTextArea type="text" value={values.Details} name="Details" error={errors?.Details} label="Eğitim Detayı" onChange={_handleChange} />
                                </div>
                                {/* <Input value={trainingData.GeneralDetail.VideoLink} name="VideoLink" onChange={handleGeneralDetailChange} text="Eğitim Videosu (Youtube URL)" /> */}
                                <FormInput type="text" value={values.GeneralDetail.VideoLink} name="GeneralDetail.VideoLink" error={errors?.GeneralDetail?.VideoLink} label="Eğitim Videosu (Youtube URL)" onChange={_handleChange} />
                                <div className="flex flex-wrap  gap-4">
                                    <div className="flex-1">
                                        {/* <Input type="datetime-local" inputClassName="text-[14px] flex-1" value={trainingData.GeneralDetail.StartDate} name="StartDate" onChange={handleGeneralDetailChange} text="Başlangıç Tarihi" /> */}
                                        <FormInput type="datetime-local" value={values.GeneralDetail.StartDate} name="GeneralDetail.StartDate" error={errors?.GeneralDetail?.StartDate} label="Başlangıç Tarihi" onChange={_handleChange} />
                                    </div>
                                    <div className="flex-1">
                                        {/* <Input type="datetime-local" inputClassName="text-[14px] flex-1" value={trainingData.GeneralDetail.EndDate} name="EndDate" onChange={handleGeneralDetailChange} text="Bitiş Tarihi" /> */}
                                        <FormInput type="datetime-local" value={values.GeneralDetail.EndDate} name="GeneralDetail.EndDate" error={errors?.GeneralDetail?.EndDate} label="Bitiş Tarihi" onChange={_handleChange} />
                                    </div>
                                </div>
                                <ImageUpload onChange={(e) => {
                                    console.log("value ", e.target.files);
                                    // @ts-ignore
                                    let value = e.target.files[0];
                                    if ((value as File)?.size > 1024 * 1024 * 2) {
                                        toast.error("Resim boyutu 2MB'dan büyük olamaz.", {
                                            duration: 5000,
                                        });
                                        // @ts-ignore
                                        value = "";
                                    }
                                    // @ts-ignore
                                    setUploadImages(value);
                                }} value={trainingImage} />
                                {!trainingImage && <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
                                    * Eğitim için bir resim yüklemelisiniz.
                                </span>}
                                <DocumentsUpload onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    console.log("docs upload", e.target.files);
                                    setTrainingDocuments(e.target.files)
                                }} value={trainingDocuments} />
                            </div>
                            <div className="flex flex-col w-full border-2 overflow-auto h-full px-[32px]">
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {/* <Input name="Price" value={trainingData.Price.toString()} type="number" onChange={handleChange} text="Eğitim Fiyatı" /> */}
                                    <div className="flex-1">
                                        <FormInput type="number" value={values.Price.toString()} name="Price" error={errors?.Price} label="Eğitim Fiyatı" onChange={_handleChange} />
                                    </div>
                                    {/* <Input name="DiscountRate" value={trainingData.DiscountRate.toString()} max={100} min={0} type="number" onChange={handleChange} text="Eğitim İndirim %" /> */}
                                    <div className="flex-1">
                                        <FormInput type="number" value={values.DiscountRate.toString()} name="DiscountRate" error={errors?.DiscountRate} label="Eğitim İndirim %" onChange={_handleChange} />
                                    </div>
                                </div>
                                <div>
                                    {/* <Input value={trainingData.GeneralDetail.MaxParticipant.toString()} type="number" min={0} max={200} onChange={handleGeneralDetailChange} name="MaxParticipant" text="Katılımcı Sayısı" /> */}
                                    <FormInput type="number" value={values.GeneralDetail.MaxParticipant.toString()} name="GeneralDetail.MaxParticipant" error={errors?.GeneralDetail?.MaxParticipant} label="Katılımcı Sayısı" onChange={_handleChange} />
                                    <Text type="overline">**Katılımcı sayısı max 200 olabilir</Text>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex flex-col">
                                        <Text className="text-[16px] !font-nexa-bold text-secondary">Eğitim Dalları </Text>
                                        <Text className="text-[12px] text-[#AEAEAE]">Eğitimlerinize alt konu ve dal belirleyin.</Text>
                                    </div>
                                    <Button onClick={() => {
                                        setFieldValue("EducationSections", [...values.EducationSections, {
                                            Content: "",
                                            StartDate: formatDate(new Date().toString()),
                                            Time: 0,
                                            Order: values.EducationSections.length + 1
                                        }])
                                    }} type="secondary" className="bg-tertiary w-[94px] h-[36px] !px-[16px] !py-[14px] gap-1 flex justify-center items-center !rounded-[10px_5px_10px_5px] min-h-[36px]">
                                        <Add className="text-[white] text-[16px]" />
                                        <Text className="text-[12px]">Ekle</Text>
                                    </Button>
                                </div>
                                <div className="bg-tertiary-flat min-w-[20px] min-h-[20px] h-fit rounded-full w-fit grid place-content-center px-2 text-[12px] text-[white] font-nexa-bold">
                                    {values.EducationSections.length} Adet
                                </div>
                                <div className="relative flex w-full pt-2 flex-col mt-4 snap-y h-[400px] scrollbar-thin scrollbar-thumb-quaternary border-red-400 overflow-auto">
                                    {/* {
                                        trainingData.EducationSections.map((section, index) => (
                                            <TrainingBranch Time={section.Time} onChanges={(data, order) => {
                                                console.log("data", data);
                                                console.log("order", order);
                                                handleChangeBranch(data, index)
                                            }} Order={index + 1} Content={section.Content} StartDate={section.StartDate} onDelete={() => { handleBranchDelete(index); }} key={index} />
                                        ))
                                    } */}
                                    {

                                        // <div key={v4()} className="flex flex-col mt-4 border-2 p-1 relative snap-start">
                                        //     <div onClick={() => { 

                                        //     }} className="rounded-full w-[30px] h-[30px] grid place-content-center bg-red-400 text-[white] absolute right-[0px] top-[-8px]">
                                        //         <Delete fontSize="small" />
                                        //     </div>
                                        //     {/* <Input value={value.Content} onChange={handleChange} name="Content" text="Alt Başlık" /> */}
                                        //     <FormInput type="text" name={`EducationSections[${index}].Content`} label="Alt Başlık" onChange={_handleChange} />
                                        //     <div className="flex flex-row gap-4">
                                        //         {/* <Input value={value.StartDate} type="datetime-local" onChange={handleChange} name="StartDate" text="Eğitim Başlama Tarihi" /> */}
                                        //         <FormInput type="datetime-local"  name={`EducationSections[${index}].StartDate`}  label="Eğitim Başlama Tarihi" onChange={_handleChange} />
                                        //         {/* <Input value={value.toString()} type="number" min={0} onChange={handleChange} name="Time" text="Eğitim Süresi (dk)" /> */}
                                        //         <FormInput type="number" name={`EducationSections[${index}].Time`} label="Eğitim Süresi (dk)" onChange={_handleChange} />
                                        //     </div>
                                        // </div>

                                        // <NewTrainingBranches _handleChange={_handleChange} values={values} errors={errors} setFieldValue={setFieldValue} />
                                        <FieldArray name="EducationSections" validateOnChange={false} render={(arrHelpers) => {
                                            return values.EducationSections.map((section, index) => {
                                                return <>
                                                    <TrainingBranch Time={section.Time} onChanges={(data, order) => {
                                                        console.log("data", data);
                                                        setFieldValue(`EducationSections[${index}]`, data);
                                                    }} Order={index + 1} Content={section.Content} StartDate={section.StartDate}
                                                        onDelete={() => {
                                                            arrHelpers.remove(index);
                                                        }} key={index}
                                                        error={errors?.EducationSections && errors?.EducationSections[index]}

                                                    />
                                                </>
                                            })
                                        }
                                        } />
                                    }
                                </div>
                                <Button onClick={_handleSubmit} type="secondary" className=" self-end mt-10 bg-tertiary w-[224px] h-[56px] !px-[16px] !py-[14px] gap-1 flex justify-center items-center !rounded-[10px_5px_10px_5px] min-h-[36px]">
                                    <Add className="text-[white]" fontSize="medium" />
                                    <Text className="text-[20px]">Eğitimi Ekle</Text>
                                </Button>

                            </div>
                        </form>
                    }}

                </Formik>
            </div>
        </DashboardLayout></>
    );
}


const TrainingBranch = ({ Content = "", StartDate = "", Time = 0, onChanges = () => { }, Order = 0, onDelete = () => { }, error }: TrainingBranchProps & { error?: any }) => {
    const [_tempBranchData, setTempBranchData] = React.useState<TrainingBranchType>({
        Order: Order,
        Content: Content,
        StartDate: StartDate,
        Time: Time
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTempBranchData({ ..._tempBranchData, [name]: value })
    }

    useEffect(() => {
        console.log("_tempBranchData", _tempBranchData, Order);

        onChanges(_tempBranchData, Order);
    }, [_tempBranchData, Order])
    return <div className="flex flex-col shadow-lg bg-primary mt-4 border-2 p-1 relative snap-start">
        <div onClick={() => onDelete()} className="rounded-full w-[30px] h-[30px] grid place-content-center bg-red-400 text-[white] absolute right-[0px] top-[-8px]">
            <Delete fontSize="small" />
        </div>
        <FormInput value={_tempBranchData.Content} onChange={handleChange} name="Content" error={error?.Content} label="Alt Başlık" />
        <div className="flex flex-wrap flex-row gap-4">
            <div className="flex-1">
                <FormInput value={_tempBranchData.StartDate} type="datetime-local" onChange={handleChange} name="StartDate" error={error?.StartDate} label="Eğitim Başlama Tarihi" />
            </div>    {/* <Input value={_tempBranchData.StartDate} type="datetime-local" onChange={handleChange} name="StartDate" text="Eğitim Başlama Tarihi" /> */}
            <div className="flex-1">   <FormInput value={_tempBranchData.Time.toString()} type="number" onChange={handleChange} name="Time" label="Eğitim Süresi (dk)" error={error?.Time} />
                {/* <Input value={_tempBranchData.Time.toString()} type="number" min={0} onChange={handleChange} name="Time" text="Eğitim Süresi (dk)" /> */}
            </div>
        </div>
    </div>
}

export default CreateTraining;