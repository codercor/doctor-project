import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import FormAlert from '@components/Forms/FormAlert/FormAlert';
import { FormInputSelect } from '@components/Forms/FormInput/FormInput';
import StepStatus from '@components/Forms/Status/Status';
import Input from '@components/Input/Input';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { ArrowDropDown, ArrowDropUp, ArrowUpward, Refresh } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import request from '@config';
import useUser from 'src/hooks/user.hook';
import { Assay } from './assays-management';
import { LocalLoading } from './appointment-management';
import { Pagination } from '@mui/material'
import { useBreakpoint, useIsDesktop } from 'src/hooks/breakpoint';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
import { Box } from '@mui/material';
export default function Assays() {

    const { user: { Id, Information } } = useUser()
    const [assays, setAssays] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const getAssays = async () => {
        try {
            if (!Id) return
            const res = await request.get(`/userassays/${Id}?page=${page}`);
            console.log("DATA", res.data.data)
            setAssays(res.data.data);
            setPageCount(res.data.PageCount)
        } catch (error) {
            console.log("error", error);

        }
    }
    const router = useRouter();
    useEffect(() => {
        getAssays();
        const userGender = Information.Gender
        const userFullName = Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            router.push("/dashboard/account");
        }
    }, [page])

    const Row = ({ assay }: { assay: Assay }) => {
        const [open, setOpen] = useState(false);
        const [assayFiles, setAssayFiles] = useState<FileList | null>(null);
        const [loading, setLoading] = useState(false);
        function sendAssay(): void {
            if (!assayFiles) return
            setLoading(true);
            let form = new FormData();
            form.append("File", assayFiles[0]);
            request.post(`/userassays/${assay.Id}?_METHOD=PUT`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: form
            }).then(() => {
                setLoading(false);
                getAssays();
            }).catch(() => {
                setLoading(false);
                getAssays();
            })
        }

        return <>
            <TableRow >
                <TableCell >
                    <Text type="h3" className="text-secondary !text-[14px]"> {assay.Name} </Text>
                </TableCell>
                <TableCell >
                    <StepStatus status={assay.Status} />

                </TableCell>
                <TableCell >
                    <button onClick={() => {
                        setOpen(!open)
                    }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                        <span>DETAY</span>
                        {!open ? <ArrowDropUp /> : <ArrowDropDown />}
                    </button>
                </TableCell>

            </TableRow>
            <TableRow>
                {
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <DocumentsUpload title=" " value={assayFiles} onChange={(e) => {
                                    console.log("değişti", e.currentTarget?.files);
                                    setAssayFiles(e.currentTarget?.files)
                                }} />
                                <button onClick={() => sendAssay()} className='bg-[#4E929D] text-[white] rounded-[20px_5px] self-end mt-4 w-[146px] h-[50px]'>Gönder</button>
                                {loading && <LocalLoading message='Yükleniyor...' />}
                            </Box>
                        </Collapse>
                    </TableCell>
                }
            </TableRow>
        </>
    }
    const isDesktop = useIsDesktop();
    if (assays.length < 1) {
        return <DashboardLayout>
            <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Tahliliniz bulunmamaktadır </h1>
        </DashboardLayout>
    }
    return <>
        {
            <DashboardLayout>
                <div className=" lg:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                    <div className="w-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                        <div className="flex flex-col justify-between w-full">
                            <Text type="h3" className="text-secondary !text-[20px] w-full">Tahlillerim</Text>
                            <Text type="h3" className="text-secondary font-nexa-light !text-[14px] w-full">Tüm tahlillerinizi görüntüleyin.</Text>
                        </div>
                    </div>

                    {assays.find((assay) => {
                        return assay.Status === "Bekliyor"
                    }) && <div className="w-full px-2 mt-[10px] mb-[30px]">
                            <FormAlert status='pending' text='Göndermeniz gereken tahliller bulunmaktadır' />
                        </div>}
                    <TableContainer className='bg-[white] '>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">   <Text type="h3" className="text-secondary flex-[5] !text-[14px]">Tahlil Adı</Text> </TableCell>
                                    <TableCell align="left">  <Text type="h3" className="text-secondary flex-[2] !text-[14px]">Durum</Text> </TableCell>
                                    <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] !text-[14px]"> Detay </Text> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    assays?.length > 0 ? assays.map((assay, index) => {
                                        return <Row assay={assay} key={index} />
                                    }) : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Tahliliniz bulunmamaktadır </h1>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                        setPage(value)
                    }} count={pageCount} />
                </div>
            </DashboardLayout>
        }</>
}