import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text'
import { Check, Close, MenuOpen, RefreshRounded, SortByAlpha } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import classNames from 'classnames'
import request from '@config'
import { v4 } from 'uuid'
import FormInputSelectOne from '@components/Forms/FormInput/FormInputSelectOne'
import { Loading } from './create-training'
import toast from "react-hot-toast";
import useUser from "../../src/hooks/user.hook";
import { useBreakpoint, useIsDesktop } from 'src/hooks/breakpoint'
import { useRouter } from 'next/dist/client/router'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

interface Appointment {
    Id: string;
    UserId: string;
    Date: string;
    Status: string;
    created_at: string;
    updated_at: string;
}

export const StatusBox = ({
    type
}: {
    type: "Acil" | "Randevulu" | "user" | string
}) => {
    return <div className={classNames("w-[110px] h-[30px] flex items-center justify-center", {
        "bg-[#fed5d5] border-[1px] border-[#e18c8c] text-[#cd2d2d]": type === "Acil",
        "bg-[#E5FBFF] border-[1px] border-[#9ECED6] text-[#4E929D]": type === "Randevulu",
        "bg-[#FBFFEC] border-[1px] border-[#D8E0B2] text-[#98A170]": type === "user"

    })}>
        <p className="font-nexa-regular uppercase !text-[12px] w-full text-center">{
            type === "Acil" ? "Acil" :
                type === "Randevulu" ? "Randevulu" :
                    type === "user" ? "Kullanıcı" : ""
        }</p>
    </div>
}

const Row = ({ appointment, afterUpdate }: { appointment: any, afterUpdate: () => void }) => {
    const [open, setOpen] = useState(false);
    const [noteEdit, setNoteEdit] = useState(false);
    const [updateTheUserModal, setUpdateTheUserModal] = useState(false);
    const [tempStatus, setTempStatus] = useState(appointment.Status);
    const [tempDate, setTempDate] = useState(appointment.Date);
    const [isLoading, setIsLoading] = useState(false);


    const submit = async () => {
        const URL = `/userappointments/${appointment.Id}`
        try {
            setIsLoading(true)
            const { data } = await request.put(URL, {
                Status: tempStatus,
                Date: tempDate
            })
            setIsLoading(false)
            console.log(data)
        } catch (error) {
            setIsLoading(false)
            console.log("err", error)
        }
        afterUpdate()
    }

    return <TableRow >
        {
            isLoading && <LocalLoading message="Güncelleniyor" />
        }
        <TableCell >
            <p>
                {
                    appointment.user?.information?.Fullname || "-"
                }
            </p>
        </TableCell>
        <TableCell >
            <p>{appointment.user?.Email || '-'}</p>
        </TableCell>
        <TableCell >
            <p> {appointment.user?.information?.Phone || '-'} </p>
        </TableCell>
        <TableCell >
            <p>
                {
                    new Date(appointment.Date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    })
                }
            </p>
        </TableCell>
        <TableCell>
            {
                appointment.Status === "Acil" ? <StatusBox type="Acil" /> : <StatusBox type="Randevulu" />
            }
        </TableCell>
        {
            updateTheUserModal && <div onClick={(e) => {
                e.stopPropagation();
                setUpdateTheUserModal(false)
            }} className='fixed top-0 grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="w-[904px] relative h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
                    <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Güncelle</h1>
                    <p className='text-[#5C5C5C] text-[16px]'> Hastaya ait randevu ve durum güncellemesi yapın.</p>
                    <div className="flex flex-col mt-[45px]">
                        <h3 className='text-[#4E929D] !text-[14px] font-nexa-bold'>
                            Hasta Durumu
                        </h3>
                        <div className='flex gap-[50px] '>
                            <SelectStatus value={tempStatus} onChange={(v) => {
                                setTempStatus(v)
                            }} />

                            <div className="flex ml-auto flex-col w-[400px] items-start justify-center gap-[10px]">
                                <h3 className='text-[#4E929D] !text-[14px] font-nexa-bold'>
                                    Randevu Tarihi
                                </h3>
                                <input value={tempDate} onChange={
                                    (e) => setTempDate(e.currentTarget.value)
                                } type="datetime-local"
                                    className='w-full border-none rounded-[5px_20px_0_20px] bg-[#f3f3f3]' />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {
                        submit()
                    }} className='text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px]'>
                        Güncelle
                    </button>
                    <button onClick={() => {
                        setUpdateTheUserModal(false)
                    }}
                        className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                        <Close />
                    </button>
                </div>

            </div>
        }
    </TableRow>
}

