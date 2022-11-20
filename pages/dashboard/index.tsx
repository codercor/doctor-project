import Container from "@components/Container";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { School, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { v4 } from "uuid";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";
import useUser from "src/hooks/user.hook";
import UserDashBoard from "@components/DashBoards/UserDashBoard";
import AdminDashBoard from "@components/DashBoards/AdminDashBoard";




const DashBoard = () => {
    const { user } = useUser();
    return (
        <DashboardLayout>
            {user.IsAdmin ? <AdminDashBoard /> : <UserDashBoard />}
        </DashboardLayout>
    );
}

export default DashBoard;