import LandingLayout from '@components/Layouts/LandingLayout'
import Container from "@components/Container";
import React, { useEffect } from 'react'
import BlogCard from '@components/Card/BlogCard';
import Image from 'next/image'
import { Pagination } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { request } from '@config';
import blog from './blog';
type Props = {}

export interface Blog {
    Id: string;
    Title: string;
    Text: string;
    Image: string;
    created_at: string;
    updated_at: string;
}



export default function BlogYazilari({ }: Props) {


    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1);
    const [blogs, setBlogs] = React.useState<Blog[]>([])

    const getBlogs = async () => {
        let req = await request.get(`/forum?page=${page}`);
        return req.data;
    }

    useEffect(() => {
        setLoading(true)
        getBlogs().then(res => {
            setBlogs(res)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [page])

    return (
        <LandingLayout backColor='light'>
            <div className="h-[150px] "> </div>
            <div className='relative  text-[#314E53] flex justify-center items-center flex-col gap-[40px] w-full h-[481px]'>
                <h1 className='font-nexa-bold text-[36px] md:text-[42px] z-[1]'>Blog</h1>
                <p className="font-nexa-bold text-[16px] md:text-[24px] z-[1] max-w-[600px] px-[10px] text-center">
                    Mutlu ve canlı bir yaşam yaratmak için sizin için hazırladığım blog yazılarına göz atın ve sağlıklı yaşama bir adım daha yaklaşın.
                </p>
                <Image src="/images/png/blog-header.png" layout="fill" objectFit="cover" />
            </div>
            <div className='flex flex-wrap max-w-[1280px] md:min-h-[400px] mx-auto md:flex-row my-[40px] flex-col items-center justify-center gap-[20px]'>
                {loading ? <CircularProgress className='mx-auto' />
                    :
                    <>
                        {
                            blogs.length < 1 ? <>

                                <h1 className='text-[56px] font-nexa-light'> 🤷  </h1>
                            </> : blogs.map((blog, index) => {
                                return (
                                    <BlogCard key={index} blog={blog} />
                                )
                            })
                        }
                    </>}

            </div>
            <div className="max-w-[1280px] w-full justify-center flex mx-auto pl-[46px] mb-[30px]">
                <Pagination
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    className='w-fit' count={blogs.length > 0 ? page + 1 : page} siblingCount={3} variant='outlined' shape='rounded' color='primary' />
            </div>
        </LandingLayout>
    )
}