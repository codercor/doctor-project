import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import Input from '@components/Input/Input';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import { Refresh } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function UserManagement() {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [filtered, setFiltered] = useState<Array<any>>([]);
    const [ascDesc, setAscDesc] = useState<string>("asc");
    useEffect(() => {
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




    return (
        <DashboardLayout>
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
                    <div className='bg-quaternary-flat text-[white] min-w-[70px] rounded-[10px_20px_10px_20px]  h-full grid place-content-center' > <Refresh /> </div>
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

                                    <TableCell className="leading-none" align="left">{row.IsPatient ? <Button type='quaternary-flat' className="!w-[108px] h-[36px] !p-[0] grid place-content-center"> Hasta </Button> : <Button type='tertiary-flat' className="!w-[108px] h-[36px] !p-[0] grid place-content-center"> Randevulu </Button>}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer >
            </div>
        </DashboardLayout>
    )
}
