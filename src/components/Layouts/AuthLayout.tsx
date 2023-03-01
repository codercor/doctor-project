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
            <Container className="md:min-h-[740px] min-h-[350px] grid place-content-center   bg-no-repeat bg-cover !min-w-full">
                {children}
            </Container>
            <Footer />
        </>
    );
}

export default AuthLayout;