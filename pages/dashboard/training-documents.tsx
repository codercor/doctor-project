import SelectTraining from '@components/Input/SelectTraining'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import React from 'react'
import SelectDriveItem from '@components/Input/SelectDriveItem'
import Button from '@components/Button'
import { attachDriveItemToTraining } from '@app/User/user.utils'
import { LinearProgress } from '@mui/material'
import { set } from 'nprogress'

export default function TrainingDocuments() {
    const [selectedTrainingId, setSelectedTrainingId] = React.useState('')
    const [selectedDriveItemId, setSelectedDriveItemId] = React.useState('')
    const [selectDriveIsActive, setSelectDriveIsActive] = React.useState(false)
    const [valid, setValid] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [IsSeen, setIsSeen] = React.useState(false);

    const handleChange = (event: any) => {
        setSelectedTrainingId(event.target.value as string)
    }
    React.useEffect(() => {
        if (selectedTrainingId !== '') {
            setSelectDriveIsActive(true)
        }
    }, [selectedTrainingId])

    React.useEffect(() => {
        if (selectedDriveItemId && selectedTrainingId) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [selectedDriveItemId, selectedTrainingId])

    const handleClickAttach = () => {
        setLoading(true)
        attachDriveItemToTraining(selectedTrainingId, selectedDriveItemId)
            .then((res) => {
                console.log('res ATTACH', res)
                setTimeout(() => {
                    setSelectedTrainingId('')
                    setSelectedDriveItemId('')
                    setSelectDriveIsActive(false)
                    setLoading(false)
                }, 1500);
            }).
            catch((err) => {
                console.log('err ATTACH', err)
                setLoading(false)
            })
    }

    
    const changeStatus = () =>{
        console.log('changeStatus', IsSeen);
        setIsSeen(!IsSeen);
    }

    return (
        <DashboardLayout>
            <div className=" md:h-fit py-[50px] gap-4 flex flex-col md:px-[100px] items-center rounded-[30px_5px] bg-[#F4F4F4]">
                {loading ? <div className="w-full">
                    <LinearProgress color="secondary" />
                </div> :
                    <> <div className='flex md:flex-row flex-col justify-between w-full items-center'>
                        <p> Eğitim Seçildi {!selectedTrainingId ? '❌' : '✅'}</p>
                        <p> Google drive Klasörü  Seçildi {!selectedDriveItemId ? '❌' : '✅'} </p>
                    </div>
                        <div className='flex md:flex-row flex-col justify-between w-full items-center'>
                            <SelectTraining handleChange={handleChange} selectedTrainingId={selectedTrainingId} />
                            <SelectDriveItem setSelectedDriveItemId={setSelectedDriveItemId} isActive={selectDriveIsActive} />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button onClick={() => {
                                console.log('selectedTrainingId', selectedTrainingId)
                                console.log('selectedDriveItemId', selectedDriveItemId)
                                handleClickAttach()
                            }} className='h-fit w-fit' type="secondary" disabled={!valid}>Eşleştir</Button>
                        </div></>}
            </div>
            <Button onClick={() => { changeStatus() }} className='h-fit w-fit justify-center' type="secondary">Eğitimleri Göster</Button>
            {IsSeen ?( <div className=" md:h-fit py-[50px] gap-4 flex flex-col md:px-[100px] items-center rounded-[30px_5px] bg-[#F4F4F4]">
                test asdasd
                </div>):null
                 }
        </DashboardLayout>
        
    )
}
