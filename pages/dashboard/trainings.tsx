import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text'
import { Delete, Edit, PanoramaFishEye, School, Visibility } from '@mui/icons-material'
import { Input } from '@mui/material'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Button from '@components/Button'
import Router, { useRouter } from 'next/router'
import useTraining from 'src/hooks/training.hook'
import { TrainingCardProps } from '@components/Card/TrainingCard'
import { TrainingSliceProps } from '@app/Training/training.slice'
import { TrainingDataType } from 'src/types/Training'
import { v4 } from 'uuid'
import { CircularProgress, Pagination } from '@mui/material'
const Training = ({ training }: { training: TrainingDataType }) => {
    const { deleteTrainingById } = useTraining();
    return <div className="flex  items-center mt-4  justify-between px-4 bg-[white] w-full h-[85px]">
        <div className="flex flex-col items-start justify-start gap-2">
            <Text type='overline' className="text-[#4E929D] text-left !font-nexa-bold text-[14px]"> Eğitim adı </Text>
            <Text type="paragraph" className="text-[black] text-left !font-nexa-bold text-[20px]"> {training.Name} </Text>
        </div>
        <div className="flex flex-row items-start justify-start gap-2">
            <Button onClick={() => {
                Router.push(`/training?id=${training.Id}`)
            }} type="secondary" className="bg-[#9AA567] w-fit !p-4 gap-1 flex rounded-sm min-h-[36px]">
                <Visibility className="text-[white] text-[16px]" />
            </Button>
            <Button onClick={() => {
                Router.push(`/dashboard/edit-training?id=${training.Id}`)
            }} type="secondary" className="bg-[#E49B4F] w-fit  !p-4 gap-1 flex rounded-sm min-h-[36px]">
                <Edit className="text-[white] text-[16px]" />
            </Button>
            <Button
                onClick={() => {
                    if (training?.Id) deleteTrainingById(training?.Id);
                }}
                type="secondary" className="bg-[#CD2D2D] w-fit !p-4 gap-1 flex rounded-sm min-h-[36px]">
                <Delete className="text-[white] text-[16px]" />
            </Button>
        </div>
    </div>
}

export default function Trainings() {
    const [page, setPage] = React.useState(1);
    const router = useRouter()
    const handleGoToCreate = () => {
        router.push('/dashboard/create-training')
    }
    //fix ref type error
    const ref = React.createRef<HTMLDivElement>();

    const { adminTrainings, refetchAdminTrainings, deleteTrainingProcess, loadingProcess } = useTraining();


    useEffect(() => {
        console.log("çekelim", page);

        refetchAdminTrainings(page);
    }, [page])



    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex flex-col  rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="w-full h-fit flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full">
                        <Text type="h3" className="text-[#4E929D] !text-[20px] w-full">Tüm Eğitimler   </Text>
                        <Button type="secondary" onClick={handleGoToCreate} className="bg-tertiary !min-w-[180px]  justify-center gap-1 flex items-center !min-h-[30px]">
                            <Edit className="text-[white] text-[12px]" />
                            <Text className='text-[12px] w-full'>Eğitim ekle</Text>
                        </Button>
                    </div>
                </div>
                <div ref={ref} className='overflow-auto scrollbar-thin scrollbar-thumb-quaternary-flat w-full pt-4  h-full px-4'>
                    {
                        loadingProcess.loading ? <div className="w-[400px] h-[400px] mx-auto animate-pulse text-center bg-secondary-light flex flex-col justify-center items-center gap-2 rounded-full">
                            <div>  <CircularProgress /></div>
                            <Text type="h1" className="text-secondary !text-[20px]  w-full text-center">Yükleniyor...</Text>
                        </div> : <>
                            {
                                (deleteTrainingProcess.loading) ? <div className="w-[400px] h-[400px] mx-auto animate-pulse text-center bg-secondary-light flex flex-col justify-center items-center gap-2 rounded-full">
                                    <div>  <CircularProgress /></div>
                                    <Text type="h1" className="text-secondary !text-[20px]  w-full text-center">Siliniyor...</Text>
                                </div> : adminTrainings.length ? adminTrainings.map((training) => <Training key={v4()} training={training} />) :
                                    <div className='w-full h-full flex justify-center items-center flex-col gap-[10px]'>
                                        <School />
                                        <Text> Hiç eğitim yok... </Text>
                                    </div>}
                        </>
                    }

                </div>
                <Pagination siblingCount={page} onChange={(e: any, value: number) => { setPage(value) }} count={page + 1} />
            </div>
        </DashboardLayout>
    )
}
