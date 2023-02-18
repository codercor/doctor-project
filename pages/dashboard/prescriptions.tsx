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
import { useBreakpoint, useIsDesktop } from 'src/hooks/breakpoint';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-hot-toast';
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
            <div className='flex-[4]'>
                <p>
                    {
                        data?.Name || '-'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        data?.Description
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {

                        new Date(data.updated_at || data.created_at).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                        || '-'
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
    const { user: { Id: UserId, Information } } = useUser()

    const [page, setPage] = useState(1)

    const router = useRouter();

    const fetchPrescriptions = () => {
        setLoading(true);
        request.get(`/userprescriptions/${UserId}?page=${page}`).then((resp) => {
            setLoading(false);
            console.log(resp.data);
            setPrescriptions(resp.data);
            setPage(page)
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(() => {
        const userGender = Information.Gender
        const userFullName = Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            router.push("/dashboard/account");
        }
        if (UserId) fetchPrescriptions();
    }, [UserId, page])


    const isDesktop = useIsDesktop();
    if (prescriptions?.length < 1) {
        return <DashboardLayout>
            <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Reçeteniz bulunmamaktadır </h1>
        </DashboardLayout>
    }
    return <DashboardLayout>
        {!isDesktop ? <div className="w-full h-full items-center justify-center flex p-[30px]">
            <h1> Bu sayfayı görüntülemek için mobil cihazlar uygun değildir. </h1>
        </div> : <>
            {loading && <LocalLoading message='Reçeteler getiriliyor...' />}
            <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                <div className="w-full flex  text-start items-center justify-between  py-[26px] px-[10px]">
                    <div className="flex flex-col justify-between w-full">
                        <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Reçeteler</Text>
                        <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Reçetelerinizi görüntüleyin</Text>
                    </div>

                </div>


                <div className="w-full flex flex-col">
                    <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                        <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Başlık</Text>
                        <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Açıklama</Text>
                        <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Reçete Tarih</Text>
                        <div className='flex-[4]'>  </div>
                    </div>
                    <div className='w-full border-2'>
                        {
                            prescriptions?.length > 0 ? prescriptions?.map((item) => {
                                return <Row key={v4()} data={item} />
                            }) || <></> : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Reçeteniz bulunmamaktadır </h1>
                        }
                    </div>
                </div>
                <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                    setPage(value)
                }} count={prescriptions.length > 0 ? page + 1 : page} />
            </div>
        </>}
    </DashboardLayout>
}