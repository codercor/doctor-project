import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { ArrowDropDown, ArrowDropUp, ArrowRight, RefreshRounded, Router, SortByAlpha } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { Pagination } from '@mui/material'
import { v4 } from 'uuid';
import classNames from 'classnames';
import { StatusBox } from '../appointment-management';
import FormAlert from '@components/Forms/FormAlert/FormAlert';
import StepStatus from '@components/Forms/Status/Status';
import request from '@config';
import { useRouter } from 'next/router'
import { Tooltip } from '@mui/material';

const FormTypeGrid = ({ active = 1, setActive }: { active?: number, setActive: (newActive: number) => void }) => {
    const Item = ({ text, isActive }: { text: string, isActive: boolean }) => {
        return <div className={classNames("cursor-pointer flex flex-col text-[#9D9D9D] border-[1px] border-[#D2D0D0] justify-center items-center bg-[white]  h-[60px]", {
            "!bg-[#E8F3F4] !text-[#4F777A] ": isActive
        })}>
            <p className="font-nexa-bold !text-[12px]">{text}</p>
        </div>
    }
    return <div className="grid grid-cols-3">
        {[
            "Ön Başvuru Formu",
            "Beslenme Değerlendirme Formu",
            "IFM Değerlendirme Formu",
            "Tıbbi Semptom Değerlendirme",
            "MSQ Takip Formu",
            "Son MSQ Takip Formu",
        ].map((text, index) => <div key={v4()} onClick={() => setActive(index)}> <Item isActive={index == active} text={text} /></div>)}
    </div>

}

export default function FormManagement() {
    const [activeTab, setActiveTab] = useState(0);
    const [searchKey, setSearchKey] = useState("");
    const [page, setPage] = useState(1);

    const [flows, setFlows] = useState<any[]>([])

    const getFlow = () => {
        request.post(`/search/flow/${activeTab + 1}?page=${page}`, {
            key: searchKey
        })
            .then((res) => {
                console.log("floowwwss", res)
                setFlows(res.data);
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const refresh = () => {
        getFlow()
    }

    useEffect(() => {
        refresh()
    }, [activeTab, searchKey, page])

    const Row = ({ flow }: { flow: any }) => {
        const [open, setOpen] = useState(false);
        const [assayFiles, setAssayFiles] = useState<FileList | null>(null);
        const router = useRouter()
        return <div className='flex flex-col w-full'>
            <div className='w-full flex p-3 border-t-[1px]'>
                <div className='flex-[6]'>
                    <p> {flow.user.information?.Fullname || '-'} </p>
                </div>
                <div className='flex-[6]'>
                    <p>
                        {flow.user?.Email || '-'}
                    </p>
                </div>
                <div className='flex-[4]'>
                    <p>
                        {flow.user?.information?.Phone || '-'}
                    </p>
                </div>
                <div className='flex-[4]'>
                    <p>
                        {
                            new Date(flow.created_at).toLocaleDateString("tr-TR")
                        }
                    </p>
                </div>
                <Tooltip title={flow?.Message} placement="top">
                    <div className='flex-[4]'>
                        <StepStatus
                            status={flow.Status == 'Waiting' ? 'Bekliyor' : flow.Status == 'Done' ? 'Onaylandı' : flow.Status == 'Reject' ? 'Reddedildi' : 'Bekliyor'}
                        />
                    </div>
                </Tooltip>
                <div className='flex-[4]'>
                    <button onClick={() => {
                        // setOpen(!open)
                        router.push(`/dashboard/forms-management/inspect-form-${flow.Step}?flow_id=${flow.Id}`)
                    }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                        <span>DETAY</span>
                        <ArrowRight />
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
                    <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Formlar</Text>
                    <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Tüm hastalara ait formlarınızı yönetin.</Text>
                </div>
            </div>
            <FormTypeGrid active={activeTab} setActive={setActiveTab} />
            <div className="w-[60%] gap-[10px] mt-[30px] mb-[30px] flex">
                <input type="text" onChange={(e) => setSearchKey(e.currentTarget.value)} placeholder='Ad Soyad ile arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button onClick={() => refresh()} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
            <div className="w-full flex flex-col">
                <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">Ad Soyad</Text>
                    <Text type="h3" className="text-secondary flex-[6] !text-[14px]">E-posta</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Telefon</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Belge Tarihi</Text>
                    <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Belge Durum</Text>
                    <div className='flex-[4]'>  </div>
                </div>
                <div className='w-full border-2'>
                    {
                        flows.length > 0 ? flows.map((flow, index) => <Row flow={flow} key={index} />) : <h1 className='w-full text-center text-[14px]'> Kayıt yok </h1>
                    }
                </div>
            </div>
            <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                setPage(value)
            }} count={flows.length > 0 ? page + 1 : page} />
        </div>
    </DashboardLayout>
}