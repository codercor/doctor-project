import Text from "@components/Text";
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
import { ArrowDownward } from '@mui/icons-material'
import SalesChart from '@components/Chart/SalesChart';
import EarningChart from "@components/Chart/EarningChart";
import { useEffect, useState } from "react";
import { adminGetLastSalesRequest, getAdminStats } from "@app/User/user.utils";
import CircularProgress from '@mui/material/CircularProgress';

type TableRowType = {
    date: string;
    training: string;
    user: string;
}
const rows: TableRowType[] = [
    {
        date: "11.10.2022 11:32",
        training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 1",
        user: "G** U**"
    },
    {
        date: "10.10.2022 15:12",
        training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 2",
        user: "B** B**"
    },
    {
        date: "09.10.2022 10:32",
        training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 3",
        user: "E** B**"
    },
    {
        date: "08.10.2022 11:32",
        training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 4",
        user: "P** Ğ**"
    },
    {
        date: "07.10.2022 15:12",
        training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 5",
        user: "M** T**"
    },
    // {
    //     date: "10.10.2022 15:12",
    //     training: "Fonksiyonel Tıp ve Fonksiyonel Beslenme 2",
    //     user: "B** B**"
    // },
];

const LastSalesTable = () => {
    const [list, setList] = useState<any[]>([]);
    const [IsLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => { }

    useEffect(() => {
        setIsLoading(true);
        adminGetLastSalesRequest().then(res => {
            setList(res.slice(0, 5));
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
        })
    }, [])


    return <>
        {IsLoading ? <CircularProgress /> : <TableContainer>

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
                                -- TODO --
                            </TableCell>
                            <TableCell className="leading-none" align="left">{row.User.Information.Fullname || 'İsim yok'}</TableCell>
                            <TableCell className="leading-none" align="left">{row.Education?.Name || 'Eğitim ismi yok'}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer >}
    </>
}


const StatsCard = ({ title, value }: { title: string, value: string }) => <div className="bg-[#DEEEF0] flex flex-col items-start justify-center p-[18px] w-[247px] h-[100px]">
    <Text type="paragraph" className="text-[#74ADB7] text-[14px] !font-nexa-bold">{title}</Text>
    <Text type="paragraph" className="text-[#74ADB7] text-[28px] !font-nexa-bold">{value}</Text>
</div>

const AdminDashBoard = () => {
    const [stats, setStats] = useState<any>(null);
    useEffect(() => {
        getAdminStats().then(res => {
            console.log(res);
            setStats(res);
        })
    }, [])
    return <div className="flex flex-col gap-[10px]">
        <div className="h-[462px] bg-[#F4F4F4] p-[32px]">
            <Text type="h6" className="text-[#4D5628] text-[14px] font-nexa-regular">Son Satın Alımlar</Text>
            <div className="w-full h-[390px] justify-around flex mt-2">
                <div className="w-full h-full">
                    <LastSalesTable />
                    <div className="w-full cursor-pointer transition-colors hover:bg-[#eeeeee] h-[50px] text-[black] text-[10px] flex flex-col justify-center items-center">
                        <Text type="paragraph" className="text-[12px]" > Daha fazla göster </Text>
                        <ArrowDownward sx={{ fontSize: '12px' }} />
                    </div>
                </div>
                {/* <div className="w-[30%] h-full">
                    <SalesChart />
                </div> */}
            </div>
        </div>
        {stats && <div className="h-[462px]  bg-[#F4F4F4] p-[32px]">
            <Text type="h6" className="text-[#4D5628] text-[14px] font-nexa-regular">Eğitim İstatislikleri</Text>
            <div className="flex justify-between mt-2" >
                <StatsCard title="Kazanç" value={stats.Earned+"₺"} />
                <StatsCard title="Toplam Satın Alınan" value={stats.Purchased} />
                <StatsCard title="Toplam Üye" value={stats.UsersCount} />
                <StatsCard title="Toplam Eğitim" value={stats.Education} />
            </div>
            <div className="w-full h-[270px] justify-around flex opacity-10">
                <EarningChart />
            </div>
        </div>}
    </div>
}



export default AdminDashBoard