import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import FormAlert from '@components/Forms/FormAlert/FormAlert';
import FormInput, { FormInputSelect } from '@components/Forms/FormInput/FormInput';
import StepStatus from '@components/Forms/Status/Status';
import Input from '@components/Input/Input';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { ArrowDropDown, ArrowDropUp, ArrowUpward, Refresh, RefreshRounded, SortByAlpha } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { CircularProgress, Pagination } from '@mui/material'
export default function Assays() {
    interface Assay {

    }
    const [assays, setAssays] = useState<any[]>([]);

    const Row = () => {
        const [open, setOpen] = useState(false);
        const [assayFiles, setAssayFiles] = useState<FileList | null>(null);
        return <div className='flex flex-col w-full'>
            <div className='w-full flex p-3 border-t-[1px]'>
                <div className='flex-[6]'>
                    <p>Gülnur Umur</p>
                </div>
                <div className='flex-[6]'>
                    <p>gulnurumur@gmail.com</p>
                </div>
                <div className='flex-[4]'>
                    <p>0 531 123 4567</p>
                </div>
                <div className='flex-[4]'>
                    <p>Kan Tahlili</p>
                </div>
                <div className='flex-[2]'>
                    <p> 09.01.2022 </p>
                </div>
                <div className='flex-[2]'>
                    <button onClick={() => {
                        setOpen(!open)
                    }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                        <span>DETAY</span>
                        {!open ? <ArrowDropUp /> : <ArrowDropDown />

                        }
                    </button>
                </div>
            </div>
            {
                open && <div className="w-full flex flex-col gap-3 min-h-[276px] p-4 bg-[transparent]">
                    <DocumentsUpload title=" " value={assayFiles} onChange={(e) => {
                        console.log("değişti", e.currentTarget?.files);
                        setAssayFiles(e.currentTarget?.files)
                    }} />
                    <button className='bg-[#4E929D] text-[white] rounded-[20px_5px] self-end w-[146px] h-[50px]'>Gönder</button>
                </div>}
        </div>
    }

    return <DashboardLayout>
        <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
            <div className="w-1/3 flex flex-col text-start items-center justify-start py-[26px] px-[10px]">
                <div className="flex flex-col justify-between w-full">
                    <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Tahliller</Text>
                    <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Hastalara ait tahlilleri görüntüleyin.</Text>
                </div>
            </div>

            <div className="w-[60%] gap-[10px] mt-[10px] mb-[30px] flex">
                <input type="text" placeholder='Ad Soyad ya da E-posta adresine göre arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <SortByAlpha />
                </button>
                <button className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
            <div className="w-full flex flex-col">
                <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">Ad Soyad</Text>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">E-posta</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Telefon</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Belge Adı</Text>
                    <Text type="h3" className="text-secondary flex-[2] !text-[14px]">Tarih</Text>
                    <div className='flex-[2]'>  </div>
                </div>
                <div className='w-full border-2'>
                    <Row />
                    <Row />
                    <Row />
                </div>
            </div>
            <Pagination siblingCount={3} variant="text" className="mt-auto mb-[30px]" onChange={(e: any, value: number) => { }} count={4} />
        </div>
    </DashboardLayout>
}