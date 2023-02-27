import Container from '@components/Container'
import LandingLayout from '@components/Layouts/LandingLayout'
import { CheckCircleOutlined, ErrorOutlineRounded } from '@mui/icons-material'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

const Success = () => {
    return <div className="w-full h-full bg-primary-light">
        <div className="w-[300px] h-full text-center grid place-content-center mx-auto">
            <CheckCircleOutlined className='min-w-[100px] animate-pulse mb-4 mx-auto min-h-[100px] text-[green]' />
            <p className='font-nexa-bold'> Ödemeniz başarıyla gerçekleştirilmiştir. Kullanıcı paneline yönlendiriliyorsunuz... </p>
        </div>
    </div>
}

const Failed = () => {
    return <div className="w-full h-full bg-primary-light">
        <div className="w-[300px] h-full text-center grid place-content-center mx-auto">
            <ErrorOutlineRounded className='min-w-[100px] animate-pulse mb-4 mx-auto min-h-[100px] text-[#b63b3b]' />
            <p className='font-nexa-bold'> Satın alım işleminiz gerçekleştirilememiştir. Kullanıcı paneline yönlendiriliyorsunuz... </p>
        </div>
    </div>
}

export default function PaymentFailed() {
    const {
        query: { Status },
    } = useRouter()
    const [content, setContent] = React.useState(<></>)
    useEffect(() => {
        if (Status === "1") {
            setContent(Success)
        } else {
            setContent(Failed)
        }
    }, [Status])

    return (
        <LandingLayout>
            <Container className=" h-[200px] md:h-[200px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-center  md:bg-cover overflow-clip bg-[url(/images/png/best.png)]">
                <Container className="grid  mx-auto place-items-end !min-w-full backdrop-brightness-50   justify-center  pb-20 md:pb-22 h-full">
                </Container>
            </Container>
            <Container className=" h-[200px] md:h-[500px] mx-auto  !w-full  md:!max-w-full  overflow-clip">
                {content}
            </Container>
        </LandingLayout>
    )
}
