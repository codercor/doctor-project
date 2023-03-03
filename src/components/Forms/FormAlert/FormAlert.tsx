import { AccessTimeFilledOutlined, CheckCircleOutlineOutlined, HighlightOffRounded } from "@mui/icons-material"
import classNames from "classnames"

export type FormAlertType = 'confirmed' | 'rejected' | 'pending' | 'inReview'
const FormAlert = ({ status, text }: { status: FormAlertType, text: string }) => {
    const statusColorClasses = classNames('w-full  h-[55px] flex items-center ', {
        "bg-[#F6FFED] border-[1px] border-[#B7EB8F] text-[#389E0D]": status === "confirmed",
        "bg-[#FFF2F0] border-[1px] border-[#FFCCC7] text-[#CF1322]": status === "rejected",
        "bg-[#FFFBE6] border-[1px] border-[#FFE58F] text-[#FAAD14]": status === "pending",
        "bg-[#D7EDF0] border-[1px] border-[#4E929D] text-[#4E929D]": status === "inReview",
    })

    const icon = status === "confirmed" ? <CheckCircleOutlineOutlined fontSize='small' /> : status === "rejected" ? <HighlightOffRounded /> : status === "pending" ? <AccessTimeFilledOutlined /> : <AccessTimeFilledOutlined />

    return <div className={statusColorClasses}>
        <p className="text-[10px] font-nexa-regular flex items-center justify-start gap-[10px] ml-[10px] w-full leading-none">
            {icon}
            {text.toUpperCase()}</p>
    </div>
}

export default FormAlert

