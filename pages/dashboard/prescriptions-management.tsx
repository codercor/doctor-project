import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { Add, ArrowDropDown, ArrowDropUp, Close, RefreshRounded, SortByAlpha } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { Pagination } from '@mui/material'
import FormInput, { FormInputTextArea } from '@components/Forms/FormInput/FormInput';
import classNames from 'classnames';
import { v4 } from 'uuid';
import { UserInformation, UserState } from '@app/User/user.types';
import request from '@config';
interface IPrescriptionItem {
    Id: string;
    UserId: string;
    Link: string;
    Description: string;
    created_at: string;
    updated_at: string;
    Name: string;
    user: null | UserState;
}
const Row = ({ data }: { data: IPrescriptionItem }) => {
    return <div className='flex flex-col w-full'>
        <div className='w-full flex p-3 border-t-[1px]'>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.Information?.Fullname || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.Email || 'YOK'
                    }

                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        data.user?.Information?.Phone || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        new Date(data.updated_at || data.created_at).toLocaleDateString() || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <button onClick={() => {
                    window.open(data.Link, "_blank")
                }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                    <span>G??r??nt??le</span>
                </button>
            </div>
        </div>
    </div>
}
interface INewPrespriptionModal {
    open: boolean;
    data: {
        Name: string;
        UserId: string;
        Description: string;
        File: FileList | null;
    }
}
const NewPrespriptionModal = ({ data, setter, finishEvent }: { data: INewPrespriptionModal, setter: (newData: INewPrespriptionModal) => void, finishEvent: () => void }) => {
    //api'den gelen patient listesi
    const [patientResult, setPatientResult] = useState<any[]>([]);
    //listeden bir patient se??ildi??inde ??al????t??r??lacak fonksiyon
    const selectPatient = (patient: { Id: string }) => {
        setter({
            ...data, data: {
                ...data.data,
                UserId: patient.Id
            }
        })
    }
    const handleSearchPatient = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Name: e.currentTarget.value
            }
        })
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Description: e.currentTarget.value
            }
        })
    }


    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                File: e.currentTarget.files
            }
        })
    }

    const handleCreatePrescription = () => {
        console.log(data);
        finishEvent();
    }

    const handleCancel = () => {
        setter({
            data: {
                Name: '',
                UserId: '',
                Description: '',
                File: null
            }, open: false
        })
    }

    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (data.data.Name && data.data.UserId && data.data.Description && data.data.File) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [data.data])


    return data.open ? <div onClick={(e) => {
        handleCancel();
        e.stopPropagation();
    }} className='fixed z-[9999] top-0 grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="w-[904px] relative min-h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
            <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Re??ete Olu??tur</h1>
            <p className='text-[#5C5C5C] text-[16px]'> Hastaya re??ete olu??turmak i??in gerekli alanlar?? doldurunuz.</p>
            <div className="flex flex-col gap-4 mt-[45px] mb-2">
                <FormInput onChange={handleSearchPatient} placeholder='Hasta Ara*' />
                <FormInput label='Re??ete Ad??' onChange={handleChangeTitle} />
                <FormInputTextArea onChange={handleChangeDescription} label='A????klama' />
                <DocumentsUpload title="Re??ete" value={data.data.File} onChange={handleSelectFile} />
            </div>
            <button onClick={handleCreatePrescription} className={classNames('text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px]', {
                "opacity-50 cursor-not-allowed": !valid,
            })}>
                Olu??tur
            </button>
            <button onClick={handleCancel} className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                <Close />
            </button>
        </div>

    </div> : <></>


}
export default function PrescriptionsManagement() {

    const [prescriptions, setPrescriptions] = useState<IPrescriptionItem[]>([]);
    const [loading, setLoading] = useState(false);

    interface IPagination {
        page: number;
        per_page: number;
        prev_page_url: string | null;
        next_page_url: string | null;
        last_page: number;
    }
    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        per_page: 10,
        prev_page_url: null,
        next_page_url: null,
        last_page: 1
    })

    const fetchPrescriptions = (page = 1) => {
        setLoading(true);
        request.get(`/userprescriptions?page=${page}`).then((resp) => {
            setLoading(false);
            console.log(resp.data);
            setPrescriptions(resp.data.data);
            setPagination({
                page: resp.data.current_page,
                per_page: resp.data.per_page,
                prev_page_url: resp.data.prev_page_url,
                next_page_url: resp.data.next_page_url,
                last_page: resp.data.last_page
            })
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(() => {
        fetchPrescriptions();
    }, [])

    const [newPrespriptionModal, setNewPrespriptionModal] = useState<INewPrespriptionModal>({
        open: true,
        data: {
            Name: '',
            UserId: 'dadada',
            Description: '',
            File: null
        }
    });


    return <DashboardLayout>
        <NewPrespriptionModal finishEvent={() => fetchPrescriptions(pagination.page)} data={newPrespriptionModal} setter={setNewPrespriptionModal} />
        <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
            <div className="w-full flex  text-start items-center justify-between  py-[26px] px-[10px]">
                <div className="flex flex-col justify-between w-full">
                    <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Re??eteler</Text>
                    <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Hastalar??n??za ait re??eteleri y??netin.</Text>
                </div>
                <div>
                    <button onClick={() => {
                        setNewPrespriptionModal({
                            ...newPrespriptionModal,
                            open: true
                        })
                    }} className='text-[white] text-[14px] bg-[#4E929D] w-[160px] h-[48px] rounded-[20px_5px]'>
                        <Add />
                        <span>
                            Re??ete Olu??tur
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-[80%] gap-[10px] mt-[10px] mb-[30px] flex">
                <input type="text" placeholder='Ad Soyad ya da E-posta adresine g??re aray??n' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
            <div className="w-full flex flex-col">
                <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">Ad Soyad</Text>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">E-posta</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Telefon</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Re??ete Tarih</Text>
                    <div className='flex-[4]'>  </div>
                </div>
                <div className='w-full border-2'>
                    {
                        prescriptions?.map((item) => {
                            return <Row key={v4()} data={item} />
                        }) || <></>
                    }
                </div>
            </div>
            <Pagination siblingCount={3} variant="text" className="mt-auto mb-[30px]" onChange={(e: any, value: number) => {
                fetchPrescriptions(value);
            }} count={pagination.last_page} />
        </div>
    </DashboardLayout>
}