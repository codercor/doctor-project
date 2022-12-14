import Container from '@components/Container'
import LandingLayout from '@components/Layouts/LandingLayout'
import Text from '@components/Text'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DateRange, Download, HourglassBottom, Key, PlayArrow, PunchClock, School, Timelapse, TimelapseSharp, Timeline, VideoCallRounded, VideocamTwoTone } from '@mui/icons-material'
import Button from '@components/Button'
import Router, { useRouter } from 'next/router'
import { TrainingBranchType, TrainingDataType } from '@app/Training/training.types'
import useTraining from 'src/hooks/training.hook'
import { Loading } from 'pages/dashboard/create-training'
import { v4 } from 'uuid'
import useUser from 'src/hooks/user.hook'
import Link from 'next/link'
import { Zoom } from '@mui/material'
const TrainingDocumentCard = ({ title, url }: { title: string, url: string }) => {
    const handleDownload = () => {
        window.open(url, '_blank')
    }
    return <div className='w-full h-[67px] mt-8 flex items-center justify-between px-[20px] bg-secondary text-[white]'>
        <Text type='paragraph' className='text-[white]'>{title}</Text>
        <div onClick={handleDownload} className='text-white w-fit h-fit'>
            <Download />
        </div>
    </div>
}

const TrainingSection = ({ Order, Content, StartDate, Time, Password, ZoomURL, ZoomStartURL, EndDate = "" }: { Order: number, Content: string, StartDate: string, Time: string, ZoomURL?: string, Password?: string, ZoomStartURL?: string, EndDate?: string }) => {
    const { user: { IsAdmin } } = useUser();
    console.log("END DATE", new Date(EndDate).getTime(), "Today", new Date().getTime(), "END DAY > TODAY", new Date(EndDate).getTime() > new Date().getTime())

    const [isZoomOpen, setIsZoomOpen] = useState(false)

    useEffect(() => {
        if (new Date(EndDate).getTime() > new Date().getTime()) {
            setIsZoomOpen(true)
        }
    }, [EndDate])

    return <div className='transition-all duration-700 hover:whitespace-normal truncate w-full  h-fit mt-4  flex flex-col items-start justify-between p-[10px] text-ellipsis text-[#6E7846] hover:text-[white] hover:bg-secondary  bg-[#FFFFFF]'>
        <Text type='paragraph' className='text-inherit   h-fit hover:text-clip hover:whitespace-normal  truncate  text-[16px] w-[99%]'>{Order}-{Content}</Text>
        <div className="w-full flex justify-between">
            <div className='flex'>
                <DateRange />
                <Text type='paragraph' className='text-inherit text-[16px]'>{StartDate}</Text>
            </div>
            <div className='flex'>
                <Timelapse />
                <Text type='paragraph' className='text-inherit text-[16px]'>{Time}dk</Text>
            </div>
        </div>
        {(IsAdmin && ZoomStartURL && isZoomOpen) && <Button type='quaternary-flat' onClick={() => {
            window.open(ZoomStartURL, '_blank')
        }} className='text-center !rounded-md w-full mt-4'> <VideocamTwoTone /> Zoom&apos;u Ba??lat </Button>}
        {((ZoomURL || Password) && isZoomOpen) && <div className='w-full bg-inherit hover:bg-[white] hover:font-nexa-bold hover:text-[black] shadow-2xl mt-5 pb-4 bg-quaternary-light'>
            {ZoomURL && <div className='flex flex-col  w-full h-[50px] items-center justify-center'>
                <div className='flex items-center min-h-[50px] justify-center'>
                    <VideoCallRounded />
                    <Link target="_blank" href={ZoomURL} > Zoom`&apos;a gir </Link>
                </div>
                <div className='flex items-center'>
                    <Key />
                    <Text type='paragraph' className='text-inherit text-[16px]'>{Password}</Text>
                </div>
            </div>}
        </div>}
    </div>
}

const BuyKit = ({ id, price, totalLength }: { id: string, price: number, totalLength: number }) => {
    const { user: { IsAuthenticated } } = useUser()
    return <>
        <div className='w-full justify-between h-[50px] mb-2 bg-[#EFEEF5] rounded-[5px_20px_5px_20px] flex items-center px-4 text-[#3A356B]'>
            <div className='flex gap-2'>
                <School />
                <Text>Fiyat</Text>
            </div>
            <Text>{price}???</Text>
        </div>
        <div className='w-full justify-between h-[50px] mb-2 bg-[#EFEEF5] rounded-[5px_20px_5px_20px] flex items-center px-4 text-[#3A356B]'>
            <div className='flex gap-2'>
                <TimelapseSharp />
                <Text>S??re</Text>
            </div>
            <Text>{totalLength}dk</Text>
        </div>
        <Button onClick={() => {
            if (IsAuthenticated) Router.push('/training/buy?id=' + id)
            else Router.push('/auth/login')
        }} type="quaternary-flat" className='flex justify-center text-center mb-2' >
            Sat??n Al
        </Button>
    </>
}

const getYoutubeId = (url: string) => {
    return 'https://www.youtube.com/embed/' + url.split('v=')[1].split('&')[0]
}
interface VideoDataType {
    title: string,
    url: string
}
const TrainingVideoCard = ({ url, title }: VideoDataType) => {
    return <div onClick={
        () => {
            window.open(url, '_blank')
        }
    } className="w-[100px]  h-[100px] bg-black-300">
        <div className='w-full cursor-pointer h-full flex items-center justify-center flex-col text-[white]'>
            <h2> {title} </h2>
            <PlayArrow fontSize="large" />
        </div>
    </div>
}

const TrainingContent = ({ training, hasUser }: { training: TrainingDataType | null, hasUser: boolean }) => {
    const { user: { IsAdmin } } = useUser()
    console.log("User has", hasUser);
    console.log("TRAINING", training);

    if (!training) return <Loading message="Y??kleniyor..." />
    return <div className="h-[1135px] pb-10 flex justify-center items-center w-full bg-[white] ">
        <div className="md:w-[1196px] h-auto w-full flex-col md:flex-row  flex justify-center items-center md:h-full bg-[#F4F4F4] ">
            <div className="w-full md:w-[70%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-light bg-[#F9FBFC] md:max-w-[70%] h-full pt-[42px] px-[10px] md:pl-[32px] md:pr-[40px]">
                <Text type='h6' className='text-secondary-flat'>E??itim Detay??</Text>
                <Text type="paragraph" className='font-nexa-bold text-[#949493] mt-[30px]'>
                    {training.Details}
                </Text>
                <div className='w-[360px] h-[300px] md:w-[744px] md:h-[370px]  mt-[24px]'>
                    {(() => {
                        try {
                            return <iframe className='w-full h-full' src={getYoutubeId(training.GeneralDetail.VideoLink)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        } catch (error) {
                            return <h1> Video ar??zal?? </h1>
                        }
                    })()
                    }
                </div>
                <div className='w-full mt-10'>
                    <Text type='h6' className='text-secondary-flat'>D??k??manlar</Text>
                    {training?.Documentations && training?.Documentations.map((item, index) => {
                        return <TrainingDocumentCard key={v4()} title={`D??k??man ${index + 1}.pdf`} url={item.Link} />
                    })}
                </div>
                <div className='w-full mt-10'>
                    <Text type='h6' className='text-secondary-flat'>Videolar</Text>
                    <div className="flex w-full gap-2">
                    {training?.Videos && training?.Videos.map((item, index) => {
                        return <TrainingVideoCard key={v4()} title={`Video ${index + 1}`} url={item.Link} />
                    })}
                    </div>
                  
                </div>
            </div>
            <div className="md:w-[30%] w-full h-full bg-[#F4F4F4] pt-[42px] pl-[32px] pr-[30px]">
                {(!IsAdmin && !hasUser) && <BuyKit id={(training as TrainingDataType & { Id: string })?.Id} price={training.Price} totalLength={training.EducationSections.reduce((pre, item) => item.Time + pre, 0)} />}

                <Text type='h6' className='text-secondary-flat'>E??itim Konular??</Text>
                <div className="w-full scrollbar-thin scrollbar-thumb-tertiary-light overflow-auto h-[90%]">
                    {
                        training.EducationSections && training.EducationSections.map((item: TrainingBranchType & { ZoomURL?: string, Password?: string, StartURL?: string }, index) => {
                            return <TrainingSection EndDate={training?.GeneralDetail.EndDate} ZoomStartURL={item.StartURL} ZoomURL={(hasUser ? item?.ZoomURL : undefined)} Password={(hasUser ? item.Password : undefined)} key={v4()} Order={item.Order} Content={item.Content} StartDate={item.StartDate} Time={item.Time.toString()} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default function TrainingDetailPage() {
    const { query } = useRouter();
    type OneTraining = TrainingDataType & { Id?: string, Image?: string, }
    const [trainingData, setTrainingData] = useState<OneTraining | null>(null)
    const { getTrainingById, oneTraining } = useTraining();

    console.log("query", query.id);
    const { user: { IsAuthenticated, UsersTrainings, IsAdmin }, getUsersTrainings } = useUser();
    const [hasUser, setHasUser] = useState(false)
    const [ownTraining, setOwnTraining] = useState(null)
    useEffect(() => {
        if (IsAdmin) return;
        if (IsAuthenticated && UsersTrainings.length < 1) {
            getUsersTrainings()
        } else if (IsAuthenticated && UsersTrainings.length > 0) {
            console.log("UsersTrainings", UsersTrainings);
            if (UsersTrainings.filter(item => item).find(item => item.Id == query.id)) {
                setHasUser(true)
                setOwnTraining(UsersTrainings.filter(item => item).find(item => item.Id == query.id) as any)
            } else {
                setHasUser(false)
            }
        }
    }, [IsAuthenticated, UsersTrainings.length, query.id])


    useEffect(() => {
        if (query.id) getTrainingById("" + query.id);
    }, [query.id]);

    useEffect(() => {
        //@ts-ignore
        if (oneTraining) setTrainingData(oneTraining);
    }, [oneTraining]);

    if (!trainingData) return <Loading message='E??itim y??kleniyor...' />
    return (
        <LandingLayout>
            <Container className={"h-[300px] md:h-[300px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom  overflow-hidden rounded-br-[150px] md:bg-cover "}>
                <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                    <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold z-50"> {oneTraining?.Name} </Text>
                </Container>
                <Image src={trainingData?.Image as string || ''} layout="fill" objectFit="cover" />
            </Container>
            <TrainingContent hasUser={hasUser} training={hasUser ? ownTraining : oneTraining} />
        </LandingLayout>
    )
}
