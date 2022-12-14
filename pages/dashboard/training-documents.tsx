import SelectTraining from '@components/Input/SelectTraining'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import React from 'react'
import SelectDriveItem from '@components/Input/SelectDriveItem'
import Button from '@components/Button'
import { attachDriveItemToTraining } from '@app/User/user.utils'
import { LinearProgress } from '@mui/material'

export default function TrainingDocuments() {
    const [selectedTrainingId, setSelectedTrainingId] = React.useState('')
    const [selectedDriveItemId, setSelectedDriveItemId] = React.useState('')
    const [selectDriveIsActive, setSelectDriveIsActive] = React.useState(false)
    const [valid, setValid] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

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

    return (
        <DashboardLayout>

            <div className=" md:h-fit py-[50px] flex flex-col px-[200px] items-center rounded-[30px_5px] bg-[#F4F4F4]">
                {loading ? <div className="w-full">
                    <LinearProgress color="secondary" />
                </div> :
                    <> <div className='flex justify-between w-full items-center'>
                        <p> E??itim Se??ildi {!selectedTrainingId ? '???' : '???'}</p>
                        <p> Google drive Klas??r??  Se??ildi {!selectedDriveItemId ? '???' : '???'} </p>
                    </div>
                        <div className='flex justify-between w-full items-center'>
                            <SelectTraining handleChange={handleChange} selectedTrainingId={selectedTrainingId} />
                            <SelectDriveItem setSelectedDriveItemId={setSelectedDriveItemId} isActive={selectDriveIsActive} />
                        </div>
                        <div className="w-full flex justify-center items-center border-2">
                            <Button onClick={() => {
                                console.log('selectedTrainingId', selectedTrainingId)
                                console.log('selectedDriveItemId', selectedDriveItemId)
                                handleClickAttach()
                            }} className='h-fit w-fit border-2 border-green-500' type="secondary" disabled={!valid}>E??le??tir</Button>
                        </div></>}
            </div>
        </DashboardLayout>
    )
}
