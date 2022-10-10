import Section from ".";
import Image from 'next/image';
import HomeFirstSectionCard from "../Card/HomeFirstSectionCard";

const HomeSection = () => {
    return (
        <Section className="h-[260px] md:h-[600px]  bg-home-section-1m md:bg-home-section-1 bg-center bg-cover bg-no-repeat">
            <div className="relative h-full md:max-w-[1920px] md:mx-auto ">
                <span className="absolute z-1 bottom-4 left-4 md:hidden" >
                    <Image src="/images/svg/certified-practitioner.svg" height={50} width={202} />
                </span>
                <div className="absolute bottom-[60px] right-[200px] md:block hidden ">
                    <HomeFirstSectionCard />
                    <div className="mt-[20px]">
                        <Image src="/images/svg/certified-practitioner.svg" height={80} width={320} />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default HomeSection;