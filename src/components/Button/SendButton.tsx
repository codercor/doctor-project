import { SendSharp } from "@mui/icons-material";

const SendButton = () => {
    return (
        <div className="bg-tertiary h-full w-full min-w-[36px] min-h-[36px] grid place-content-center">
            <SendSharp className="text-[white] text-[16px]" />
        </div>
    );
}

export default SendButton;