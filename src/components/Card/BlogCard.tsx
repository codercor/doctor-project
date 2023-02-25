import Image from 'next/image'
import { Blog } from 'pages/blog-yazilari'
import React from 'react'
import { useRouter } from 'next/router'

type Props = {
    blog: Blog
}

const BlogCard = ({ blog }: Props) => {
    const router = useRouter()
    return (
        <div className="h-[390px] w-[378px]  rounded-[20px_5px] overflow-hidden bg-[#EFF5F6]">
            <div onClick={() => router.push(`/blog?id=${blog?.Id}`)} className="relative cursor-pointer rounded-br-3xl h-[65%] overflow-hidden">
                <Image src={blog?.Image || "/images/png/brokoli.png"} layout="fill" objectFit="cover" />
            </div>
            <div className='flex flex-col justify-between pt-[20px] h-[35%]'>
                <p className='text-[#406B72] font-nexa-bold text-[20px] line-clamp-2 px-[20px]'>
                    {blog?.Title}
                </p>
                <div className='flex  justify-between items-stretch h-[56px]'>
                    <p className='text-[#629DA7] flex font-nexa-bold  items-center text-[16px] flex-[1] pl-[20px]'>
                        {new Date(blog?.updated_at).toLocaleDateString("tr-TR",{
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <button onClick={() => router.push(`/blog?id=${blog?.Id}`)} className='bg-[#4E929D] flex-[1] rounded-[20px_0_0_0] text-[18px] text-[white]'>
                        Devamını Oku
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard 