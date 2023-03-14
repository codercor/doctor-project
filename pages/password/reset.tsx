import { getUserIdForResetPassword, resetPasswordRequest } from '@app/User/user.utils'
import Button from '@components/Button'
import Input from '@components/Input/Input'
import AuthLayout from '@components/Layouts/AuthLayout'
import Text from '@components/Text'
import Script from 'next/dist/client/script'
import Head from 'next/dist/shared/lib/head'
import Router from 'next/router'
import React, { useEffect } from 'react'




export default function Reset() {


    return (
        <AuthLayout>
            <ResetContent />
        </AuthLayout>
    )
}


const ResetContent = () => {
    const [password, setPassword] = React.useState('')
    const [hashAndUserIdHash, setHashAndUserIdHash] = React.useState({ hash: '', userId: '' })

    const [valid, setValid] = React.useState(true)

    const validate = () => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&.]).{8,}$/gm.test(password)) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    useEffect(() => {
        password.length > 0 && validate()
    }, [password])

    const submitReset = () => {
        console.log("parameters", hashAndUserIdHash)

        hashAndUserIdHash.userId.length && resetPasswordRequest(hashAndUserIdHash.userId, hashAndUserIdHash.hash, password)
    }
    React.useEffect(() => {
        console.log("Router", Router.query);

        Router.query.uid && Router.query.hash && getUserIdForResetPassword(Router.query.uid as string, Router.query.hash as string)
            .then((res) => {
                console.log("res", res);

                setHashAndUserIdHash({
                    hash: Router.query.hash as string,
                    userId: res.UserId,
                })
            }).catch(() => {
                Router.push("/auth/forgot-password")
            })
    }, [Router.query])
    return <div className="md:h-full h-[500px] w-[340px] md:w-full lg:w-[340px]  flex justify-center items-center rounded-[30px_5px]">
        <Head>
            <title> Yeni Şifre | Nazan Uysal Harzadın </title>
            <Script id="g-tag-1" async src="https://www.googletagmanager.com/gtag/js?id=G-D0HTKY3R5J"></Script>
            <Script id="g-tag-2" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-D0HTKY3R5J');`}
            </Script>
        </Head>
        <div className="w-[380px] md:min-w-full 2xl:w-full h-[402px] flex flex-col items-center lg:mr-[62px]">
            <Text type="h3" className="text-white !text-[34px]">Yenile</Text>
            <Input value={password}
                onChange={(e) => setPassword(e.target.value)}
                text="Yeni Şifre" type="password" />
            {
                !valid && <span className="text-[#FF0000] text-[12px] font-nexa-regular">
                    Şifreniz en az 8 karakterden oluşmalı, en az bir büyük harf, bir küçük harf ve bir sayı içermelidir.
                </span>
            }
            <Button disabled={valid && password.length == 0} onClick={submitReset} type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Şifreyi Yenile</Text>
            </Button>
        </div>
        <div className="bg-[url(/images/png/login.png)] hidden lg:grid place-content-center bg-cover bg-center bg-no-repeat md:min-w-[410px] lg:min-w-[610px] h-[620px]">
            <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
        </div>
    </div>
}