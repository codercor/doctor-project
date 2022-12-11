import { editTraining } from "@app/Training/training.slice";
import Button from "@components/Button";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import DocumentsUpload from "@components/Upload/DocumentsUpload";
import ImageUpload from "@components/Upload/ImageUpload";
import { Add, AddAPhoto, Close, Delete, DocumentScanner, Edit, Refresh } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useTraining from "src/hooks/training.hook";
import CircularProgress from '@mui/material/CircularProgress';
import { TrainingBranchProps, TrainingBranchType, TrainingDataType } from "src/types/Training";
import { useRouter } from "next/router";
import { TrainingDocumentationType } from "@app/Training/training.types";
import Image from "next/image";
import { v4 } from "uuid";
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

const EditTraining = () => {

    const { getTrainingById, oneTraining } = useTraining();

    const { query } = useRouter();
    type EditTrainingDataType = TrainingDataType & { Image: string, Documentations: TrainingDocumentationType[] };
    const [trainingImage, setUploadImages] = React.useState<null | File>(null);
    const [trainingDocuments, setTrainingDocuments] = React.useState<null | FileList>(null);
    const [trainingData, setTrainingData] = React.useState<EditTrainingDataType>({
        Name: oneTraining ? oneTraining.Name : '',
        Details: oneTraining ? oneTraining.Details : '',
        DiscountRate: oneTraining ? Number(oneTraining.DiscountRate) : 5,
        Price: oneTraining ? Number(oneTraining.Price) : 1000.00,
        GeneralDetail: {
            StartDate: oneTraining ? formatDate(oneTraining.GeneralDetail.StartDate) : '',
            EndDate: oneTraining ? formatDate(oneTraining.GeneralDetail.EndDate) : '',
            MaxParticipant: oneTraining ? Number(oneTraining.GeneralDetail.MaxParticipant) : 0,
            VideoLink: oneTraining ? oneTraining.GeneralDetail.VideoLink : '',
        },
        Image: oneTraining ? (oneTraining as EditTrainingDataType)?.Image : '',
        Documentations: oneTraining ? (oneTraining as EditTrainingDataType)?.Documentations : [],
        EducationSections: Array<TrainingBranchType>()
    });

    useEffect(() => {
        if (oneTraining) setTrainingData((oneTraining) as EditTrainingDataType);
    }, [oneTraining])


    useEffect(() => {
        if (query?.id) getTrainingById(query?.id as string);
    }, [query.id]);


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
        console.log("index", index);
        setTrainingData({ ...trainingData, EducationSections: trainingData.EducationSections.filter((item, i) => i !== index) })
    }

    const handleChangeBranch = (data: TrainingBranchType, index: number) => {
        setTrainingData({ ...trainingData, EducationSections: trainingData.EducationSections.map((item, i) => i === index ? data : item) })

    }

    const dispatch = useDispatch<any>();

    const handleSubmit = () => {
        let _trainingData: TrainingDataType = {
            Name: trainingData.Name,
            Details: trainingData.Details,
            DiscountRate: trainingData.DiscountRate,
            Price: Number(trainingData.Price),
            GeneralDetail: {
                StartDate: trainingData.GeneralDetail.StartDate,
                EndDate: trainingData.GeneralDetail.EndDate,
                MaxParticipant: trainingData.GeneralDetail.MaxParticipant,
                VideoLink: trainingData.GeneralDetail.VideoLink,
            },
            EducationSections: trainingData.EducationSections
        }
        dispatch(editTraining({ trainingData: _trainingData, image: trainingImage, documents: trainingDocuments, Id: query.id as string }))
    }

    const { editTrainingProcess } = useTraining();
    return (<>
        {editTrainingProcess.loading ? <Loading message={editTrainingProcess.loadingMessage} /> :
            <DashboardLayout>
                <div className="md:h-full flex flex-col   rounded-[30px_5px] bg-[#F4F4F4]">
                    <div className="w-full h-fit flex flex-col bg-[#F4F4F4] text-start items-center justify-start py-[26px] px-[30px]">
                        <div className="flex justify-between w-full bg-[#F4F4F4]">
                            <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Eğitim düzenle</Text>
                        </div>
                    </div>
                    <div className='overflow-auto  w-full flex h-full bg-[#F4F4F4] '>
                        <div className="flex flex-col w-full pb-4 scrollbar-thin scrollbar-thumb-[#4E929D] border-2 overflow-auto  h-full pl-[32px] pr-[74px]">
                            <Input value={trainingData.Name} name="Name" onChange={handleChange} text="Eğitim Adı" />
                            <div className="flex flex-col mt-1">
                                <Text type="h4" className="text-deepgreen-100 !text-[14px]  !py-[10px]">Eğitim Detayı</Text>
                                <textarea value={trainingData.Details} name="Details" onChange={handleChange} className="bg-primary-flat rounded-[5px_20px_0_20px] h-[147px] p-4" ></textarea>
                            </div>
                            <Input value={trainingData.GeneralDetail.VideoLink} name="VideoLink" onChange={handleGeneralDetailChange} text="Eğitim Videosu (Youtube URL)" />
                            <div className="flex flex-row gap-4">
                                <Input type="datetime-local" value={trainingData.GeneralDetail.StartDate} name="StartDate" onChange={handleGeneralDetailChange} text="Başlangıç Tarihi" />
                                <Input type="datetime-local" value={trainingData.GeneralDetail.EndDate} name="EndDate" onChange={handleGeneralDetailChange} text="Bitiş Tarihi" />
                            </div>
                            {
                                trainingData.Image ? <>
                                    <div className='relative w-full h-[168px] mt-4'>
                                        <Image src={trainingData.Image} layout='fill' />
                                        <div onClick={
                                            (e) => {
                                                //delete image
                                                setTrainingData({ ...trainingData, Image: '' })
                                            }
                                        } className='absolute top-0 z-10 right-0 bg-red-600 text-[white] rounded-full grid place-content-center'>
                                            <Close />
                                        </div>
                                    </div>
                                </> :
                                    <ImageUpload onChange={(e) => {
                                        console.log("value ", e.target.files);
                                        // @ts-ignore
                                        setUploadImages(e.target.files[0])
                                    }} value={trainingImage} />
                            }
                            {trainingData?.Documentations?.length > 0 ? <div key={v4()} className="w-full h-fit relative">
                                {(trainingData?.Documentations.map((doc: TrainingDocumentationType) =>
                                    <div key={v4()} className='relative h-[100px] mt-4 border-2 flex flex-col justify-center items-center text-[40px] min-w-[100px] w-[100px]'>

                                        <DocumentScanner fontSize='inherit' />
                                        <Text className="truncate w-full"> {doc?.EducationId}</Text>
                                    </div>
                                ))}
                                <div onClick={
                                    (e) => {
                                        //delete image
                                        setTrainingData({ ...trainingData, Documentations: [] })
                                    }
                                } className='absolute top-0 z-10 right-0 bg-red-600 text-[white] rounded-full grid place-content-center'>
                                    <Close />
                                </div>
                            </div>
                                : <DocumentsUpload onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    console.log("docs upload", e.target.files);
                                    setTrainingDocuments(e.target.files)
                                }} value={trainingDocuments} />}
                        </div>
                        <div className="flex flex-col w-full border-2 overflow-auto h-full px-[68px]">
                            <div className="flex flex-row gap-4">
                                <Input name="Price" value={trainingData.Price.toString()} type="number" onChange={handleChange} text="Eğitim Fiyatı" />
                                <Input name="DiscountRate" value={trainingData.DiscountRate.toString()} max={100} min={0} type="number" onChange={handleChange} text="Eğitim İndirim %" />
                            </div>
                            <div>
                                <Input value={trainingData.GeneralDetail.MaxParticipant.toString()} type="number" min={0} max={200} onChange={handleGeneralDetailChange} name="MaxParticipant" text="Katılımcı Sayısı" />
                                <Text type="overline">**Katılımcı sayısı max 200 olabilir</Text>
                            </div>
                            <div className="flex justify-between mt-6">

                                <div className="flex flex-col">
                                    <Text className="text-[16px] !font-nexa-bold text-secondary">Eğitim Dalları </Text>
                                    <Text className="text-[12px] text-[#AEAEAE]">Eğitimlerinize alt konu ve dal belirleyin.</Text>
                                </div>
                                <Button onClick={handleAddSection} type="secondary" className="bg-tertiary w-[94px] h-[36px] !px-[16px] !py-[14px] gap-1 flex justify-center items-center !rounded-[10px_5px_10px_5px] min-h-[36px]">
                                    <Add className="text-[white] text-[16px]" />
                                    <Text className="text-[12px]">Ekle</Text>
                                </Button>
                            </div>
                            <div className="bg-tertiary-flat min-w-[20px] min-h-[20px] h-fit rounded-full w-fit grid place-content-center px-2 text-[12px] text-[white] font-nexa-bold">
                                {trainingData.EducationSections.length} Dal
                            </div>
                            <div className="relative flex w-full pt-2 flex-col mt-4 snap-y h-[400px] scrollbar-thin scrollbar-thumb-quaternary border-red-400 overflow-auto">

                                {
                                    trainingData.EducationSections.map((section, index) => (
                                        <TrainingBranch Time={section.Time} onChanges={(data, order) => {
                                            console.log("data", data);
                                            console.log("order", order);
                                            handleChangeBranch(data, index)
                                        }} Order={index + 1} Content={section.Content} StartDate={section.StartDate} onDelete={() => { handleBranchDelete(index); }} key={index} />
                                    ))
                                }
                            </div>
                            <Button  onClick={handleSubmit} type="secondary" className=" self-end justify-self-end  mt-10 bg-tertiary w-[224px] h-[56px] !px-[16px] !py-[14px] gap-1 flex justify-center items-center !rounded-[10px_5px_10px_5px] min-h-[36px]">
                                <Refresh className="text-[white]" fontSize="medium" />
                                <Text className="text-[20px]">Güncelle</Text>
                            </Button>

                        </div>
                    </div>
                </div>
            </DashboardLayout>}</>

    );
}

const TrainingBranch = ({ Content = "", StartDate = "", Time = 0, onChanges = () => { }, Order = 0, onDelete = () => { } }: TrainingBranchProps) => {



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
        onChanges(_tempBranchData, Order);
    }, [_tempBranchData, Order])



    return <div className="flex flex-col mt-4 border-2 p-1 relative snap-start">
        <div onClick={() => onDelete()} className="rounded-full w-[30px] h-[30px] grid place-content-center bg-red-400 text-[white] absolute right-[0px] top-[-8px]">
            <Delete fontSize="small" />
        </div>
        <Input value={_tempBranchData.Content} onChange={handleChange} name="Content" text="Alt Başlık" />
        <div className="flex flex-row gap-4">
            <Input value={_tempBranchData.StartDate} type="datetime-local" onChange={handleChange} name="StartDate" text="Eğitim Başlama Tarihi" />
            <Input value={_tempBranchData.Time.toString()} type="number" min={0} onChange={handleChange} name="Time" text="Eğitim Süresi (dk)" />
        </div>
    </div>
}

export default EditTraining;