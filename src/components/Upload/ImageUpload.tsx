import Text from '@components/Text'
import React from 'react'
import Image from 'next/image'
import { Close } from '@mui/icons-material'
import { Add, AddAPhoto, Delete, Edit } from "@mui/icons-material";
type UploadProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: File | null
}



export default function Upload({ onChange, value }: UploadProps) {
    const ref = React.useRef<HTMLInputElement>(null);
    const [sizeError, setSizeError] = React.useState(false);
    const PreviewImage = ({ url }: { url: string }) => <div className='relative w-full h-full'>
        <Image src={url} layout='fill' />
        <div onClick={
            (e) => {
                e.stopPropagation();
                let refreshedData = {
                    target: { files: [null] }
                }
                onChange(refreshedData as any)
            }
        } className='absolute top-0 z-10 right-0 bg-red-600 text-[white] rounded-full grid place-content-center'>
            <Close />
        </div>
    </div>
    return (<>
        <input type="file" accept=".jpg,.jpeg,.svg,.png" hidden ref={ref} onChange={(e) => {
            //2mb = 2 * 1024 * 1024
            if (e.target.files && e.target.files[0].size > (2 * 1024 * 1024)) {
                setSizeError(true);
                return;
            } else {
                setSizeError(false);
                onChange(e)
            }
        }} />
        <div className="mt-1" onClick={() => {
            ref.current?.click();
        }} >
            <Text type="h4" className="text-secondary !text-[14px] !py-[10px]"> Eğitim Görseli </Text>
            {!value ? <div className="cursor-pointer md:wfull md:h-[168px] outline-dotted outline-2 outline-secondary rounded-[5px_20px_0_20px] flex justify-center flex-col items-center px-[50px] py-[20px] text-center text-secondary" >
                <AddAPhoto />
                <Text type="h4" className="!text-[14px] !py-[10px]">Resim Yükle</Text>
                <Text type="paragraph" className="!text-[14px] !py-[10px]">
                    Yükleyeceğiniz resim formatı PNG veya JPG olmalıdır. En iyi deneyim için yükleyeceğiniz resim  400 x 200 boyutlarında olmalıdır.
                </Text>
            </div> :
                <div className='overflow-auto scrollbar-thin scrollbar-thumb-secondary md:wfull md:h-[168px] outline-dotted outline-2 outline-secondary rounded-[5px_20px_0_20px] flex justify-start gap-2 items-center px-[50px] py-[20px] text-center text-secondary'>
                    <PreviewImage url={URL.createObjectURL(value)} />
                </div>}
            {sizeError && <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
                * 2MB'dan büyük dosya yükleyemezsiniz
            </span>}
        </div>
    </>
    )
}
