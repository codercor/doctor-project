import Text from "@components/Text";
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
import { ArrowDownward } from '@mui/icons-material'
import SalesChart from '@components/Chart/SalesChart';
import EarningChart from "@components/Chart/EarningChart";
import { useEffect, useState } from "react";
import { adminGetLastSalesRequest, getAdminStats } from "@app/User/user.utils";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router";
import LastSalesTable from "@components/Table/LastSalesTable";
import useUser from "src/hooks/user.hook";


const StatsCard = ({ title, value }: { title: string, value: string }) => <div className="bg-[#DEEEF0] flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center p-[18px] w-full h-[70px] sm:h-[100px]">
    <Text type="paragraph" className="text-[#82b2bb] text-[12px] sm:text-[14px] !font-nexa-bold">{title}</Text>
    <Text type="paragraph" className="text-[#74ADB7] text-[22px] sm:text-[28px] !font-nexa-bold">{value}</Text>
</div>

const AdminDashBoard = () => {
    const [stats, setStats] = useState<any>(null);
    const { user: { IsAdmin } } = useUser()
    const router = useRouter()
    useEffect(() => {
       
        getAdminStats().then(res => {
            console.log(res);
            setStats(res);
        })
    }, [IsAdmin])
    return <div className="flex flex-col gap-[10px] ">
        <div className="h-[500px] bg-[#F4F4F4] overflow-auto p-[32px] scrollbar-thumb-white-default scrollbar-thin scrollbar-track-indigo-100">
            <Text type="h6" className="text-[#4D5628] text-[14px] font-nexa-regular">Son Satın Alımlar</Text>
            <div className="w-full h-[400px] justify-around flex mt-2">
                <div className="w-full h-full">
                    <LastSalesTable />
                    <div onClick={() => {
                        router.push("/dashboard/last-sales")
                    }} className="w-full cursor-pointer transition-colors translate-y-10 hover:bg-[#eeeeee] h-[50px] text-[black] text-[10px] flex flex-col justify-center items-center">
                        <Text type="paragraph" className="text-[12px]" > Daha fazla göster </Text>
                        <ArrowDownward sx={{ fontSize: '12px' }} />
                    </div>
                </div>
                {/* <div className="w-[30%] h-full">
                    <SalesChart />
                </div> */}
            </div>
        </div>
        {stats && <div className="min-h-[462px] overflow-auto bg-[#F4F4F4] px-[10px] sm:p-[32px] scrollbar-thumb-white-default scrollbar-thin scrollbar-track-indigo-100">
            <Text type="h6" className="text-[#4D5628] text-[14px] font-nexa-regular">Eğitim İstatislikleri</Text>
            <div className="flex sm:gap-[6px] gap-[8px] sm:flex-row flex-col w-full justify-between md:mt-2 overflow-auto" >
                <StatsCard title="Kazanç" value={Number(stats.Earned).toFixed(2) + "₺"} />
                <StatsCard title="Toplam Satın Alınan" value={stats.Purchased} />
                <StatsCard title="Toplam Üye" value={stats.UsersCount} />
                <StatsCard title="Toplam Eğitim" value={stats.Education} />
            </div>
            <div className="w-full sm:scale-100 h-[270px] justify-around flex  overflow-auto">
                <EarningChart data={stats} />
            </div>
        </div>}
    </div>
}



export default AdminDashBoard