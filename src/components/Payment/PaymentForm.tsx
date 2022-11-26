import React from 'react'
import style from './PaymentForm.module.css'
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payment, setPaymentCredentials, selectPayment } from '@app/Payment/payment.slice'
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { Loading } from 'pages/dashboard/create-training';
const Form = ({ htmlContent }: { htmlContent: string }) => {
    //get form from htmlContent
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref) {
            console.log(ref, ref.current?.children)
            //@ts-ignore
            ref.current?.children[1]?.submit();
        };

    }, [ref])

    return (<>
        <div className='h-screen w-screen top-0 left-0 fixed z-50 bg-secondary' >
            <Loading message='Lütfen sayfadan ayrılmayın...' />
        </div>
        <div ref={ref} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
    )
}
export default function PaymentForm({ EducationId, UserId }: { EducationId: string, UserId: string }) {
    console.log("style", style);

    const [cardData, setCardData] = React.useState({
        CardHolderName: "John Doe",
        CardNumber: "5528790000000008",
        ExpireMonth: "12",
        ExpireYear: "2030",
        Cvc: "123",
    });

    const { htmlContent } = useSelector(selectPayment)
    useEffect(() => {
        htmlContent && console.log("htmlContent", (htmlContent));
    }, [htmlContent])
    const dispatch = useDispatch<Dispatch>();


    useEffect(() => {
        console.log("cardData", cardData);
    }, [cardData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setCardData({ ...cardData, [name]: value });
    };


    return (
        htmlContent ? <Form htmlContent={htmlContent} /> :
            <><div className="min-w-screen w-full h-full bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                    <div className="w-full pt-1 pb-5">
                        <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i className="mdi mdi-credit-card-outline text-3xl text-[white]"></i>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase">Eğitim satın alım</h1>
                    </div>
                    <div className="mb-3 flex -mx-2">
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1"> Kart Üzerindeki İsim </label>
                        <div>
                            <input
                                name="CardHolderName"
                                onChange={handleChange} value={cardData.CardHolderName} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="AD SOYAD" type="text" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Kart Numarası</label>
                        <div>
                            <input

                                name="CardNumber"
                                onChange={handleChange} value={cardData.CardNumber} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                    </div>
                    <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/2">
                            <label className="font-bold text-sm mb-2 ml-1">Son Kul. Tarihi</label>
                            <div>
                                <select
                                    name="ExpireMonth"
                                    onChange={handleChange} value={cardData.ExpireMonth} className={classNames("w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer", style['payment-form-select'])}>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03 </option>
                                    <option value="04">04</option>
                                    <option value="05">05 </option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <select
                                name="ExpireYear"
                                onChange={handleChange} value={cardData.ExpireYear} className={classNames("w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer", style['payment-form-select'])}>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                                <option value="2036">2036</option>
                                <option value="2037">2037</option>
                                <option value="2038">2038</option>
                                <option value="2039">2039</option>
                                <option value="2040">2040</option>

                            </select>
                        </div>
                    </div>
                    <div className="mb-10">
                        <label className="font-bold text-sm mb-2 ml-1">CVV</label>
                        <div>
                            <input
                                name="Cvc"
                                onChange={handleChange} value={cardData.Cvc} className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            let paymentData = {
                                ...cardData,
                                EducationId,
                                UserId,

                            }
                            console.log("paymentData", paymentData);
                            dispatch(setPaymentCredentials(paymentData))
                            //@ts-ignore
                            dispatch(payment())

                        }} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-[white] rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i>Ödeme Yap</button>
                    </div>
                </div>
            </div>
            </>
    )
}
