import React from 'react'
import style from './PaymentForm.module.css'
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payment, setPaymentCredentials, selectPayment } from '@app/Payment/payment.slice'
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { Loading } from 'pages/dashboard/create-training';
import { Formik } from 'formik';
import * as Yup from 'yup';
import validator from 'card-validator'
import { Height } from '@mui/icons-material';

const Form = ({ htmlContent }: { htmlContent: string }) => {
    //get form from htmlContent
    const ref = React.useRef<HTMLDivElement>(null);

 let myDoc = new DOMParser();
 let docx = myDoc.parseFromString(htmlContent, "text/html");

//webform0 id 
    useEffect(() => {
        //window.document.head.innerHTML=docx.head.innerHTML;
        //window.document.body.innerHTML=docx.body.innerHTML;
        if (ref) {
            //@ts-ignore
            ref.current?.querySelector("#webform0")?.submit();
            //@ts-ignore
            //docx.querySelector("#webform0").submit();
            //@ts-ignore
            //ref.current?.children[1]?.submit();
        };

    }, [ref])

    return (<>
        <div className='hidden h-screen w-screen top-0 left-0 fixed z-50 bg-secondary' >
            <Loading message='Lütfen sayfadan ayrılmayın...' />
        </div>
        <div ref={ref} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <iframe style={{minHeight:"620px", minWidth:"700px"}} className='min-w-screen w-full h-full' srcDoc={htmlContent}></iframe>
    </>
    )
}

const validationSchema = Yup.object().shape({
    CardNumber: Yup.string().test('is-valid', 'Geçersiz kart numarası', (value) => {
        const card = validator.number(value as string);
        return card.isValid;
    }),
    ExpireMonth: Yup.string().test('is-valid', 'Geçersiz ay', (value) => {
        const month = validator.expirationMonth(value as string);
        return month.isValid;
    }),
    ExpireYear: Yup.string().test('is-valid', 'Geçersiz yıl', (value) => {
        const year = validator.expirationYear(value as string);
        return year.isValid;
    }),
    Cvc: Yup.string().test('is-valid', 'Geçersiz cvc', (value) => {
        const cvc = validator.cvv(value as string);
        return cvc.isValid;
    }),
    CardHolderName: Yup.string().required('Kart sahibi adı zorunludur'),
})

export default function PaymentForm({ EducationId, UserId }: { EducationId: string, UserId: string }) {
    const [cardData, setCardData] = React.useState({
        // CardHolderName: "John Doe",
        // CardNumber: "5528790000000008",
        // ExpireMonth: "12",
        // ExpireYear: "2030",
        // Cvc: "123",
        CardHolderName: "",
        CardNumber: "",
        ExpireMonth: "",
        ExpireYear: "",
        Cvc: "",
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
                                <img src="/images/png/card-types.png" className="h-8 ml-3" />
                                <img src="/images/svg/iyzico_black.svg" className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>
                    <Formik validationSchema={validationSchema} initialValues={{
                        ...cardData,
                    }} onSubmit={() => { }}>
                        {({ validateForm, values, errors, handleChange: _handleChange, isValid }) => {
                            return <form>
                                <div className="mb-0">
                                    <label className="font-bold text-sm mb-2 ml-1"> Kart Üzerindeki İsim </label>
                                    <div>
                                        <input
                                            name="CardHolderName"
                                            onChange={_handleChange} value={values.CardHolderName} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="AD SOYAD" type="text" />
                                    </div>
                                </div>
                                <p className="text-red-500 leading-none !text-[14px]"> {errors.CardHolderName} </p>
                                <div className="mb-0">
                                    <label className="font-bold text-sm mb-2 ml-1">Kart Numarası</label>
                                    <div>
                                        <input
                                            name="CardNumber"
                                            onChange={_handleChange} value={values.CardNumber} className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                    </div>
                                </div>
                                <p className="text-red-500 leading-none !text-[14px]"> {errors.CardNumber} </p>
                                <div className="mb-2 -mx-2 flex items-end">
                                    <div className="px-2 w-1/2">
                                        <label className="font-bold text-sm mb-2 ml-1">Son Kullanma Tarihi</label>
                                        <div>
                                            <select
                                                name="ExpireMonth"
                                                onChange={_handleChange} value={values.ExpireMonth} className={classNames("w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer", style['payment-form-select'])}>
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
                                            onChange={_handleChange} value={values.ExpireYear} className={classNames("w-full px-3 pt-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer", style['payment-form-select'])}>
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
                                <p className="text-red-500 leading-none !text-[14px]"> {errors.ExpireMonth} </p>
                                <p className="text-red-500 leading-none !text-[14px]"> {errors.ExpireYear} </p>
                                <div className="mb-0">
                                    <label className="font-bold text-sm mb-2 ml-1">CVV</label>
                                    <div>
                                        <input
                                            name="Cvc"
                                            onChange={_handleChange} value={values.Cvc} className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                    </div>
                                </div>
                                <p className="text-red-500 leading-none mb-4 align-middle !text-[14px]"> {errors.Cvc} </p>
                                <div>
                                    <button
                                        disabled={!isValid}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (!isValid) return;
                                            let paymentData = {
                                                ...values,
                                                EducationId,
                                                UserId,
                                            }
                                            console.log("paymentData", paymentData);
                                            dispatch(setPaymentCredentials(paymentData))
                                            //@ts-ignore
                                            dispatch(payment())
                                        }} className="block w-full disabled:opacity-70 max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-[white] rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i>Ödeme Yap</button>
                                </div>
                            </form>
                        }}
                    </Formik>
                </div>
            </div>
            </>
    )
}
