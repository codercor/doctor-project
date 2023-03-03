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
import request, { TRAINING, TRAININGS_WITH_USER_ID } from "@config";
import { TrainingDataType } from "@app/Training/training.types";
import useAuth from "src/hooks/auth.hook";



const MyTrainings = () => {
    // const {
    //     getUsersTrainings,
    //     user: {
    //         UsersTrainings,
    //         UsersTrainingsProcess: {
    //             IsLoading
    //         }
    //     }
    // } = useUser();
    const { user: { Id } } = useUser()
    const router = useRouter()
    const { user: { IsAuthenticated } } = useAuth()
    const [UsersTrainings, setUserTrainings] = useState<TrainingDataType[]>([])
    const [IsLoading, setIsLoading] = useState(false)
    const getUsersTrainings = async () => {
        setIsLoading(true)
        const _toast = toast.loading("Kullanıcı eğitimleri yükleniyor...")
        try {
            const response = await request.get(
                TRAININGS_WITH_USER_ID.replace(':UserId', Id),
            );
            toast.success('Kullanıcı eğitimleri yüklendi.', { id: _toast });
            let filtered = response.data.data.map((item: any) => item.Education);
            console.log("Filtered", filtered);

            setUserTrainings(filtered)
            setIsLoading(false)
        }
        catch (error) {
            toast.error('Kullanıcı eğitimleri yüklenirken hata oluştu.', { id: _toast });
            setIsLoading(false)
        }
    }

    useEffect(() => {
        (IsAuthenticated && Id) && getUsersTrainings();
    }, [Id])



    return <div className="h-[462px] bg-[#F4F4F4] p-[32px]">
        <Text className="text-[#4D5628] text-[20px] font-nexa-bold">Eğitimlerim</Text>
        {IsLoading ? <div className="z-[100] fixed top-0 left-0"> <Loading message="Eğitimler yükleniyor" /></div> : UsersTrainings.length < 1 ? <div className="w-full h-full  grid place-content-center">
            <School className="text-[#BABCAC] mx-auto text-[32px]" />
        </div> : ((UsersTrainings).filter(item => item?.Image).length < 1 ? <h1 className='md:text-[24px] mt-4 text-[18px] w-full h-full  grid place-content-center text-center font-nexa-light'>  Satın alınmış eğitiminiz bulunmamaktadır  </h1> : <div className="flex mt-2 gap-12 border-red-500 overflow-auto  scrollbar-thumb-secondary scrollbar-thin p-4 shadow-2xl">

            {(UsersTrainings).filter(item => item?.Image).map((item) => {
                console.log("item", item);
                //@ts-ignore
                return <div key={v4()} className="min-w-[300px] md:w-[360px] h-[320px]">
                    <TrainingCard  {
                        ...{
                            image: item.Image as string || '',
                            title: item.Name as string || '',
                            description: item.Details as string || '',
                            detailHref: `/training?id=${item.Id}`,
                            Id: item.Id as string || '',
                        }
                    } />
                </div>
            }
            )
            }

        </div>)}
    </div>
}

const AllTrainingsFloating = () => {
    // const { publicTrainings } = useTraining();
    const [publicTrainings, setPublicTrainings] = useState<TrainingDataType[]>([])
    const [pageCount, setPageCount] = useState(1)
    const { user: { Information } } = useUser();
    const router = useRouter();
    const getPublicTrainings = async (page: number) => {
        const response = await request.get(`${TRAINING}?page=${page}`)
        setPublicTrainings(response.data.data)
        setPageCount(response.data.pageCount)
    }
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
    return <>
        {
            trainings.length == 0 ? <> </> : <div>
                <div className="flex justify-between mb-[34px]">
                    <div className="px-4">
                        <Text className="text-[#4D5628] text-[20px] font-nexa-bold">Tüm Eğitimler</Text>
                        <Text className="text-[#BFBFBF] text-[14px] font-nexa-regular">Prof.Dr Nazan Uysal Harzadın’in tüm eğitimlerini inceleyin.</Text>
                    </div>
                    <div className="flex px-4 gap-[20px] transition-all">
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
                            return <div key={v4()} className="mx-[14px] h-[380px] min-w-[360px]">
                                <TrainingCard  {...training} />
                            </div>
                        })
                    }
                </div>
            </div>
        }

    </>
}
const UserDashBoard = () => {
    return <>
        <MyTrainings />
        <AllTrainingsFloating />
    </>
}

export default UserDashBoard