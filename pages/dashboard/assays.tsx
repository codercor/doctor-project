import { adminGetUsers } from '@app/User/user.utils';
import Button from '@components/Button';
import FormAlert from '@components/Forms/FormAlert/FormAlert';
import { FormInputSelect } from '@components/Forms/FormInput/FormInput';
import StepStatus from '@components/Forms/Status/Status';
import Input from '@components/Input/Input';
import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { ArrowDropDown, ArrowDropUp, ArrowUpward, Refresh } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import DocumentsUpload from '@components/Upload/DocumentsUpload';
export default function Assays() {
    interface Assay {

    }
    const [assays, setAssays] = useState<any[]>([]);

    const Row = () => {
        const [open, setOpen] = useState(true);
        const [assayFiles, setAssayFiles] = useState<FileList | null>(null);
        return <div className='flex flex-col w-full'>
            <div className='w-full flex p-3 border-t-[1px]'>
                <div className='flex-[5]'>
                    <Text type="h3" className="text-secondary !text-[14px]">Kan Tahlili</Text>
                </div>
                <div className='flex-[2]'>
                    <StepStatus status='pending' />
                </div>
                <div className='flex-[1]'>
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
                        console.log("de??i??ti", e.currentTarget?.files);
                        setAssayFiles(e.currentTarget?.files)
                    }} />
                    <button className='bg-[#4E929D] text-[white] rounded-[20px_5px] self-end w-[146px] h-[50px]'>G??nder</button>
                </div>}
        </div>
    }

    return <DashboardLayout>
        <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
            <div className="w-1/3 flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                <div className="flex flex-col justify-between w-full">
                    <Text type="h3" className="text-secondary !text-[20px] w-full">Tahlillerim</Text>
                    <Text type="h3" className="text-secondary font-nexa-light !text-[14px] w-full">T??m tahlillerinizi g??r??nt??leyin.</Text>
                </div>
            </div>

            <div className="w-full mt-[10px] mb-[30px]">
                <FormAlert status='pending' text='1 adet g??ndermeniz gereken tahlil bulunmaktad??r' />
            </div>
            <div className="w-full flex flex-col">
                <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                    <Text type="h3" className="text-secondary flex-[5] !text-[14px]">Tahlil Ad??</Text>
                    <Text type="h3" className="text-secondary flex-[2] !text-[14px]">Durum</Text>
                    <div className='flex-[1]'>  </div>
                </div>
                <div className='w-full border-2'>
                    <Row />
                    <Row />
                    <Row />
                </div>
            </div>
        </div>
    </DashboardLayout>
}