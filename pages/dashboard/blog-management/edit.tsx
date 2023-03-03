import FormInput, { FormInputTextArea } from '@components/Forms/FormInput/FormInput'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import { ArrowBack, ArrowBackIos, Image as ImageIcon } from '@mui/icons-material'
import { Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import * as Yup from 'yup'
import Image from 'next/image'
import request from '@config'
import { toast } from 'react-hot-toast'
import classNames from 'classnames'
import { CircularProgress } from '@mui/material'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Lütfen başlık giriniz'),
    content: Yup.string().required('Lütfen içerik giriniz'),
    image: Yup.mixed().required('Lütfen resim yükleyiniz')
})

const SelectImage = ({
    file,
    setFieldValue,
    name = 'image',
    error
}: {
    file: FileList | null,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    name?: string,
    error?: string
}) => {
    const ref = React.useRef<HTMLInputElement>(null)
    function createObjectURL(object: any) {
        console.log("object", object);
        if (typeof object === 'string') return object;
        return (window.URL) ? window.URL.createObjectURL((object)) : window.webkitURL.createObjectURL(object);
    }
    const imageUrl = React.useMemo(() => {
        if (file) {
            return createObjectURL(file)
        }
        return ''
    }, [file])
    return <div className="flex flex-col items-start justify-start">
        <div onClick={() => ref.current?.click()} className="flex-[2] cursor-pointer relative text-[#A6A5A5] flex justify-center text-center items-center flex-col border-2 border-dotted self-center border-[#CDCDCD] min-w-[270px]   max-h-[330px] min-h-[240px]">
            <input
                ref={ref}
                type="file"
                accept="image/*"
                onChange={(e) => {
                    console.log("file", e.currentTarget.files, e.currentTarget.value);
                    if (e.currentTarget.files?.length) setFieldValue(name, e.currentTarget?.files[0])
                }}
                hidden
                name={name}
            />
            {!file ? <div >
                <div className="div">
                    <ImageIcon className='' />
                    <p className="font-nexa-bold">
                        Resim Yükle
                    </p>
                    <p className="font-nexa-light">
                        Lütfen 520 x 460 boyutlarını dikkate alarak görsel ekleyiniz.
                    </p>

                </div>
            </div> : <div className='h-[270px] sm:h-[460px] sm:w-[520px] w-[330px] border-2 border-red-500 relative'>
                <Image onClick={(e) => {
                    e.stopPropagation()
                    ref.current?.click()
                }} src={imageUrl} layout="fill" objectFit='cover' />
            </div>
            }
        </div>
        {error && <p className="font-nexa-light w-[400px] text-[red]">
            * {error}
        </p>}
    </div>
}

const BlogEdit = () => {
    const initialValues = {
        title: '',
        content: '',
        image: null,
    }
    const [data, setData] = useState(initialValues)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { id } = router.query
    React.useEffect(() => {
        ///forum/673e941a-9e9f-4865-9218-6f541c467693?_METHOD=PUT
        if (id) {
            setLoading(true)
            request.get(`/forum/${id}`).then((res) => {
                setData({
                    title: res.data.Title,
                    content: res.data.Text,
                    image: res.data.Image
                })
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                toast.error('Bir hata oluştu')
                router.back()
            })
        }
    }, [id])
    return (
        <DashboardLayout>
            <div className="w-full h-fit min-h-[105px] relative px-[30px] flex gap-[22px] items-center bg-[#E7F0F1]">

                <button onClick={() => {
                    router.back()
                }} className="min-w-[48px] flex justify-center text-center items-center min-h-[48px] rounded-[20px_5px] bg-[#4E929D]">
                    <ArrowBackIos className='text-[white] text-center translate-x-1' />
                </button>
                <div className="flex h-full justify-center flex-col">
                    <h1 className="font-nexa-bold text-[#4E929D]">
                        Düzenle
                    </h1>
                    <p className='font-nexa-light text-[12px] md:text-[16px] text-[#828282]'>
                        Blog yazınızı düzenleyebilirsiniz.
                    </p>
                </div>
            </div>
            <div className={classNames({
                "animate-pulse": loading,
            })}>
                <Formik enableReinitialize={true} onSubmit={(values) => {


                }} initialValues={data} validationSchema={validationSchema}>
                    {({ handleChange, handleSubmit, values, setFieldValue, errors, submitForm, resetForm }) => {
                        return (<>
                            <form onSubmit={handleSubmit} className="w-full px-4 lg:flex-row flex-col-reverse flex gap-[50px]">
                                {loading && <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 border-2">
                                    <CircularProgress className='text-[60px]' size={70} />
                                </div>}
                                <div className="flex-[3] flex flex-col gap-[24px]">
                                    <FormInput disabled={loading} onChange={handleChange} error={errors.title} name="title" value={values.title} label='Başlık' placeholder='' />
                                    <FormInputTextArea disabled={loading} onChange={handleChange} error={errors.content} name="content" value={values.content} inputClassName='h-[300px]' label='İçerik' placeholder='' />
                                    <button type='button' disabled={(loading || Object.keys(errors).length > 0 || !!Object.values(values).includes(""))} onClick={(e) => {
                                        e.preventDefault()
                                        let form = new FormData()
                                        if (!values.image) return;
                                        form.append('Title', values.title)
                                        form.append('Text', values.content)
                                        if (typeof values.image != "string") form.append('File', values.image)
                                        setLoading(true)
                                        request.post(`/forum/${id}?_METHOD=PUT`, form, {
                                            headers: {
                                                'Content-Type': 'multipart/form-data'
                                            },
                                            data: form
                                        }).then((res) => {
                                            toast.success('İçerik başarıyla oluşturuldu')
                                            console.log("res", res);
                                            setLoading(false)
                                            resetForm()
                                            setTimeout(() => {
                                                router.back()
                                            }, 600)
                                        }).catch((err) => {
                                            toast.error('İçerik oluşturulurken bir hata oluştu')
                                            console.log("err", err);
                                            setLoading(false)
                                        })
                                    }} className="bg-[#4E929D] disabled:opacity-60 self-center md:self-start rounded-[20px_5px] w-[252px] h-[50px] text-[white]">
                                        İçerik Yayınla
                                    </button>
                                </div>
                                <SelectImage error={errors.image} name="image" file={values.image} setFieldValue={setFieldValue} />
                            </form>
                        </>)
                    }}
                </Formik>
            </div>
        </DashboardLayout>
    )
}

export default BlogEdit