import Container from "@components/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";

const LandingLayout = ({ children, backColor="dark" }: { children: any, backColor?:"dark" | "light" }) => {
    return (
        <div className="overflow-hidden">
            <Container>
                <Container className="md:!max-w-[1455px]">
                    <Navbar backColor={backColor} />
                </Container>
            </Container>
            {children}
            <BeforeFooter />
            <Footer />
        </div>
    );
}

export default LandingLayout;