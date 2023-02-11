import Image from 'next/image'
import { Blog } from 'pages/blog-yazilari'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArrowBack, Close, Delete, Edit, PersonPinCircle, RemoveRedEye } from '@mui/icons-material'
import request from '@config'

type Props = {
    blog: Blog,
    refresh: () => void
}

const BlogCardAdmin = ({ blog, refresh }: Props) => {
    const router = useRouter()
    const [showAreYouSure, setShowAreYouSure] = React.useState(false)
    const [isSure, setIsSure] = React.useState(false)

    const deleteBlog = () => {
        return request.delete(`/forum/${blog?.Id}`)
            .then(res => {
                console.log(res)
                setIsSure(false)
                refresh()
            })
            .catch(err => {
                console.log(err)
                setIsSure(false)
                refresh()
            })
    }

    useEffect(() => {
        if (isSure) {
            deleteBlog()
        }
    }, [isSure])

    const handleShowBlog = () => {
        router.push(`/blog?id=${blog?.Id}`)
    }
    const handleEditBlog = () => {
        router.push(`/dashboard/blog-management/edit?id=${blog?.Id}`)
    }
    const handleDeleteBlog = () => {
        setShowAreYouSure(true)
    }

    const AreYouSureModal = () => {
        return <div onClick={() => {
            setShowAreYouSure(false)
        }} className="w-screen flex items-center justify-center left-0 top-0 fixed h-screen z-[99] bg-black-100 bg-opacity-25">
            <div onClick={(e) => {
                e.preventDefault()
            }} className="flex flex-col border-[1px] border-[#dfb3b3] bg-[#ebe6e6] relative w-[400px] p-[20px] rounded-[20px_5px]">
                <div className="flex h-[50px] ">
                    <h1 className='text-[#184E57] text-[16px] leading-none mb-[10px] font-nexa-bold '> Silmek İstediğinize Emin misiniz ?</h1>
                    <button onClick={() => {
                        setShowAreYouSure(false)
                    }} className='w-[30px] right-[20px] top-[20px] absolute text-[white] h-[30px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                        <Close />
                    </button>
                </div>
                <div className="flex justify-around mt-[20px]">
                    <button onClick={() => {
                        setIsSure(true)
                        setShowAreYouSure(false)
                    }}
                        className="bg-[#4e9d89] !rounded-[20px_5px] w-[100px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                        Evet
                    </button>
                    <button onClick={() => {
                        setShowAreYouSure(false)
                    }}
                        className="bg-[#9d4e61] !rounded-[20px_5px] w-[100px] h-[50px] text-[14px] text-[white] flex items-center justify-center">
                        Hayır
                    </button>
                </div>
            </div>
        </div>
    }

    return (

        <div className="h-[390px] w-[368px]  rounded-[20px_5px] overflow-hidden bg-[#EFF5F6]">
            {showAreYouSure && <AreYouSureModal />}
           
            <div className="relative rounded-br-3xl h-[75%] overflow-hidden">
                <div className='absolute z-[3] flex flex-col right-[10px] top-[16px] gap-[12px]'>

                    <RemoveRedEye onClick={handleShowBlog} className='min-w-[40px] rounded-[20px_5px] min-h-[40px] text-[white] p-[8px] bg-[#4E929D]' />
                    <Edit onClick={handleEditBlog} className='min-w-[40px] rounded-[20px_5px] min-h-[40px] text-[white] p-[8px] bg-[#E49B4F]' />
                    <Delete onClick={handleDeleteBlog} className='min-w-[40px] rounded-[20px_5px] min-h-[40px] text-[white] p-[8px] bg-[#CD2D2D]' />
                </div>
                <Image src={blog?.Image || "/images/png/brokoli.png"} layout="fill" objectFit="cover" />
            </div>
            <div className='flex flex-col justify-between pt-[20px] h-[25%]'>
                <p className='text-[#406B72] font-nexa-bold text-[20px] line-clamp-2 px-[20px]'>
                    {blog?.Title}
                </p>
            </div>
        </div>
    )
}

export default BlogCardAdmin