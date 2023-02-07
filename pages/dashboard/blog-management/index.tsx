import BlogCard from '@components/Card/BlogCard'
import BlogCardAdmin from '@components/Card/BlogCardAdmin'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import request from '@config'
import { Add } from '@mui/icons-material'
import { CircularProgress, Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Blog } from '../../blog-yazilari'


const BlogManagement = () => {


    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1);
    const [blogs, setBlogs] = React.useState<Blog[]>([])

    const getBlogs = async () => {
        let req = await request.get(`/forum?page=${page}`);
        return req.data;
    }

    const refresh = () => {
        setLoading(true)
        getBlogs().then(res => {
            setBlogs(res)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }


    useEffect(() => {
        refresh()
    }, [page])

    const router = useRouter()

    return (
        <DashboardLayout>
            <div className="flex flex-col">


                <div className="w-full flex justify-between px-[16px]">
                    <div className="flex flex-col">
                        <h1 className="text-[#4D5628] text-[20px] font-nexa-bold">Blog Yönetimi</h1>
                        <p className='text-[#828282] text-[16px] font-nexa-regular'>Blog içeriklerinizi görüntüleyin</p>
                    </div>

                    <button onClick={() => {
                        router.push('/dashboard/blog-management/create')
                    }} className='rounded-[20px_5px] w-[152px] h-[48px] px-[10px] bg-[#4E929D] text-[white]'>
                        <Add />
                        <span className='leading-none'>
                            İçerik Ekle
                        </span>
                    </button>
                </div>
                <div className='flex  flex-wrap w-full  md:min-h-[400px] mx-auto md:flex-row my-[40px] flex-col items-center justify-center gap-[36px]'>
                    {loading ? <CircularProgress className='mx-auto' />
                        :
                        <>
                            {
                                blogs.length < 1 ? <>

                                    <h1 className='text-[56px] font-nexa-light'> 🤷  </h1>
                                </> : blogs.map((blog, index) => {
                                    return (
                                        <BlogCardAdmin refresh={refresh} key={index} blog={blog} />
                                    )
                                })
                            }
                        </>}

                </div>
                <div className="w-full pb-[46px]">
                    <Pagination
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        className='mx-auto w-fit' count={page + 1} siblingCount={3} variant='outlined' shape='rounded' color='primary' />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default BlogManagement;