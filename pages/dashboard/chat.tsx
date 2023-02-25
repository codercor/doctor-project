import { ChatLine, Message } from "@app/Chat/chat.types";
import SendButton from "@components/Button/SendButton";
import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Star, SendSharp, Refresh } from "@mui/icons-material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useChat } from "src/hooks/chat.hook";
import toast from 'react-hot-toast';
import { v4 } from "uuid";
import useUser from "src/hooks/user.hook";
import { useBreakpoint, useIsDesktop } from "src/hooks/breakpoint";
import { useRouter } from "next/dist/client/router";

const ChatUserCard = ({ chatLine, onClick, active }: { chatLine: ChatLine, onClick: () => void, active: boolean }) => {
    const { getChatLineMessages } = useChat();

    return <div onClick={() => {
        onClick()
    }} className={classNames("bg-[#D0E4E8] transition-all hover:bg-[white] duration-1000 hover:rounded-[5px_20px] hover:border-2  h-[97px] flex items-center justify-start p-[20px]", {
        "!bg-[white] transtion-all  border-2 rounded-[20px_5px] border-[#D0E4E8]": active
    })}>
        <div className="bg-[#4E929D] w-[60px] h-[60px] rounded-full text-[white] grid place-content-center">
            <Star className="text-[34px]" />
        </div>
        <div className="flex flex-col ml-[20px]">
            <Text className="text-[14px]"> {chatLine.UserName || 'İsimsiz kullanıcı'} </Text>
        </div>
    </div>
}
type ChatMessageProps = { isMe?: boolean, message: Message }
const ChatMessage = ({ isMe = true, message }: ChatMessageProps) => {

    return <div className={classNames("flex p-[20px] h-fit mt-[20px] w-[80%] ", {
        "self-end": !isMe,
    })}>
        {isMe && <div className="flex text-[white] items-center justify-center min-w-[60px] h-[60px] rounded-full bg-secondary">
            <Star />
        </div>}
        <div className="h-fit mt-[36px] ml-2 leading-none  w-[calc(100%-80px)] bg-[white] pt-[3px] rounded-[10px_3px_10px_3px] pl-[5px]">
            <Text className="text-[12px] w-full h-auto"> {new Date(message?.created_at).toLocaleDateString()} </Text>
            <Text className="text-[16px] break-words max-h-auto h-fit">{message?.Message}</Text>
        </div>
        {!isMe && <div className="flex  text-[white] items-center justify-center min-w-[60px] h-[60px] rounded-full bg-secondary">
            <Star />
        </div>}
    </div>
}
const ChatBox = () => {
    const { chat: { Messages, SelectedChatLineId, ChatLines, }, sendMessage, getChatLineMessages } = useChat();
    const { user: { Id } } = useUser()
    const router = useRouter();
    console.log("Id", Id);
    console.log("Messages", Messages[0]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        setMessage('');
        console.log("Messages", Messages, "ID", Id);

    }, [Messages]);
    const [disabled, setDisabled] = useState(false);
    return <div className="px-[30px] relative w-full h-full flex flex-col bg-[#F9FBFC]">
        {SelectedChatLineId && <div onClick={() => {
            getChatLineMessages(SelectedChatLineId)
        }} className="w-[40px] hover:shadow-md shadow-xl transition-all cursor-pointer grid place-content-center rounded-[5px_20px] absolute top-0 right-0 h-[40px] bg-secondary text-[white]">
            <Refresh />
        </div>}

        <div className="w-full relative overflow-auto h-full flex flex-col-reverse">

            {Messages.map((item) => <ChatMessage key={v4()} message={item} isMe={!(item.SenderId == Id)} />)}
        </div>
        {SelectedChatLineId && <div className="flex my-[30px] items-center justify-start w-full min-h-[52px] bg-[transparent]">
            <div className="w-[90%] h-full">
                <Input
                    onKeyUp={(e) => {
                        if (e.key == 'Enter') {
                            setDisabled(true);
                            sendMessage({
                                ChatLineId: SelectedChatLineId,
                                Message: message,
                                RecieverId: ChatLines.find(line => line.ChatLineId == SelectedChatLineId)?.UserId || '',
                                SenderId: Id
                            })?.then(() => {
                                setDisabled(false);
                            })?.catch(() => {
                                setDisabled(false);
                            })
                        }
                    }}
                    disabled={disabled}
                    value={message} onChange={(e) => {
                        setMessage(e.target.value);
                    }} type="text" placeholder="Mesaj Yaz" />
            </div>
            <button
                disabled={disabled}
                onClick={() => {
                    setDisabled(true);
                    sendMessage({
                        ChatLineId: SelectedChatLineId,
                        Message: message,
                        RecieverId: ChatLines.find(line => line.ChatLineId == SelectedChatLineId)?.UserId || '',
                        SenderId: Id
                    })?.then(() => {
                        setDisabled(false);
                    })?.catch(() => {
                        setDisabled(false);
                    })
                }} className="w-[62px] disabled:opacity-40  h-full overflow-hidden rounded-[20px_5px_20px_5px] ml-[13px]">
                <SendButton />
            </button>
        </div>}
    </div>
}
const Chat = () => {
    const { chat: { ChatLinesLoading }, getChatLines, ChatLines, getChatLineMessages } = useChat();
    const [toastId, setToastId] = useState<string>('');
    const [activeLineId, setActiveLineId] = useState<string | null>(null);
    const { user: { Information } } = useUser()
    const router = useRouter();



    useEffect(() => {
        const userGender = Information.Gender
        const userFullName = Information.Fullname
        if (!userGender || !userFullName) {
            toast.error("Lütfen önce profil bilgilerinizi doldurunuz.")
            router.push("/dashboard/account");
            return;
        }

    }, []);
    useEffect(() => {
        let loadingToast = toast.loading("Mesajlar yükleniyor...")
        getChatLines()?.then(() => {
            toast.dismiss(loadingToast);
            toast.success("Mesajlar yüklendi.")
        })?.catch(() => {
            toast.dismiss(loadingToast);
            toast.error("Mesajlar yüklenirken bir hata oluştu.")
        })

    }, [activeLineId]);
    const isDesktop = useIsDesktop();
    return (
        <DashboardLayout>
            {!isDesktop ? <div className="w-full h-full items-center justify-center flex p-[30px]">
                <h1> Bu sayfayı görüntülemek için mobil cihazlar uygun değildir. </h1>
            </div> :
                <div className=" md:h-[798px] flex h-full  rounded-[30px_5px] bg-[#F4F4F4]">
                    <div className="w-1/3 h-full flex relative flex-col text-start items-center justify-start py-[26px] px-[30px]">
                        <div className="flex justify-between w-full">
                            <Text type="h3" className="text-secondary !text-[20px] w-full">Mesajlar   </Text>
                        </div>

                        <div className="w-full h-full flex flex-col gap-[10px] overflow-auto  scrollbar-thumb-white-default scrollbar-thin scrollbar-track-indigo-100">

                            {ChatLines.map((item) => <>
                                {/* <> {item.ChatLineId}</> */}
                                <ChatUserCard active={
                                    activeLineId == item.ChatLineId
                                } onClick={() => {
                                    getChatLineMessages(item.ChatLineId);
                                    setActiveLineId(item.ChatLineId);
                                }} chatLine={item} key={v4()} /></>)}
                        </div>
                    </div>

                    <ChatBox />
                </div>}
        </DashboardLayout>
    );
}
export default Chat;