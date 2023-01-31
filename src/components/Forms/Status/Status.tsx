import { AccessTimeFilledOutlined, CheckCircleOutlineOutlined, HighlightOffRounded } from "@mui/icons-material"
import classNames from "classnames"

export type StepStatusType = 'confirmed' | 'rejected' | 'pending' | 'inReview' | 'Onaylandı' | 'Bekliyor' | 'Reddedildi' | 'Gönderildi'
const StepStatus = ({ status }: { status: StepStatusType }) => {
    const statusColorClasses = classNames('w-[110px] rounded-md h-[30px] flex items-center justify-between', {
        "bg-[#F6FFED] border-[1px] border-[#B7EB8F] text-[#389E0D]": status === "confirmed" || status === "Onaylandı" || status === "Gönderildi",
        "bg-[#FFF2F0] border-[1px] border-[#FFCCC7] text-[#CF1322]": status === "rejected" || status === "Reddedildi",
        "bg-[#FFFBE6] border-[1px] border-[#FFE58F] text-[#FAAD14]": status === "pending",
        "bg-[#D7EDF0] border-[1px] border-[#4E929D] text-[#4E929D]": status === "inReview" || status == "Bekliyor",
    })

    const icon = status === "confirmed" ? <CheckCircleOutlineOutlined fontSize='small' /> : status === "rejected" ? <HighlightOffRounded fontSize='small' /> : status === "pending" ? <AccessTimeFilledOutlined fontSize='small' /> : <AccessTimeFilledOutlined fontSize='small' />

    const text = status === "confirmed" ? "Onaylandı" : (status === "rejected" || status === "Reddedildi") ? "Reddedildi" : status === "pending" ? "Beklemede" : status == "Bekliyor" ? "Bekliyor" : status == "Onaylandı" ? "Onaylandı" : status == "Gönderildi" ? "Gönderildi" : "inceleme" // status === "inReview" ?
    return <div className={statusColorClasses}>
        <p className="text-[12px] font-nexa-regular flex items-center justify-around w-full leading-none">
            {icon}
            {text.toUpperCase()}</p>
    </div>
}

export default StepStatus

