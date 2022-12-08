import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function UserManagement() {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => { }

    useEffect(() => {
        setIsLoading(true);
        adminGetUsers().then(res => {
            console.log("rees", res)
            setList(res);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
        })
    }, [])
    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
                <TableContainer>

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

                            {list.map((row, index) => (
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

                                <TableCell className="leading-none" align="left">{row.IsPatient ?  <Button type='quaternary-flat' className="!w-[108px] h-[36px] !p-[0] grid place-content-center"> Hasta </Button>: <Button type='tertiary-flat' className="!w-[108px] h-[36px] !p-[0] grid place-content-center"> Randevulu </Button>}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer >
            </div>
        </DashboardLayout>
    )
}
