import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import { FormInputSelect } from '@components/Forms/FormInput/FormInput';
import Input from '@components/Input/Input';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import request from '@config';
import { Close, Refresh } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
interface IChangeIsPatientModal {
    open: boolean,
    data: {
        UserId: string | null,
        IsPatient: boolean | null
    }
}
const ChangeIsPatientModal = ({ data, setter, finishEvent }: { data: IChangeIsPatientModal, setter: (newData: IChangeIsPatientModal) => void, finishEvent: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSelectIsPatient = (newIsPatient: boolean) => {
        setter({
            open: data.open,
            data: {
                UserId: data.data.UserId,
                IsPatient: newIsPatient
            }
        }
        )
    }
    const handleSubmit = () => {
        setIsLoading(true);
        request.put(`/user/changeIsPatient/` + data.data.UserId, {
            IsPatient: data.data.IsPatient
        }).then(res => {
            console.log("IsPatient changed");
        }).catch(err => {
            console.log("isPatient Değiştirilemedi ", err);
        }).finally(() => {
            setIsLoading(false);
            finishEvent();
        })
    }

    const handleCancel = () => {
        setter({
            open: false,
            data: {
                UserId: null,
                IsPatient: null
            }
        })
    }


    return data.open ? <div onClick={(e) => {
        handleCancel();
        e.stopPropagation();
    }} className='fixed z-[9999] top-0 grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="w-[904px] relative min-h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
            <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Güncelle</h1>
            <p className='text-[#5C5C5C] text-[16px]'> Kullanıcı durumunu güncelleyin. </p>
            <div className="flex flex-col w-[40%] gap-4 mt-[45px] mb-2">
                <FormInputSelect
                    options={
                        [
                            {
                                label: "Hasta",
                                value: "true"
                            },
                            {
                                label: "Randevulu",
                                value: "false"
                            }
                        ]
                    }
                    label="Kullanıcı Durumu"
                    value={data?.data?.IsPatient?.toString()}
                    onChange={(e) => {
                        handleSelectIsPatient(e.target.value == "true" ? true : false)
                    }}
                />
            </div>
            <button onClick={handleSubmit} className={classNames('text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px]', {
            })}>
                Güncelle
            </button>
            <button onClick={handleCancel} className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                <Close />
            </button>
        </div>

    </div> : <></>


}

export default function UserManagement() {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [filtered, setFiltered] = useState<Array<any>>([]);
    const [ascDesc, setAscDesc] = useState<string>("asc");


    const fetchUsers = () => {
        setIsLoading(true);
        adminGetUsers().then(res => {
            console.log("rees", res)

            let res2 = res.map((item: any) => {
                if (!item.Information.Fullname) item.Information.Fullname = "isimsiz";
                if (!item.Information.Phone) item.Information.Phone = "telefon yok";
                return item;
            })

            setList(res2);
            setIsLoading(false);
            setFiltered((res2 as any[]).sort((a, b) => {
                if (a.Information.Fullname.toLowerCase() < b.Information.Fullname.toLowerCase()) return -1;
                if (a.Information.Fullname.toLowerCase() > b.Information.Fullname.toLowerCase()) return 1;
                return 0;
            }));

        }).catch(err => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])



    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        let filteredList = list.filter(item => {
            //item.Email, .Phone, .Fullname
            if (!e.target.value) return true;
            return item.Email.includes(e.target.value) || item.Information.Phone.includes(e.target.value) || item.Information.Fullname.includes(e.target.value)
        })
        setFiltered(filteredList);
    }


    useEffect(() => {
        if (ascDesc == "asc") {
            setFiltered([...filtered].sort((a, b) => {
                if (a.Information.Fullname.toLowerCase() < b.Information.Fullname.toLowerCase()) return -1;
                if (a.Information.Fullname.toLowerCase() > b.Information.Fullname.toLowerCase()) return 1;
                return 0;
            }))
        } else {
            setFiltered([...filtered].sort((a, b) => {
                if (a.Information.Fullname.toLowerCase() > b.Information.Fullname.toLowerCase()) return -1;
                if (a.Information.Fullname.toLowerCase() < b.Information.Fullname.toLowerCase()) return 1;
                return 0;
            }))
        }
    }, [ascDesc])


    const [isPatientModal, setIsPatientModal] = useState<IChangeIsPatientModal>({
        open: false,
        data: {
            UserId: null,
            IsPatient: null
        }
    });

    return (
        <DashboardLayout>
            {
                isPatientModal.open && <ChangeIsPatientModal data={isPatientModal} setter={setIsPatientModal} finishEvent={() => {
                    setIsPatientModal({
                        open: false,
                        data: {
                            UserId: null,
                            IsPatient: null
                        }
                    })
                    fetchUsers();
                }} />
            }
            <div className=" md:h-[798px] flex flex-col rounded-[30px_5px] p-[20px] bg-[#F4F4F4]">
                <h1 className='text-secondary-flat font-medium text-[18px] mb-[20px]'> Kullanıcı Yönetimi  </h1>
                <div className='w-full h-[54px] gap-1 flex justify-between mb-2'>
                    <Input onChange={handleFilter} placeholder='E-Posta, telefon numarası veya kullanıcı adına göre ara' />
                    <div className="min-w-[40%]">
                        <select onChange={(e) => {
                            setAscDesc(e.target.value);
                        }} className='disabled:bg-primary disabled:rounded-none duration-500 transition-all border-n h-[48px] pl-[20px] focus:outline-none w-full placeholder:text-[#3B6369] bg-[#EBF3F4] rounded-[5px_20px_0_20px]' placeholder='Tümü' >
                            <option value="asc"> A&apos;dan Z&apos;ye </option>
                            <option value="dsc" > Z&apos;den A&apos;ya </option>
                        </select>
                    </div>
                    <div onChange={() => {
                        fetchUsers();
                    }} className='bg-quaternary-flat text-[white] min-w-[70px] rounded-[10px_20px_10px_20px]  h-full grid place-content-center' > <Refresh /> </div>
                </div>
                <TableContainer className='bg-[white] '>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Kullanıcı Adı</TableCell>
                                <TableCell align="left">E-posta adresi</TableCell>
                                <TableCell align="left">Telefon</TableCell>
                                <TableCell align="left">Kayıt</TableCell>
                                <TableCell align="left">Durum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {filtered.map((row, index) => (
                                <TableRow
                                    key={row.Id}
                                    className={"border-2 p-0 leading-none h-[10px] " + (index % 2 != 0 ? 'bg-[#DEEEF0]' : '')}
                                >
                                    <TableCell className="leading-none" component="th" scope="row">
                                        {row.Information.Fullname || 'isim yok'}
                                    </TableCell>
                                    <TableCell className="leading-none" align="left">{row.Email}</TableCell>
                                    <TableCell className="leading-none" align="left">{row.Information.Phone || 'Telefon yok'}</TableCell>
                                    <TableCell className="leading-none" align="left">{
                                        new Date(row.CreatedAt).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })
                                    }</TableCell>

                                    <TableCell onClick={() => {
                                        //open change isPatient modal
                                        setIsPatientModal({
                                            open: true,
                                            data: {
                                                UserId: row.Id,
                                                IsPatient: row.IsPatient
                                            }
                                        });
                                    }} className="leading-none" align="left">{row.IsPatient ?
                                        <button className="!w-[108px] h-[36px] uppercase text-[#3A356B] font-nexa-regular bg-[#DDDAFF] border-[1px] border-[#A09AD9] !p-[0] grid place-content-center">
                                            Hasta </button> :
                                        <button className="!w-[108px] h-[36px] uppercase text-[#98A170] font-nexa-regular bg-[#FBFFEC] border-[1px] border-[#D8E0B2] !p-[0] grid place-content-center">
                                            Randevulu </button>}</TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer >
            </div>
        </DashboardLayout>
    )
}
