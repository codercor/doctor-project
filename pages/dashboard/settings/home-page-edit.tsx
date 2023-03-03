import React, { RefObject, useEffect, useState } from 'react'
import useUser from 'src/hooks/user.hook'
import Router from 'next/router'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import SettingsSubLayout from '@components/Layouts/SettingsSubLayout'
import Text from '@components/Text'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { Edit, Remove } from '@mui/icons-material'
import { createPress, deletePress, getBanner, getPresses } from '@app/User/user.utils'
import { BannerData } from '@app/User/user.types'
import Input from '@components/Input/Input'
import Button from '@components/Button'
import toast from 'react-hot-toast'
import { v4 } from 'uuid'

const EditBannerImage = ({ image, setImageFile }: {
    image: string,
    setImageFile: (file: File) => void
}) => {
    const ref = React.useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = React.useState(image || '/default.png');

    useEffect(() => {
        //@ts-ignore
        if (ref.current?.files?.length < 1) {
            setPreviewImage(image || '/default.png');
        }

    }, [image])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        const file = e?.target?.files[0] || null;
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setPreviewImage(reader.result as string);
                }
            }
            reader.readAsDataURL(file);
            console.log("file", file);

            setImageFile(file);
        }
    }

    return <div className='w-full h-[324px] md:!h-[424px] border-2 border-black-100 relative shadow-2xl'>
        <input onChange={handleFileChange} ref={ref} type='file' hidden accept='image/*' />
        {<Image src={previewImage} layout='fill' />}
        <button onClick={() => ref?.current && ref?.current.click()} className=' shadow-md shadow-secondary-flat absolute top-2 right-4 z-10 bg-secondary text-[white] w-[40px] h-[40px] grid place-content-center rounded-[4px]'>
            <Edit />
        </button>
    </div>
}

const EditBanner = () => {
    const { adminUpdateBanner, user: { UpdateHomePageProcess } } = useUser();

    const [formValidation, setFormValidation] = React.useState({
        title: false,
        description: false,
        imageSelected: false
    });


    const [bannerData, setBannerData] = React.useState<any>({
        Id: "",
        Title: '',
        Description: '',
        Image: ''
    });
    useEffect(() => {
        getBanner().then((data) => {
            setBannerData(data);
        }).catch((err) => {
            console.log("banner get err", err)
        })
    }, [])

    const [editedBannerData, setEditedBannerData] = React.useState<any>({
        Image: null
    });

    useEffect(() => {
        console.log("banner data", bannerData);
        setFormValidation({
            title: bannerData.Title.length > 20,
            description: bannerData.Description.length > 50,
            imageSelected: editedBannerData.Image
        })

    }, [bannerData, editedBannerData.Image])

    const [status, setStatus] = useState({
        message: '',
        seen: false,
    });

    const [_toast, setToast] = useState("");

    useEffect(() => {

        if (UpdateHomePageProcess.IsLoading) {
            setToast(toast.loading('Güncelleniyor...'))
        } else {
            toast.success('Güncellendi', {
                id: _toast
            })
        }
    }, [UpdateHomePageProcess.IsLoading])



    return <div className='flex flex-col w-full h-fit p-[32px]'>
        <div className="flex justify-between items-center"> <Text type="h5" className='text-deepgreen-200'>Anasayfa Düzeni</Text></div>
        <div className="flex justify-between items-center  mt-2 mb-2"> <Text type="h6" className='text-deepgreen-200'>Banner Resmi (düzenlemek için yeniden seçilmesi zorunlu) </Text></div>
        <Divider />
        <EditBannerImage setImageFile={(f) => { setEditedBannerData({ Image: f }) }} image={bannerData.Image} />
        <Input value={bannerData.Title} onChange={(e) => {
            setBannerData({ ...bannerData, Title: e.target.value })
        }} text="Banner Başlık (en az 20 karakter) " type="text" />
        <Input value={bannerData.Description} onChange={(e) => {
            setBannerData({ ...bannerData, Description: e.target.value })
        }} text="Banner Kısa Metin (en az 50 karakter)" type="text" />
        <div className="w-full  flex justify-end mt-4 h-fit">
            <Button disabled={((!formValidation.title || !formValidation.description || !formValidation.imageSelected) || UpdateHomePageProcess.IsLoading)} type="secondary" className='!p-0 !px-[20px] w-fit justify-end !py-[10px] grid place-content-center ' onClick={() => {
                (editedBannerData.Image && bannerData.Title && bannerData.Description) && adminUpdateBanner({
                    Id: bannerData.Id,
                    Title: bannerData.Title,
                    Description: bannerData.Description,
                    Image: editedBannerData.Image
                });
            }}>Kaydet</Button>
        </div>
    </div>
}



