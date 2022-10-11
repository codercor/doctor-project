import type { NextPage } from 'next'
import MainNavbar from "@components/Navbar/MainNavbar";
import HomeSection from "@components/Section/HomeSection";
import HomeFunctionalMedicineSection from "@components/Section/HomeFunctionalMedicineSection";
import DashboardLayout from '@components/layouts/DashboardLayout'
import HomeTrainingsSection from '@components/Section/HomeTrainingsSection';

const Home: NextPage = () => (
  <DashboardLayout>
    <MainNavbar />
    <HomeSection />
    <HomeFunctionalMedicineSection />
    <HomeTrainingsSection/>
  </DashboardLayout>
)

export default Home
