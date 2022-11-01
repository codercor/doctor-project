import { Edit } from "@mui/icons-material";

const EditButton = () => {
    return (
        <div className="bg-tertiary min-w-[36px] rounded-sm min-h-[36px] grid place-content-center">
            <Edit className="text-[white] text-[16px]" />
        </div>
    );
}

export default EditButton;