import { adminGetLastSalesRequest } from "@app/User/user.utils";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CircularProgress } from '@mui/material';
import { Pagination } from '@mui/material'
const LastSalesTable = ({ limited = true }: { limited?: boolean }) => {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        setIsLoading(true);
        adminGetLastSalesRequest(page).then(res => {
            limited ? setList(res.data.slice(0, 5)) : setList(res.data);
            setIsLoading(false);
            setPageCount(res.data.PageCount)
        }).catch(err => {
            setIsLoading(false);
        })
    }, [page])

    return <>
        <div className="w-full relative  min-h-[300px]">
            { }
            {IsLoading ? <div className="w-full h-[80%] grid place-content-center"> <CircularProgress /></div> :
                <>
                    {(list.length < 1) ? <h1 className="w-full flex items-center justify-center h-[80%]"> Kayıt bulunmamaktadır </h1> :
                        <TableContainer>  <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Tarih</TableCell>
                                    <TableCell align="left">Kullanıcı</TableCell>
                                    <TableCell align="left">Eğitim</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {list?.length > 0 ? list.map((row, index) => (
                                    <TableRow
                                        key={row.Id}
                                        className={"border-2 p-0 leading-none h-[10px] " + (index % 2 != 0 ? 'bg-[#DEEEF0]' : '')}
                                    >
                                        <TableCell className="leading-none" component="th" scope="row">
                                            <p className="min-w-[140px] w-fit ">
                                                {new Date(row?.Date).toLocaleString("tr-TR", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "2-digit",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                }) || '-'}</p>
                                        </TableCell>
                                        <TableCell className="leading-none" align="left">{<p className="min-w-[120px] w-fit ">{row.User?.Information.Fullname || '-'} </p>}</TableCell>
                                        <TableCell className="leading-none" align="left">{<p className="min-w-[120px] w-fit ">{row?.Education?.Name} || '-'</p>}</TableCell>
                                    </TableRow>
                                )) : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Kayıt bulunmamaktadır </h1>
                                }

                            </TableBody>
                        </Table>
                        </TableContainer >
                    }
                </>
            }

            <div className="flex w-full translate-y-10 mt-auto absolute bottom-0">
                <Pagination siblingCount={3} variant="text" page={page} className="mx-auto w-fit" onChange={(e: any, value: number) => {
                    setPage(value)
                }} count={pageCount} />
            </div>
        </div>
    </>
}

export default LastSalesTable