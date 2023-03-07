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
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
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
    return <TableRow >
        <TableCell >
            <p>
                {
                    data?.Name || '-'
                }
            </p>
        </TableCell>
        <TableCell >
            <p>
                {
                    data?.Description
                }
            </p>
        </TableCell>
        <TableCell >
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
        </TableCell>
        <TableCell >
            <button onClick={() => {
                window.open(data.Link, "_blank")
            }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                <span>Görüntüle</span>
            </button>
        </TableCell>
    </TableRow>
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
    const [loading, setLoading] = useState(true);
    const { user: { Id: UserId, Information } } = useUser()

    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)

    const router = useRouter();

    const fetchPrescriptions = () => {
        setLoading(true);
        request.get(`/userprescriptions/${UserId}?page=${page}`).then((resp) => {
            setLoading(false);
            console.log(resp.data);
            setPrescriptions(resp.data.data);
            setPageCount(resp.data.PageCount)
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
    if (prescriptions?.length < 1 && !loading) {
        return <DashboardLayout>
            <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Reçeteniz bulunmamaktadır </h1>
        </DashboardLayout>
    }
    return <DashboardLayout>
        <>
            {loading && <LocalLoading message='Reçeteler getiriliyor...' />}
            <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                <div className="w-full flex  text-start items-center justify-between  py-[26px] px-[10px]">
                    <div className="flex flex-col justify-between w-full">
                        <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Reçeteler</Text>
                        <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Reçetelerinizi görüntüleyin</Text>
                    </div>

                </div>


                <TableContainer className='bg-[white] '>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">  <Text type="h3" className="text-secondary flex-[4] w-[100px] !text-[14px]">Başlık</Text></TableCell>
                                <TableCell align="left">  <Text type="h3" className="text-secondary flex-[4] w-[100px] !text-[14px]">Açıklama</Text></TableCell>
                                <TableCell align="left">  <Text type="h3" className="text-secondary flex-[4] w-[120px] !text-[14px]">Reçete Tarih</Text></TableCell>
                                <TableCell align="left">  <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Görüntüle</Text></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                prescriptions?.length > 0 ? prescriptions?.map((item) => {
                                    return <Row key={v4()} data={item} />
                                }) || <></> : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Reçeteniz bulunmamaktadır </h1>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                    setPage(value)
                }} count={pageCount} />
            </div>
        </>
    </DashboardLayout>
}