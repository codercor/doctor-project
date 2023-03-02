import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text'
import { Add, BookmarkAdded, Cancel, Check, Close, Delete, MenuOpen, RefreshRounded, Router, SortByAlpha, TaskOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import classNames from 'classnames'
import request from '@config'
import { v4 } from 'uuid'
import FormInputSelectOne from '@components/Forms/FormInput/FormInputSelectOne'
import { Loading } from './create-training'
import toast from "react-hot-toast";
import FormInput from "@components/Forms/FormInput/FormInput";
import { CreateAppointmentModal } from '@components/CreateAppointmentModal/CreateAppointmentModal'
import { UserState } from '@app/User/user.types'
import AreYouSureModal from '@components/Modals/AreYouSureModal'
import { useRouter } from "next/router";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
interface Appointment {
    Id: string;
    UserId: string;
    Date: string;
    Status: string;
    created_at: string;
    updated_at: string;
}

const CreateAssayModal = ({ userId, finishEvent }: { userId: string, finishEvent: () => void }) => {
    const [key, setKey] = useState('');
    const [assayName, setAssayName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleCreateAssay = async () => {
        try {
            setIsLoading(true);
            const res = await request.post('/userassays', {
                Name: assayName,
                UserId: userId
            });
            console.log("res", res);
            setIsLoading(false);
            finishEvent();
        } catch (error) {
            console.log("error", error);
            setIsLoading(false);
            finishEvent();
        }
    }


    return <>
        <div onClick={(e) => {
            finishEvent();
        }} className="z-[999] grid place-content-center h-screen top-0 left-0 w-screen fixed bg-[black] bg-opacity-25">
            <div onClick={(e) => e.stopPropagation()} className='w-[400px] p-[20px] relative flex flex-col gap-[10px] rounded-[20px_5px] max-h-[300px] bg-[white]'>
                <div className="flex h-[50px]">
                    <h1 className='text-[#184E57] text-[24px] leading-none mb-[10px] font-nexa-bold '> Tahlil Talebi Oluştur </h1>
                    <button onClick={() => { finishEvent() }} className='w-[30px] right-[20px] top-[20px] absolute text-[white] h-[30px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                        <Close />
                    </button>
                </div>
                {isLoading && <LocalLoading message='Tahlil talebiniz oluşturuluyor...' />}
                <FormInput placeholder='Tahlil adı' value={assayName} onChange={(e) => { setAssayName(e.currentTarget.value) }} />
                <button onClick={() => handleCreateAssay()} disabled={!(assayName)} className='bg-[#4E929D] disabled:opacity-25  text-[white] w-[120px] h-[40px] text-[14px]'> Tahlil Talep Et </button>
            </div>
        </div>
    </>
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

    const [areYouSureModalState, setAreYouSureModalState] = useState<boolean>(false);
    const router = useRouter();
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
    return <TableRow onClick={() => {
        setUpdateTheUserModal(true)
    }} >
        {
            isLoading && <LocalLoading message="Güncelleniyor" />
        }

        <TableCell className="leading-none" component="th" scope="row">
            <p>
                {
                    appointment.user?.information?.Fullname || "-"
                }
            </p>
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <p>{appointment.user?.Email || '-'}</p>
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <p> {appointment.user?.information?.Phone || '-'} </p>
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
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
        <TableCell className="leading-none" component="th" scope="row">
            {
                appointment.Status === "Acil" ? <StatusBox type="Acil" /> : <StatusBox type="Randevulu" />
            }
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <button onClick={(e) => {

            }}
                className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                <MenuOpen />
            </button>

        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <button onClick={(e) => {
                e.stopPropagation();
                router.push(`/dashboard/forms-management/?name=${appointment.user?.information?.Fullname}`)
            }}
                title='Form'
                className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                <TaskOutlined />
            </button>
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <button onClick={(e) => {
                e.stopPropagation();
                router.push(`/dashboard/prescriptions-management/?name=${appointment.user?.information?.Fullname}`)
            }}
                title='Reçete'
                className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                <BookmarkAdded />
            </button>
        </TableCell>
        <TableCell className="leading-none" component="th" scope="row">
            <button onClick={(e) => {
                e.stopPropagation();
                setAreYouSureModalState(true);
            }}
                title='Sil'
                className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#ce4343]'>
                <Delete />
            </button>
        </TableCell>
        {open && <CreateAssayModal userId={appointment.user.Id} finishEvent={() => {
            setOpen(false)
            afterUpdate()
        }} />}


        {areYouSureModalState && <AreYouSureModal text="Randevu silinecek" finish={({ confirmed }) => {
            if (confirmed) {
                request.delete(`/userappointments/${appointment.Id}`).then(res => {
                    toast.success("Randevu silindi");
                    setAreYouSureModalState(false);
                    afterUpdate();
                }).catch(err => {
                    console.log(err);
                    toast.error("Bir hata oluştu");
                    afterUpdate();
                })
            }
            setAreYouSureModalState(false);
        }} />}

        {
            updateTheUserModal &&
            <div onClick={(e) => {
                e.stopPropagation();
                setUpdateTheUserModal(false)
            }} className='fixed z-20 top-0 grid place-content-center left-0 w-full h-screen bg-opacity-50 bg-black-100'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="w-[80%] self-center justify-self-center relative min-h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
                    <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Güncelle</h1>
                    <p className='text-[#5C5C5C] text-[16px]'> Hastaya ait randevu ve durum güncellemesi yapın.</p>
                    <div className="flex flex-col mt-[45px]">
                        <h3 className='text-[#4E929D] !text-[14px] font-nexa-bold'>
                            Hasta Durumu
                        </h3>
                        <div className='flex md:flex-row items-start flex-col gap-4 md:gap-[50px] '>
                            <SelectStatus value={tempStatus} onChange={(v) => {
                                setTempStatus(v)
                            }} />

                            <div className="flex ml-auto flex-col w-full md:w-[400px] items-start justify-center gap-[10px]">
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
                    }}
                        className='text-[white] md:mt-auto mt-4 rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-full max-w-[252px] h-[50px]'>
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

export const SelectUserModal = ({ setter }: { setter: (v: any) => void }) => {
    const [searchKey, setSearchKey] = useState<string>("");
    const [searchResults, setSearchResults] = useState<UserState[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<UserState | null>(null);
    const handleSearchPatient = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setSearchKey(e.currentTarget.value);
    }

    const searchPatient = (key: string) => {
        request.post(`/search/user/patient?page=1`, {
            key
        }).then(res => {
            setSearchResults(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        if (!selectedPatient && searchKey.length > 0) {
            console.log("g 1");

            searchPatient(searchKey);
        } else {
            console.log("g 2");
            setSearchResults([]);
        }
    }, [searchKey, selectedPatient]);

    const handleCancel = () => {
        setter({
            data: {
                Fullname: "",
                UserId: "",
            }, open: false
        })
    }
    const selectPatient = (UserId: string, Fullname: string) => {
        setter({
            data: {
                Fullname,
                UserId
            },
            open: true
        })
    }
    const UserResultsItem = ({ item, cancel = false }: { item: UserState, cancel?: boolean }) => {
        return (
            <div onClick={() => {
                setSelectedPatient(item)
                item?.Id && selectPatient(item.Id, (item.Information.Fullname || 'YOOK'))
            }} className="w-full h-[40px] border-t-[1px] flex items-center px-4">
                <p>
                    <span>  {item.Information.Fullname} </span> <span className='bg-[#94c5ce] ml-4 px-[6px] align-middle text-center rounded-[10px]'>{item.Email}</span>
                </p>
                {
                    cancel && (<button onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                        e.stopPropagation();
                        //setSelectedPatient işleminden sonra rerender edilmemesinin nedeni : https://stackoverflow.com/questions/53253940/react-hooks-usestate-not-updating-immediately
                        setSelectedPatient(null)
                        setSearchKey('');

                    }} className="ml-auto">
                        <Cancel />
                    </button>)
                }
            </div>
        )
    }

    const UserResults = () => {
        return (<div className="w-full max-h-[400px] absolute top-[0px] z-[99] bg-[white]  border-[#4E929D]-500 border-2">
            {searchResults.map((item, index) => <UserResultsItem key={index} item={item} />)}
        </div>)
    }

    const handleConfirm = () => {
        setter({
            data: {
                Fullname: selectedPatient?.Information.Fullname || '',
                UserId: selectedPatient?.Id || ''
            },
            open: false
        })
    }

    return <>
        <div className="fixed z-99 w-screen h-screen top-0 left-0 bg-black-100 bg-opacity-70">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[600px] h-[400px] py-[100px] bg-[white] rounded-[20px_5px] flex flex-col">
                    <div className="w-full h-[50px] flex items-center justify-center">
                        <p className="text-[#4E929D] text-[16px] font-nexa-bold">Hasta Seç</p>
                    </div>
                    {!selectedPatient && <div className="w-full h-[50px] flex items-center justify-center">
                        <input onChange={handleSearchPatient} value={searchKey} className="w-[400px] h-[40px] border-[#4E929D]-500 border-2 rounded-[20px_5px] px-4" />
                    </div>}
                    <div className="w-[400px] min-h-[100px] self-center relative flex items-center justify-center">
                        {
                            selectedPatient ? <UserResultsItem item={selectedPatient} cancel /> : <UserResults />
                        }
                    </div>
                    <div className="w-full h-[50px] flex items-center justify-center">
                        {!selectedPatient ? <button onClick={handleCancel} className="w-[100px] h-[40px] bg-[#4E929D] text-[white] rounded-[20px_5px]">İptal</button> :
                            <button onClick={handleConfirm} className="w-[100px] h-[40px] bg-[#4E929D] text-[white] rounded-[20px_5px]">Seç</button>}
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default function AppointmentManagement() {
    const [appointments, setAppointments] = useState<Appointment[]>([

    ])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [searchKey, setSearchKey] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [keyword, setKeyword] = useState("")
    const getAppointments = async () => {
        const { data } = await request.get("/userappointments?page=" + page);
        console.log("Appointments", data);
        return data;
    }
    const [selectUserModal, setSelectUserModal] = useState({
        data: {
            Fullname: "",
            UserId: "",
        },
        open: false
    })

    const getAndSetAppointments = async () => {
        setIsLoading(true)
        request.get(`/userappointments?page=${page}`).then((res) => {
            setAppointments(res.data.data)
            setPageCount(res.data.PageCount)
            setIsLoading(false)
        }).catch((err) => {
            console.log("err", err)
            setIsLoading(false)
        })
    }

    const search = async () => {
        request.post(`/search/appointment?page=${page}`, {
            key: keyword
        }).then((res) => {
            setAppointments(res.data.data)
            setPageCount(res.data.PageCount)
        }).catch((err) => {
            console.log("err", err)
        })
    }

    const refresh = () => {
        if (keyword.length > 0) search()
        else getAndSetAppointments()
    }

    useEffect(() => {
        if (searchKey.trim().length > 0) {
            request.post(`/search/appointment?page=${page}`, { key: searchKey })
                .then((data) => {
                    setAppointments(data.data.data)
                })
                .catch((err) => {
                    toast.error("Arama yapılırken bir hata oluştu");
                })
        } else getAndSetAppointments()
    }, [page, searchKey])

    const [openNewAppointmentModal, setOpenNewAppointmentModal] = useState(false)

    useEffect(() => {
        if (!selectUserModal.open && selectUserModal.data.UserId.length > 0) {
            setOpenNewAppointmentModal(true)
        }
    }, [selectUserModal])

    return (
        <DashboardLayout>
            {
                isLoading && <LocalLoading message="Randevularınız yükleniyor..." />
            }
            {
                openNewAppointmentModal && <CreateAppointmentModal UserId={selectUserModal.data.UserId} finish={() => {
                    console.log("OLUŞTURULDUUU");
                    refresh()
                    setOpenNewAppointmentModal(false)
                }} />
            }
            <div className="absolute top-0 left-0">
                {
                    selectUserModal.open && <SelectUserModal setter={(v) => {
                        setSelectUserModal({
                            ...v
                        })
                        console.log("SELECTED", v.data);
                    }} />
                }
            </div>

            <div className="md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                <div className="w-full flex text-start items-center justify-start py-[26px] px-[10px]">
                    <div className="flex flex-col justify-between w-full">
                        <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Randevu Yönetimi</Text>
                        <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Tüm
                            randevularınızı yönetin.</Text>
                    </div>
                    <button onClick={() => {
                        setSelectUserModal({
                            data: selectUserModal.data,
                            open: true
                        })
                    }} className='bg-[#4E929D] flex  min-w-[150px] h-[40px] items-center justify-center text-[white] rounded-[20px_5px]'>
                        <Add className="text-[white] text-[14px]" />
                        <p>Randevu Oluştur</p>
                    </button>
                </div>
                {/* <CreateAppointmentModal  UserId='' finish={()=>{}} /> */}
                <div className="w-[60%] gap-[10px] mt-[10px] mb-[30px] flex">
                    <input type="text" onChange={(e) => {
                        setSearchKey(e.target.value)
                    }
                    } placeholder='Ad Soyad ile arayın'
                        className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />

                    <button onClick={() => {
                        getAndSetAppointments()
                    }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                        <RefreshRounded />
                    </button>
                </div>
                {
                    appointments?.length > 0 ? <>
                        <TableContainer className='bg-[white] '>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[6] !text-[14px] ">Ad Soyad</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[6] !text-[14px] ">E-posta</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[4] !text-[14px] ">Telefon</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[4] !text-[14px] ">Randevu Tarihi</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] !text-[14px] ">Durum</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] w-full !text-[14px] text-center ">Güncelle</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] w-full !text-[14px] text-center ">Form</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] w-full !text-[14px] text-center ">Reçete</Text></TableCell>
                                        <TableCell align="left"><Text type="h3" className="text-secondary flex-[2] w-full !text-[14px] text-center ">Sil</Text></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        appointments?.length > 0 ? appointments.map((appointment: Appointment) => {
                                            return <Row afterUpdate={() => {
                                                getAndSetAppointments()
                                            }} key={v4()} appointment={appointment} />
                                        }) : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Randevunuz bulunmamaktadır </h1>
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]"
                            onChange={(e: any, value: number) => {
                                setPage(value)
                            }} count={pageCount} />
                    </> : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Randevunuz bulunmamaktadır </h1>
                }
            </div>
        </DashboardLayout>
    )
}
