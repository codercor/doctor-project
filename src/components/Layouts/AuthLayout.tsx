import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Container>
                <Container className="md:!max-w-[1455px]">
                    <Navbar backColor="light" />
                </Container>
            </Container>
            <Container className="h-[170px] .bg-[url(/images/png/kara-uzum.png)]  bg-no-repeat bg-cover !min-w-full">
            </Container>
            <Container className="md:h-[740px] h-[550px] grid place-content-center  bg-no-repeat bg-cover !min-w-full">
                {children}
            </Container>
            <Footer />
        </>
    );
}

export default AuthLayout;