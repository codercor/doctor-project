import Container from '@components/Container'
import LandingLayout from '@components/Layouts/LandingLayout'
import Text from '@components/Text'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DateRange, Download, HourglassBottom, PunchClock, School, Timelapse, TimelapseSharp, Timeline } from '@mui/icons-material'
import Button from '@components/Button'
import { useRouter } from 'next/router'
import { TrainingDataType } from '@app/Training/training.types'
import useTraining from 'src/hooks/training.hook'
import { Loading } from 'pages/dashboard/create-training'
import { v4 } from 'uuid'

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

const TrainingSection = ({ Order, Content, StartDate, Time }: { Order: number, Content: string, StartDate: string, Time: string }) => {
    return <div className='transition-all duration-700 hover:whitespace-normal truncate w-full max-h-[100px]  h-fit mt-4  flex flex-col items-start justify-between p-[10px] text-ellipsis text-[#6E7846] hover:text-[white] hover:bg-secondary  bg-[#FFFFFF]'>
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
    </div>
}

const BuyKit = ({ price, totalLength }: { price: number, totalLength: number }) => {
    return <>
        <div className='w-full justify-between h-[50px] mb-2 bg-[#EFEEF5] rounded-[5px_20px_5px_20px] flex items-center px-4 text-[#3A356B]'>
            <div className='flex gap-2'>
                <School />
                <Text>Fiyat</Text>
            </div>
            <Text>{price}₺</Text>
        </div>
        <div className='w-full justify-between h-[50px] mb-2 bg-[#EFEEF5] rounded-[5px_20px_5px_20px] flex items-center px-4 text-[#3A356B]'>
            <div className='flex gap-2'>
                <TimelapseSharp />
                <Text>Süre</Text>
            </div>
            <Text>{totalLength}dk</Text>
        </div>
        <Button type="quaternary-flat" className='flex justify-center text-center mb-2' >
            Satın Al
        </Button>
    </>
}

const getYoutubeId = (url: string) => {
    return 'https://www.youtube.com/embed/' + url.split('v=')[1].split('&')[0]
}

const TrainingContent = ({ training }: { training: TrainingDataType | null }) => {
    if (!training) return <Loading message="Yükleniyor..." />
    return <div className="h-[1135px] pb-10 flex justify-center items-center w-full bg-[white] ">
        <div className="w-[1196px]  flex justify-center items-center h-full bg-[#F4F4F4] ">
            <div className="w-[70%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-light bg-[#F9FBFC] max-w-[70%] h-full pt-[42px] pl-[32px] pr-[40px]">
                <Text type='h6' className='text-secondary-flat'>Eğitim Detayı</Text>
                <Text type="paragraph" className='font-nexa-bold text-[#949493] mt-[30px]'>
                    {training.Details}
                </Text>
                <div className='w-[744px] h-[370px]  mt-[24px]'>
                    {(() => {
                        try {
                            return <iframe className='w-full h-full' src={getYoutubeId(training.GeneralDetail.VideoLink)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        } catch (error) {
                            return <h1> Video arızalı </h1>
                        }
                    })()
                    }
                </div>
                <div className='w-full mt-10'>
                    <Text type='h6' className='text-secondary-flat'>Dökümanlar</Text>
                    {training?.Documentations && training?.Documentations.map((item, index) => {
                        return <TrainingDocumentCard key={v4()} title={`Döküman ${index + 1}.pdf`} url={item.Link} />
                    })}
                </div>
            </div>
            <div className="w-[30%] h-full bg-[#F4F4F4] pt-[42px] pl-[32px] pr-[30px]">
                <BuyKit price={training.Price} totalLength={training.EducationSections.reduce((pre, item) => item.Time + pre, 0)} />
                <Text type='h6' className='text-secondary-flat'>Eğitim Konuları</Text>
                <div className="w-full scrollbar-thin scrollbar-thumb-tertiary-light overflow-auto h-[90%]">
                    {
                        training.EducationSections && training.EducationSections.map((item, index) => {
                            return <TrainingSection key={v4()} Order={item.Order} Content={item.Content} StartDate={item.StartDate} Time={item.Time.toString()} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default function TrainingDetailPage() {
    const { query } = useRouter();
    type OneTraining = TrainingDataType & { Id?: string, Image?: string }
    const [trainingData, setTrainingData] = useState<OneTraining | null>(null)
    const { getTrainingById, oneTraining } = useTraining();
    const bgClass = "bg-[url('" + ((oneTraining as OneTraining)?.Image as string) + "')]"
    console.log("bgClass", bgClass);

    console.log("query", query.id);

    useEffect(() => {
        if (query.id) getTrainingById("" + query.id);
    }, [query.id]);

    useEffect(() => {
        if (oneTraining) setTrainingData(oneTraining);
    }, [oneTraining]);





    if (!trainingData) return <Loading message='Eğitim yükleniyor...' />
    return (
        <LandingLayout>
            <Container className={"h-[300px] md:h-[300px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom  overflow-hidden rounded-br-[150px] md:bg-cover " + bgClass}>
                <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                    <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold z-50"> {oneTraining?.Name} </Text>
                </Container>
                <Image src={trainingData?.Image as string} layout="fill" objectFit="cover" />
            </Container>
            <TrainingContent training={oneTraining} />
        </LandingLayout>
    )
}
