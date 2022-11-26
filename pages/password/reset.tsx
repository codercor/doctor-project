import { getUserIdForResetPassword, resetPasswordRequest } from '@app/User/user.utils'
import Button from '@components/Button'
import Input from '@components/Input/Input'
import AuthLayout from '@components/Layouts/AuthLayout'
import Text from '@components/Text'
import Router from 'next/router'
import React from 'react'




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
            })
    }, [Router.query])
    return <div className="md:w-[1440px] md:h-full h-[500px] w-[340px] flex justify-center items-center rounded-[30px_5px]">
        <div className=" w-[380px] h-[402px] flex flex-col items-center md:mr-[102px]">
            <Text type="h3" className="text-white !text-[34px]">Yenile</Text>
            <Input value={password}
                onChange={(e) => setPassword(e.target.value)}
                text="Yeni Şifre" type="password" />
            <div className="mt-[20px] flex justify-between w-full">
                <div className="flex items-center leading-none gap-2">
                    <input className="h-[24px] appearance-none w-[24px] bg-primary-flat checked:accent-white-100  checked:after:rounded-[5px_0px_5px_0] relative checked:after:w-[24px] checked:after:h-[24px] checked:after:absolute checked:after:grid checked:after:place-content-center checked:after:top-0 checked:left-0 checked:after:bg-primary-flat checked:after:content-['✓']" type="checkbox" />
                    <Text type="h4" className="!text-[14px] !py-[10px]">Beni Hatırla</Text>
                </div>
                <Text type="h4" className="!text-[14px] font-nexa-light  !py-[10px]">Şifremi Unuttum</Text>
            </div>
            <Button disabled={password.length < 8} onClick={submitReset} type="secondary" className="w-full mt-[20px] h-[48px] leading-none flex items-center justify-center">
                <Text type="paragraph" className="!text-[14px] !py-[10px] font-nexa-regular">Giriş Yap</Text>
            </Button>
        </div>
        <div className="bg-[url(/images/png/login.png)] hidden md:grid place-content-center bg-cover bg-no-repeat w-[610px] h-[620px]">
            <Text type="paragraph" className="text-[25px] text-center text-[white] h-[186px] w-[448px]">İyi sağlığın temelleri sağlıklı beslenme, kaliteli uyku, düşük stres, rahatlama ve uygun bir hareket programında yatmaktadır. Eğitimler ile daha iyi bir sağlık yolculuğunuza başlayın.</Text>
        </div>
    </div>
}