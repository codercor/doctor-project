import Container from "@components/Container";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { School, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import DashBoardNavbar from "@components/Navbar/DashBoardNavbar";
import useUser from "src/hooks/user.hook";
import { Loading } from "pages/dashboard/create-training";
import useTraining from "src/hooks/training.hook";
import { toast } from "react-hot-toast";
import { useRouter } from "next/dist/client/router";



const MyTrainings = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const {
        getUsersTrainings,
        user: {
            UsersTrainings,
            UsersTrainingsProcess: {
                IsLoading
            }
        }
    } = useUser();

    useEffect(() => {
        getUsersTrainings();
    }, [])


    return <div className="h-[462px] bg-[#F4F4F4] p-[32px]">
        <Text className="text-[#4D5628] text-[20px] font-nexa-bold">Eğitimlerim</Text>
        {IsLoading ? <div className="z-[100] fixed top-0 left-0"> <Loading message="Eğitimler yükleniyor" /></div> : UsersTrainings.length < 1 ? <div className="w-full h-full  grid place-content-center">
            <School className="text-[#BABCAC] mx-auto text-[32px]" />
            <Text className="text-[#BABCAC] text-[14px] font-nexa-regular">Satın aldığınız eğitim bulunmamaktadır.</Text>
        </div> : <div className="flex mt-2 gap-12 border-red-500 overflow-auto  scrollbar-thumb-secondary scrollbar-thin p-4 shadow-2xl">

            {UsersTrainings.filter(item => item?.Image).map((item) => {
                console.log("item", item);

                const exampleProps = {
                    image: item.Image as string || '',
                    title: item.Name as string || '',
                    description: item.Details as string || '',
                    backgroundColor: "!bg-[#EFEEF5]",
                    detailHref: `/training?id=${item.Id}`,
                    detailOnImage: false,
                    detailPos: "br",
                    imageRounded: "br",
                    boxRounded: "tl",
                    priceBackgroundColor: "!bg-[#ffffff]",
                    priceOnImage: true,
                    pricePos: "tl",
                    type: "vertical",
                    showBuyButton: false,
                    detailButtonDirection: "right",
                    width: 378,
                    mWidth: 314,
                    height: 328,
                    mHeight: 250,
                    isMobile,
                    sizeType: isMobile ? "sm" : "md",
                    showPrice: false,
                    Id: item.Id as string || '',
                }
                console.log("exampleProps", exampleProps);

                //@ts-ignore
                return <TrainingCard key={v4()} {...exampleProps} />
            }
            )
            }

        </div>}
    </div>
}

const AllTrainingsFloating = () => {
    const { publicTrainings, getPublicTrainings } = useTraining();
    const { user: { Information } } = useUser();
    const router = useRouter();
    useEffect(() => {
        const userGender = Information.Gender
        const userFullName = Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            router.push("/dashboard/account");
            return;
        }
        if (publicTrainings.length < 1) getPublicTrainings(1);
    }, [])
    const [trainings, setTrainings] = useState<TrainingCardProps[]>([]);

    useEffect(() => {
        if (publicTrainings.length > 0) {
            setTrainings(publicTrainings.map((item) => {
                console.log("IIITem", item);
                //       (item.Price * ((100 - item.DiscountRate) / 100)).toFixed(1).toString(),
                return ({
                    image: item.Image as string || '',
                    title: item.Name as string || '',
                    description: item.Details as string || '',
                    price: (item.Price + ""),
                    detailHref: `/training?id=${item.Id}`,
                    DiscountRate: item.DiscountRate,
                    Id: item.Id as string || '',
                })
            }
            ))
        }
    }, [publicTrainings.length])

    const floatingContainerRef = useRef<HTMLDivElement>(null)
    return <div>
        <div className="flex justify-between mb-[34px]">
            <div>
                <Text className="text-[#4D5628] text-[20px] font-nexa-bold">Tüm Eğitimler</Text>
                <Text className="text-[#BFBFBF] text-[14px] font-nexa-regular">Prof.Dr Nazan Uysal Harzadın’in tüm eğitimlerini inceleyin.</Text>
            </div>
            <div className="flex gap-[20px] transition-all">
                <div onClick={() => {
                    floatingContainerRef.current?.scrollTo({ left: floatingContainerRef.current.scrollLeft - 406, behavior: "smooth" })
                }} className="w-[52px] h-[52px] bg-[#7C467B] grid place-content-center text-[white] rounded-[5px_10px_5px_10px] pl-2">  <ArrowBackIos /> </div>
                <div onClick={() => {
                    floatingContainerRef.current?.scrollTo({ left: floatingContainerRef.current.scrollLeft + 406, behavior: "smooth" })
                }} className="w-[52px] h-[52px] bg-[#7C467B] grid place-content-center text-[white] rounded-[5px_10px_5px_10px]">  <ArrowForwardIos /> </div>
            </div>
        </div>
        <div ref={floatingContainerRef} className="flex  h-fit overflow-scroll md:flex-row items-center md:items-start scrollbar-thin">
            {
                trainings.map((training, index) => {
                    return <div key={v4()} className="mx-[14px] h-[380px] min-w-[400px]">
                        <TrainingCard  {...training} />
                    </div>
                })
            }
        </div>
    </div>
}
const UserDashBoard = () => {
    return <>
        <MyTrainings />
        <AllTrainingsFloating />
    </>
}

export default UserDashBoard