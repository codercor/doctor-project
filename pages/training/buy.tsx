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
import useUser from 'src/hooks/user.hook'
import PaymentForm from '@components/Payment/PaymentForm'
import { useDispatch, useSelector } from 'react-redux'
import { freePayment, selectPayment } from '@app/Payment/payment.slice'
import { Dispatch } from '@reduxjs/toolkit'

export default function TrainingDetailPage() {
    const { query, push } = useRouter();
    const dispatch = useDispatch<Dispatch<any>>();

    const { paymentProcess } = useSelector(selectPayment)

    type OneTraining = TrainingDataType & { Id?: string, Image?: string }
    const [trainingData, setTrainingData] = useState<OneTraining | null>(null)
    const { getTrainingById, oneTraining } = useTraining();
    const { user } = useUser();
    const bgClass = "bg-[url('" + ((oneTraining as OneTraining)?.Image as string) + "')]"
    console.log("bgClass", bgClass);

    console.log("query", query.id);
    const [clickedToBuy, setClickedToBuy] = useState(false)
    useEffect(() => {
        if (query.id) getTrainingById("" + query.id);
    }, [query.id]);

    useEffect(() => {
        //@ts-ignore
        if (oneTraining) setTrainingData(oneTraining);

    }, [oneTraining]);

    useEffect(() => {
        if (clickedToBuy && !paymentProcess.loading && !paymentProcess.error) {
            push('/dashboard')
        }

    }, [
        paymentProcess.loading,
        paymentProcess.error,
    ])


    const handleFreePayment = () => {
        if (trainingData && user) dispatch(freePayment({
            EducationId: trainingData.Id as string,
            UserId: user.Id as string,
        }))
        setClickedToBuy(true)
    }



    if (!trainingData) return <Loading message='E??itim y??kleniyor...' />
    if (trainingData.Price == 0) return (<LandingLayout>
        <Container className={"h-[300px] md:h-[250px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom  overflow-hidden rounded-br-[150px] md:bg-cover " + bgClass}>
            <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold z-50"> {oneTraining?.Name} Sat??n Al??m</Text>
            </Container>
            <Image src={trainingData?.Image as string} layout="fill" objectFit="cover" />
        </Container>
        <div className='md:px-[400px] h-[300px] flex flex-col gap-4 justify-center items-center'>
            <h3> ??cretsiz e??itimi e??itimlerinize eklemek istiyor musunuz ? </h3>
            <Button onClick={handleFreePayment} className='bg-[#F2F2F2] text-[#2D2D2D] font-nexa-bold text-[16px] px-[30px] py-[10px] rounded-[10px] ml-[20px]'>Evet</Button>
        </div>
    </LandingLayout>)
    return (
        <LandingLayout>
            <Container className={"h-[300px] md:h-[250px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-right-bottom  overflow-hidden rounded-br-[150px] md:bg-cover " + bgClass}>
                <Container className="md:!max-w-[1455px] grid  place-items-end  justify-center pb-20 md:pb-22 h-full">
                    <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold z-50"> {oneTraining?.Name} Sat??n Al??m</Text>
                </Container>
                <Image src={trainingData?.Image as string} layout="fill" objectFit="cover" />
            </Container>
            <div className='md:px-[400px] h-fit flex justify-center items-center'>
                <PaymentForm EducationId={trainingData.Id as string} UserId={user.Id as string} />
            </div>
        </LandingLayout>
    )
}
