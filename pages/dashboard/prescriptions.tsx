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
import useUser from 'src/hooks/user.hook';
import { LocalLoading } from './appointment-management';
interface IPrescriptionItem {
    Id: string;
    UserId: string;
    Link: string;
    Status?: string | null;
    Description: string;
    Date?: string | null;
    created_at: string;
    updated_at: string;
    Name: string;
    user: null | UserState | any;
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
                    <span>Görüntüle</span>
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

export default function Prescriptions() {

    const [prescriptions, setPrescriptions] = useState<IPrescriptionItem[]>([]);
    const [loading, setLoading] = useState(false);
    const { user: { Id: UserId } } = useUser()

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
        request.get(`/userprescriptions/${UserId}?page=${page}`).then((resp) => {
            setLoading(false);
            console.log(resp.data);
            const newLocal: IPrescriptionItem = {
                "Id": "0fa85427-4d4e-45fc-8552-f74b814ba6b2",
                "Name": "reçete 1",
                "UserId": "22fac2ff-b826-4ef5-a9f1-5f5d6a0b8ca6",
                "Status": null,
                "Date": null,
                "Link": "https://nazanuysalharzadin.s3.eu-west-2.amazonaws.com/prescriptions/CPnYRK4MiPa2pQQDY21pt29XBwAmeWkAwagrrgcx.pdf",
                "created_at": "2022-12-27T14:11:08.000000Z",
                "updated_at": "2022-12-27T14:11:08.000000Z",
                "user": {
                    "Id": "22fac2ff-b826-4ef5-a9f1-5f5d6a0b8ca6",
                    "Email": "emirhanburgazli@gmail.com",
                    "IsPatient": true,
                    "ParasutId": null,
                    "IsAdmin": false,
                    "created_at": "2022-11-24T21:37:41.000000Z",
                    "updated_at": "2022-12-26T01:00:18.000000Z",
                    "information": {
                        "Id": "0b3b4612-8fdf-4cf7-a13e-a68e16be3ee2",
                        "UserId": "22fac2ff-b826-4ef5-a9f1-5f5d6a0b8ca6",
                        "Fullname": null,
                        "Phone": null,
                        "Address": null,
                        "created_at": "2022-11-24T21:37:41.000000Z",
                        "updated_at": "2022-11-24T21:37:41.000000Z"
                    }
                },
                Description: ''
            };
            //  setPrescriptions(resp.data.data);
            setPrescriptions([
                newLocal
            ])
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
        if (UserId) fetchPrescriptions();
    }, [UserId])

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
        {loading && <LocalLoading message='Reçeteler getiriliyor...' />}
        <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
            <div className="w-full flex  text-start items-center justify-between  py-[26px] px-[10px]">
                <div className="flex flex-col justify-between w-full">
                    <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Reçeteler</Text>
                    <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Hastalarınıza ait reçeteleri yönetin.</Text>
                </div>
                <div>
                    {/* <button onClick={() => {
                        setNewPrespriptionModal({
                            ...newPrespriptionModal,
                            open: true
                        })
                    }} className='text-[white] text-[14px] bg-[#4E929D] w-[160px] h-[48px] rounded-[20px_5px]'>
                        <Add />
                        <span>
                            Reçete Oluştur
                        </span>
                    </button> */}
                </div>
            </div>

            <div className="w-[80%] gap-[10px] mt-[10px] mb-[30px] flex">
                <input type="text" placeholder='Ad Soyad ya da E-posta adresine göre arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button onClick={() => {
                    fetchPrescriptions();
                }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
            <div className="w-full flex flex-col">
                <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">Ad Soyad</Text>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">E-posta</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Telefon</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Reçete Tarih</Text>
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