import Container from '@components/Container'
import LandingLayout from '@components/Layouts/LandingLayout'
import { CheckCircleOutlined, ErrorOutlineRounded } from '@mui/icons-material'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/dist/shared/lib/head'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Success = () => {
    return <div className="w-full h-full bg-primary-light">
        <div className="w-[300px] h-full text-center grid place-content-center mx-auto">
            <CheckCircleOutlined className='min-w-[100px] animate-pulse mb-4 mx-auto min-h-[100px] text-[green]' />
            <p className='font-nexa-bold'> Ödemeniz başarıyla gerçekleştirilmiştir. Kullanıcı paneline yönlendiriliyorsunuz... </p>
        </div>
    </div>
}

const Failed = ({ errorCode }: { errorCode: string }) => {
    const errorMessage = getErrorMessage(errorCode);
    return <div className="w-full h-full bg-primary-light">
        <div className="w-[300px] h-full text-center grid place-content-center mx-auto">
            <ErrorOutlineRounded className='min-w-[100px] animate-pulse mb-4 mx-auto min-h-[100px] text-[#b63b3b]' />
            {errorCode === null} ?? (<p className='font-nexa-bold'>{errorMessage}</p><br />)
            <p className='font-nexa-bold'> Satın alım işleminiz gerçekleştirilememiştir. Kullanıcı paneline yönlendiriliyorsunuz... </p>
        </div>
    </div>
}

type ErrorMessagesType = {
    [errorCode: string]: string;
  };

  
const errorMessages:ErrorMessagesType = {
    "10051": "Kart limiti yetersiz, yetersiz bakiye",
    "10005": "İşlem onaylanmadı",
    "10012": "Geçersiz işlem",
    "10041": "Kayıp kart, karta el koyunuz",
    "10043": "Çalıntı kart, karta el koyunuz",
    "10054": "Vadesi dolmuş kart",
    "10084": "CVC2 bilgisi hatalı",
    "10057": "Kart sahibi bu işlemi yapamaz",
    "10058": "Terminalin bu işlemi yapmaya yetkisi yok",
    "10034": "Dolandırıcılık şüphesi",
    "10093": "Kartınız e-ticaret işlemlerine kapalıdır. Bankanızı arayınız.",
    "10201": "Kart, işleme izin vermedi",
    "10204": "Ödeme işlemi esnasında genel bir hata oluştu",
    "10206": "CVC uzunluğu geçersiz",
    "10207": "Bankanızdan onay alınız",
    "10208": "Üye işyeri kategori kodu hatalı",
    "10209": "Bloke statülü kart",
    "10210": "Hatalı CAVV bilgisi",
    "10211": "Hatalı ECI bilgisi",
    "10213": "BIN bulunamadı",
    "10214": "İletişim veya sistem hatası",
    "10215": "Geçersiz kart numarası",
    "10216": "Bankası bulunamadı",
    "10217": "Banka kartları sadece 3D Secure işleminde kullanılabilir",
    "10219": "Bankaya gönderilen istek zaman aşımına uğradı",
    "10222": "Terminal taksitli işleme kapalı",
    "10223": "Gün sonu yapılmalı",
    "10225": "Kısıtlı kart",
    "10226": "İzin verilen PIN giriş sayısı aşılmış",
    "10227": "Geçersiz PIN",
    "10228": "Banka veya terminal işlem yapamıyor",
    "10229": "Son kullanma tarihi geçersiz",
  };

  const getErrorMessage = (errorCode: string) => {
    return errorMessages[errorCode] || "Bilinmeyen hata"; // Eğer errorCode listede yoksa "Bilinmeyen hata" döndürür
  };

export default function PaymentFailed() {
    const {
        query: { Status,ErrorCode },
        push
    } = useRouter()
    const [content, setContent] = React.useState(<></>)
    useEffect(() => {
        if (Status === "1") {
            setContent(<Success />);
          } else {
            setContent(<Failed errorCode={ErrorCode as string} />);
          }

        setTimeout(() => {
            push('/dashboard')
            toast.success("Mail adresinizde ki açıklamaları kontrol ediniz.",{
                duration: 5000,
            });
        }, 4000)

    }, [Status,ErrorCode])



    return (
        <LandingLayout>
            <Head>
                <title> Ödeme İşlemi | Nazan Uysal Harzadın </title>
            </Head>
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
