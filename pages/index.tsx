import type { NextPage } from 'next'
import MainNavbar from "@components/navbar/MainNavbar";
import HomeSection from "@components/Section/HomeSection";
import HomeFunctionalMedicineSection from "@components/Section/HomeFunctionalMedicineSection";
import DashboardLayout from '@components/layouts/DashboardLayout'

const Home: NextPage = () => (
  <DashboardLayout>
    <MainNavbar />
    <HomeSection />
    <HomeFunctionalMedicineSection />
  </DashboardLayout>
)

export default Home
