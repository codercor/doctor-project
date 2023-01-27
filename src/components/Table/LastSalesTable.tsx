import { adminGetLastSalesRequest } from "@app/User/user.utils";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CircularProgress } from '@mui/material';
import { Pagination } from '@mui/material'
const LastSalesTable = ({ limited = true }: { limited?: boolean }) => {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        adminGetLastSalesRequest(page).then(res => {
            limited ? setList(res.slice(0, 5)) : setList(res);
            console.log(res);

            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
        })
    }, [page])


    return <>
        {IsLoading ? <div className="w-full h-full grid place-content-center"> <CircularProgress /></div> : <div className="w-full"> <TableContainer>

            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Tarih</TableCell>
                        <TableCell align="left">Kullanıcı</TableCell>
                        <TableCell align="left">Eğitim</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {list.map((row, index) => (
                        <TableRow
                            key={row.Id}
                            className={"border-2 p-0 leading-none h-[10px] " + (index % 2 != 0 ? 'bg-[#DEEEF0]' : '')}
                        >
                            <TableCell className="leading-none" component="th" scope="row">
                                {new Date(row?.Date).toLocaleString() || 'Tarih yok'}
                            </TableCell>
                            <TableCell className="leading-none" align="left">{row.User.Information.Fullname || 'İsim yok'}</TableCell>
                            <TableCell className="leading-none" align="left">{row.Education?.Name || 'Eğitim ismi yok'}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer >
            <Pagination siblingCount={3} variant="text" page={page} className="mt-auto mb-[30px]" onChange={(e: any, value: number) => {
                setPage(value)
            }} count={page + 1} />
        </div>}
    </>
}

export default LastSalesTable