import ComponentHeading from '@components/BoxHeading/BoxHeading'
import FirstForm from '@components/Forms/BasvuruForms/FirstForm'
import FormAlert from '@components/Forms/FormAlert/FormAlert'
import FormsListTable from '@components/Forms/FormsListTable/FormsListTable'
import FormSteps from '@components/Forms/FormSteps/FormSteps'
import DashboardLayout from '@components/Layouts/DashboardLayout'
import React from 'react'



export default function Forms() {
    return (
        <DashboardLayout>
            <div className='bg-[white]'>
                <FormSteps />
                <div className='my-[10px]'>
                    <FormAlert text="Göndermiş olduğunuz form onaylanmıştır" status="confirmed" />
                    <FormAlert text="Göndermiş olduğunuz form beklemede" status="pending" />
                    <FormAlert text="Göndermiş olduğunuz form incelemede" status="inReview" />
                    <FormAlert text="Göndermiş olduğunuz form reddedildi" status="rejected" />
                </div>
                <div className='mt-[30px]'>
                    <FirstForm />
                </div>
                <div className='mt-[30px]'>
                    <FormsListTable />
                </div>
               
            </div>
        </DashboardLayout>
    )
}
