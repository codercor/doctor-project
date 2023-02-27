import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import LandingLayout from '@components/Layouts/LandingLayout'
import Image from 'next/image'
import request from '@config'
import { toast } from 'react-hot-toast'
import { Blog as BlogT } from './blog-yazilari'
import { Facebook, Instagram, InstallDesktopSharp, Twitter, WhatsApp } from '@mui/icons-material'
import BlogCard from '@components/Card/BlogCard'
import { CircularProgress } from '@mui/material'

const Blog = () => {

    const router = useRouter()
    const [blog, setBlog] = React.useState<BlogT>({
        Id: '',
        Title: '',
        Text: '',
        Image: '',
        created_at: '',
        updated_at: ''
    })
    const [loading, setLoading] = React.useState<boolean>(false)

    const getBlog = async () => {
        setLoading(true)
        try {
            const req = await request.get(`/forum/${router.query.id}`)
            return req.data
        } catch (error) {
            toast.error('Bir hata oluştu');
            router.back();
        }
    }

    useEffect(() => {
        if (router.query.id) {
            getBlog().then(res => {
                setBlog(res)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
        }
    }, [router.query.id])
    return (
        <LandingLayout backColor='light'>

            <>
                <div className="h-[150px] "> </div>
                <div className='relative md:flex bg-gradient-to-b from-[#DFEBEC]  text-[#314E53] hidden justify-center items-center flex-col gap-[40px] w-full h-[340px]'>
                    <Image src={"/images/png/bg-blog-detay-figure.png"} layout="fill" objectFit="contain" />
                </div>
                <div className='relative my-[36px] md:px-0 px-[16px]  text-[#314E53] flex  max-w-[1280px] mx-auto flex-col gap-[40px] w-full min-h-[340px]'>
                    <div className="flex flex-col md:flex-row">
                        <div className='relative  text-[#314E53] flex justify-center items-center flex-col gap-[40px] md:w-[380px] aspect-video w-full min-h-[340px]'>
                            <Image src={blog?.Image || "/images/png/blog-header.png"} layout="fill" objectFit="cover" />
                        </div>
                        <div className="flex flex-col md:pt-0 pt-[34px] pl-[30px] justify-center">
                            <h1 className='font-nexa-regular text-[37px] text-[#314E53]'>  {blog?.Title} </h1>
                            <div className="flex gap-[20px] md:gap-[30px]  items-center ">
                                <p className='text-[#629DA7]  font-nexa-bold text-[18px]'> {new Date(blog?.updated_at || '').toLocaleString("tr-TR", {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}</p>
                                <span onClick={() => {
                                    window.open(`whatsapp://send?text=${blog?.Title} Okumak için tıklayın : ${window.location.href}`)
                                }}>

                                    <WhatsApp className='bg-[#4E929D] cursor-pointer rounded-full min-h-[42px] p-[6px] min-w-[42px] text-[white]' />
                                </span>
                                <span onClick={() => {
                                    window.open(`http://twitter.com/share?text=${blog?.Title}&url=${window.location.href}`)
                                }}>
                                    <Twitter className='bg-[#4E929D] cursor-pointer rounded-full min-h-[42px] p-[6px] min-w-[42px] text-[white]' />
                                </span>
                                <span onClick={() => {
                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)
                                }}>
                                    <Facebook className='bg-[#4E929D] cursor-pointer rounded-full min-h-[42px] p-[6px] min-w-[42px] text-[white]' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#314E53] font-nexa-regular text-[18px]'>
                        {
                            blog?.Text
                        }
                    </p>
                    <OtherBlogs />
                </div>
            </>
        </LandingLayout>
    )
}

export default Blog;

const OtherBlogs = () => {
    const [blogs, setBlogs] = React.useState<BlogT[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)

    const getBlogs = async () => {
        setLoading(true)
        try {
            const req = await request.get('/forum?page=1')
            return [...req.data.data].slice(0, 3)
        } catch (error) {
            toast.error('Bir hata oluştu');
        }

    }

    useEffect(() => {
        getBlogs().then(res => {
            setBlogs(res as BlogT[])
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])
    return (
        <div className='relative my-[36px]  text-[#314E53] flex  max-w-[1280px] mx-auto flex-col gap-[12px] w-full'>
            <h1 className='font-nexa-regular text-[28px] text-[#4D5729]  leading-none'> Son Yazılar </h1>
            <p className='text-[#9D9D9D] text-[18px] leading-none'>Benzer yazılarımıza göz atmak ister misiniz ? Diğer blog içeriklerine göz atın</p>
            <div className="flex md:flex-row flex-col gap-[30px] items-center ">
                {
                    loading ? <CircularProgress /> : blogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                }
            </div>
        </div>
    )
}
