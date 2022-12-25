import React from 'react'
import FormDivider from '../FormDivider/FormDivider'
import FormInput, { FormInputSelect } from '../FormInput/FormInput'
import { Formik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({ //min >= 2 words required
    fullName: Yup.string().required("Zorunlu alan").matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Adınız ve Soyadınızı giriniz"),
    age: Yup.number().required("Zorunlu alan").min(10, "Yaşınız 10'dan küçük olamaz"),
    gender: Yup.string().required("Zorunlu alan").oneOf(['kadın', 'erkek', 'diger'], "Cinsiyet seçiniz")
});

export default function FirstForm() {
    return (<Formik
        initialValues={{ fullName: '', age: "0", gender: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
                <div className='w-full'>
                    <div className='flex h-[200px] gap-[30px] w-[full]'>
                        <FormInput error={errors.fullName} name="fullName" value={values.fullName} onChange={handleChange} label='Adınız ve Soyadınız' type="text" />
                        <FormInput error={errors.age} name="age" value={values.age} onChange={handleChange} label='Yaşınız' type="number" />
                        <FormInputSelect error={errors.gender} name="gender" value={values.gender} onChange={handleChange} label='Cinsiyetiniz' options={[
                            { value: 'kadın', label: 'Kadın' },
                            { value: 'erkek', label: 'Erkek' },
                            { value: 'diger', label: 'Diğer' },
                            ]} />
                    </div>
                    <FormDivider />
                </div>
            </form>
        )}
    </Formik>)
}