const SelectStatus = ({ value, onChange }: {
    value: string;
    onChange: (value: string) => void;
}) => {
    return <>
        <div className="flex items-center justify-center gap-[10px]">
            <div onClick={() => onChange("Acil")}
                className={classNames("bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]")}>
                {value == "Acil" && <Check />}
            </div>
            <p className="text-[black] text-[16px] font-nexa-bold"> Acil </p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
            <div onClick={() => onChange("Randevulu")}
                className={classNames("bg-[#D4E5E8] text-[#4E929D] flex items-center justify-center  border-none h-[48px] w-[48px] rounded-[5px_20px]")}>
                {value == "Randevulu" && <Check />}
            </div>
            <p className="text-[black] text-[16px] font-nexa-bold"> Randevulu </p>
        </div>
    </>
}
export const LocalLoading = ({ message }: { message: string }) => <div className="z-[100] fixed top-0 left-0"><Loading
    message={message} /></div>
export default function AppointmentManagement() {
    const { user: { Id: UserId, Information } } = useUser()
    const isDesktop = useIsDesktop();
    const [appointments, setAppointments] = useState<Appointment[]>([

    ])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [searchKey, setSearchKey] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const getAppointments = async () => {
        const { data } = await request.get(`/userappointments/${UserId}?page=` + page);
        console.log("Appointments", data);
        return data;
    }

    const getAndSetAppointments = async () => {
        setIsLoading(true)
        getAppointments().then((data: { PageCount: number, data: Appointment[] }) => {
            setAppointments(data.data)
            setPageCount(data.PageCount)
            setIsLoading(false)
        }).catch((err) => {
            console.log("err", err)
            setIsLoading(false)
        })
    }
    const router = useRouter()
    useEffect(() => {
        const userGender = Information.Gender
        const userFullName = Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            router.push("/dashboard/account");
            return;
        }
        getAndSetAppointments()
    }, [page, searchKey])
    if (appointments?.length < 1) {
        return <DashboardLayout>
            <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Randevunuz bulunmamaktadır </h1>
        </DashboardLayout>
    }
    return (
        <DashboardLayout>
            {
                isLoading && <LocalLoading message="Randevularınız yükleniyor..." />
            }
            <div className="md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                <div className="w-full flex flex-col text-start items-center justify-start py-[26px] px-[10px]">
                    <div className="flex flex-col justify-between w-full">
                        <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Randevularım</Text>
                        <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Tüm
                            randevularınızı yönetin.</Text>
                    </div>
                </div>
                <div className="w-full px-2 md:w-[60%] gap-[10px] mt-[10px] mb-[30px] flex">
                    <input type="text" onChange={(e) => {
                        setSearchKey(e.target.value)
                    }
                    } placeholder='Ad Soyad ya da E-posta adresine göre arayın'
                        className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />

                    <button onClick={() => {
                        getAndSetAppointments()
                    }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                        <RefreshRounded />
                    </button>
                </div>
                <TableContainer className='bg-[white] '>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='min-w-[120px]' align="left">   <Text type="h3" className="text-secondary flex-[6] !text-[14px] ">Ad Soyad</Text></TableCell>
                                <TableCell className='min-w-[120px]' align="left">   <Text type="h3" className="text-secondary flex-[6] !text-[14px] ">E-posta</Text></TableCell>
                                <TableCell className='min-w-[120px]' align="left">   <Text type="h3" className="text-secondary flex-[4] !text-[14px] ">Telefon</Text></TableCell>
                                <TableCell className='min-w-[120px]' align="left">   <Text type="h3" className="text-secondary flex-[4] !text-[14px] ">Tarih/Saat</Text></TableCell>
                                <TableCell className='min-w-[120px]' align="left">   <Text type="h3" className="text-secondary flex-[2] !text-[14px] ">Durum</Text></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                appointments?.length > 0 ? appointments.map((appointment: Appointment) => {
                                    return <Row afterUpdate={() => {
                                        getAndSetAppointments()
                                    }} key={v4()} appointment={appointment} />
                                })
                                    : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Randevunuz bulunmamaktadır </h1>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]"
                    onChange={(e: any, value: number) => {
                        setPage(value)
                    }} count={pageCount} />
            </div>
        </DashboardLayout>
    )
}
