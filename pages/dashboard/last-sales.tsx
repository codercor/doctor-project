import DashboardLayout from '@components/Layouts/DashboardLayout'
import LastSalesTable from '@components/Table/LastSalesTable'
import React from 'react'

export default function LastSales() {
    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex pb-16  rounded-[30px_5px] p-[30px] bg-[#F4F4F4]">
                <LastSalesTable limited={false} />
            </div>
        </DashboardLayout>

    )
}