const Press = (props: { Id: string, Title: string, Description: string, Image: string, refreshPresses: () => void }) => {
    return <>
        <div className="flex sm:flex-row flex-col w-full max-w-full shadow-lg !bg-[inherit] py-[8px] min-h-[165px] gap-[10px] items-center justify-between px-[10px]">
            <div className='min-w-[110px] w-[110px] h-min min-h-[110px] relative rounded-md overflow-hidden'>
                <Image src={props.Image} layout='fill' objectFit='cover' />
            </div>
            <div className="w-full overflow-x-auto min-h-[110px]">
                <Text type="h6" className='text-secondary break-words w-full'>{props.Title}</Text>
                <Text type="paragraph" className='text-deepgreen-200 break-words text-[12px]'>{props.Description}</Text>
            </div>
            <div className='w-[60px] min-h-[110px] flex items-start'>
                <Button onClick={() => {
                    deletePress(props.Id).then(() => {
                        props.refreshPresses()
                    })
                }} type="secondary" className='!p-0 bg-red-400 !px-[10px] !rounded-sm w-fit justify-end !py-[10px] grid place-content-center ' >
                    <Remove />
                </Button>
            </div>
        </div>
    </>
}

const PressForm = ({ refreshPresses }: { refreshPresses: () => void }) => {
    const imageRef = React.useRef<HTMLInputElement>(null);
    const [form, setForm] = React.useState<any>({
        Title: '',
        Description: '',
        Image: null
    });

    useEffect(() => {
        //@ts-ignore
        imageRef.current.onchange = (e: any) => {
            if (e.target.files[0]) {
                setForm({
                    ...form,
                    Image: e.target.files[0]
                })
            }
        }
    }, [form])

    const [createLoading, setCreateLoading] = React.useState(false);

    return <>
        <input ref={imageRef} accept="image/*" type="file" hidden />
        <div className="flex w-full shadow-lg !bg-[inherit] h-fit py-[10px] gap-[10px] items-center justify-between px-[10px]">
            <div onClick={() => {
                imageRef.current?.click();
            }} className='min-w-[120px] hover:cursor-pointer min-h-[90px] relative rounded-md overflow-hidden'>
                <Image src={
                    form.Image ? URL.createObjectURL(form.Image) : '/images/png/no-image.png'
                } layout='fill' objectFit='cover' />
            </div>
            <div className="w-full h-fit justify-center items-end flex flex-col gap-[10px]">
                <Input value={form.Title} onChange={(e) => setForm({ ...form, Title: e.target.value })} text={`Basın  Başlık (min 20/${form.Title.length} karakter)`} type="text" />
                <Input value={form.Description} onChange={(e) => setForm({ ...form, Description: e.target.value })} text={`Basın Metin (min 50/${form.Description.length} karakter)`} type="text" />
                <Button disabled={
                    ((!(form.Title.length >= 20 && form.Description.length >= 50 && form.Image)) || createLoading)
                } onClick={async () => {
                    setCreateLoading(true);
                    createPress(form).then(() => {
                        setForm({
                            Title: '',
                            Description: '',
                            Image: null
                        })
                        setCreateLoading(false);
                        refreshPresses();
                    }).catch(err => {
                        setCreateLoading(false);
                        setForm({
                            Title: '',
                            Description: '',
                            Image: null
                        })
                    })
                }} type='secondary' className='!p-[0px] !px-[50px] !py-[5px] text-center w-fit'> Ekle </Button>
            </div>
        </div>
    </>
}

const EditPress = () => {
    const [presses, setPresses] = React.useState<any[]>([]);
    const refreshPresses = () => {
        getPresses().then((data) => {
            setPresses(data);
        }).catch((err) => {
            console.log("presses get err", err)
        })
    }
    useEffect(() => {
        refreshPresses();
    }, [])
    return <div className='pb-4'>
        <div className="flex justify-between items-center  mt-2 mb-2 px-[20px]">
            <Text type="h6" className='text-deepgreen-200'>Press</Text>
        </div>
        <PressForm refreshPresses={refreshPresses} />
        <Divider />
        <div className='flex w-full flex-col gap-[20px]'>
            {presses.map((item, index) => <Press {...item} key={v4()} refreshPresses={refreshPresses} />)}
        </div>
    </div>
}

export default function HomePageEdit() {
    const { user: { IsAdmin } } = useUser();
    if (!IsAdmin) Router.back();

    return (
        <DashboardLayout>
            <SettingsSubLayout>
                <div className="flex flex-col px-8 w-full h-full">
                    <EditBanner />
                    <EditPress />
                </div>
            </SettingsSubLayout>
        </DashboardLayout>
    )
}
