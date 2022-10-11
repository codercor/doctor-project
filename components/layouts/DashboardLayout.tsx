import Text from "../atoms/Text";
import MainNavbar from "../navbar/MainNavbar";
import Section from "../Section";
import HomeSection from "../Section/HomeSection";
import HomeFunctionalMedicineSection from "../Section/HomeFunctionalMedicineSection";

const DashboardLayout = () => {
    return (
        <div className="">
            <MainNavbar />
            <HomeSection/>
            <HomeFunctionalMedicineSection />
        </div>
    );
}

export default DashboardLayout;