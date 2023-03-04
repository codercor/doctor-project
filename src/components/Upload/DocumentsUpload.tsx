import Text from '@components/Text'
import React from 'react'
import Image from 'next/image'
import { Close } from '@mui/icons-material'
import { Add, AddAPhoto, Delete, Edit, DocumentScanner } from "@mui/icons-material";
type UploadProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: FileList | null,
    title?: string
}



export default function DocumentsUpload({ onChange, value, title = "Eğitim Dökümanları" }: UploadProps) {
    const ref = React.useRef<HTMLInputElement>(null);
    const [sizeError, setSizeError] = React.useState(false);
    const PreviewComponent = ({ name }: { name: string }) => <div title={name} className='relative border-2 flex flex-col justify-center items-center text-[40px] min-w-[100px] w-[100px] h-full'>

        <DocumentScanner fontSize='inherit' />
        <Text className='!text-[10px] line-clamp-1'> {name}</Text>
        <div onClick={
            (e) => {
                e.stopPropagation();
                if (!value) return;
                let refreshedData = {
                    target: { files: Array.from(value).filter((file) => file.name !== name) }
                }
                console.log("refreshedData", refreshedData);

                onChange(refreshedData as any)
            }
        } className='absolute top-0 z-10 right-0 bg-red-600 text-[white] rounded-full grid place-content-center'>
            <Close />
        </div>
    </div>
    return (<>
        <input type="file" multiple accept=".pdf" hidden ref={ref} onChange={(e) => {
            if (e.target.files && Array.from(e.target.files).some((file) => file.size > 2000000)) {
                setSizeError(true);
                return;
            } else {
                setSizeError(false);
                onChange(e);
            }
        }} />
        <div className="mt-1" onClick={() => {
            ref.current?.click();
        }} >
            <Text type="h4" className="text-secondary !text-[14px] !py-[10px]"> {title} </Text>
            {!value || value?.length < 1 ? <div className="cursor-pointer md:wfull md:h-[168px] outline-dotted outline-2 outline-secondary rounded-[5px_20px_0_20px] flex justify-center flex-col items-center px-[50px] py-[20px] text-center text-secondary" >
                <Add />
                <Text type="h4" className="!text-[14px] !py-[10px]">Döküman(pdf) Yükle</Text>
                <Text type="paragraph" className="!text-[14px] !py-[10px]">
                    Yükleyeceğiniz döküman 2 MB&apos;dan büyük olmamalıdır.
                </Text>
            </div> :
                <div className='overflow-auto scrollbar-thin scrollbar-thumb-secondary md:wfull md:h-[168px] outline-dotted outline-2 outline-secondary rounded-[5px_20px_0_20px] flex justify-start gap-2 items-center px-[50px] py-[20px] text-center text-secondary'>
                    {
                        Array.from(value).map((file, index) => {
                            return <PreviewComponent key={file.name + index} name={file.name} />
                        })
                    }
                </div>}
        </div>
        {sizeError && <span className="text-[#FF0000] text-[16px] font-nexa-regular ml-2">
            * 2MB'dan büyük dosya yükleyemezsiniz
        </span>}
    </>
    )
}
