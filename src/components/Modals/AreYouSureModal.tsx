import { Close } from "@mui/icons-material"
import { useState } from "react"

const AreYouSureModal = ({ finish, text }: {
    finish: (finishValue: {
        confirmed: boolean,
    }) => void, text: string
}) => {
    const [rejectMessage, setRejectMessage] = useState<string | undefined>(undefined)
    return <>
        <div onClick={(e) => {
            e.stopPropagation();
            finish({
                confirmed: false,
            })
        }} className='fixed top-0 z-[2] grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="lg:w-[504px] w-[90%] ml-[5%] relative  px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
                <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold"> Emin misiniz ? </h1>
                <p className='text-[#5C5C5C] text-[16px] mb-[20px]'>
                    {text}
                </p>
                <div className="flex justify-between mt-[20px]">
                    <button onClick={() => {
                        finish({
                            confirmed: true
                        })
                    }}
                        className='text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4e9d89] w-[172px] h-[50px] disabled:opacity-[50%]'>
                        Evet
                    </button>
                    <button onClick={() => {
                        finish({
                            confirmed: false,
                        })
                    }}
                        className='text-[white] mt-[10px] rounded-[20px_5px] font-nexa-bold bg-[#9d4e61] w-[172px] h-[50px] disabled:opacity-[50%]'>
                        Hayır
                    </button>
                </div>
                <button onClick={() => {
                    finish({
                        confirmed: false,
                    })
                }}
                    className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                    <Close />
                </button>

            </div>
        </div>
    </>
}

export default AreYouSureModal