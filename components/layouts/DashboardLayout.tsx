import Text from "../atoms/Text";
import MainNavbar from "../navbar/MainNavbar";
import Section from "../Section";
import HomeSection from "../Section/HomeSection";

const DashboardLayout = () => {
    return (
        <div className="">
            <MainNavbar />
            <HomeSection/>
        </div>
    );
}

export default DashboardLayout;