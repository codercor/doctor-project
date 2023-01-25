import { ChatLine, Message } from "@app/Chat/chat.types";
import SendButton from "@components/Button/SendButton";
import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Star, SendSharp } from "@mui/icons-material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useChat } from "src/hooks/chat.hook";
import toast from 'react-hot-toast';
import { v4 } from "uuid";
import useUser from "src/hooks/user.hook";
import { useBreakpoint } from "src/hooks/breakpoint";

const ChatUserCard = ({ chatLine, onClick, active }: { chatLine: ChatLine, onClick: () => void, active: boolean }) => {
    const { getChatLineMessages } = useChat();
    return <div onClick={() => {
        getChatLineMessages(chatLine.ChatLineId);
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
    const { chat: { Messages, SelectedChatLineId, ChatLines }, sendMessage } = useChat();
    const { user: { Id } } = useUser()
    console.log("Id", Id);
    console.log("Messages", Messages[0]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        setMessage('');
        console.log("Messages", Messages, "ID", Id);

    }, [Messages]);

    return <div className="px-[30px] w-full h-full flex flex-col bg-[#F9FBFC]">
        <div className="w-full h-[30px] text-center flex items-center justify-center sticky top-0 bg-[#F9FBFC]"> <Text className="text-gray-300">11 Ekim 2022</Text> </div>
        <div className="w-full  overflow-auto h-full flex flex-col-reverse">
            {Messages.map((item) => <ChatMessage key={v4()} message={item} isMe={!(item.SenderId == Id)} />)}
        </div>
        {SelectedChatLineId && <div className="flex my-[30px] items-center justify-start w-full min-h-[52px] bg-[transparent]">
            <div className="w-[90%] h-full">
                <Input value={message} onChange={(e) => {
                    setMessage(e.target.value);
                }} type="text" placeholder="Mesaj Yaz" />
            </div>
            <div onClick={() => {
                sendMessage({
                    ChatLineId: SelectedChatLineId,
                    Message: message,
                    RecieverId: ChatLines.find(line => line.ChatLineId == SelectedChatLineId)?.UserId || '',
                    SenderId: Id
                })
            }} className="w-[62px]  h-full overflow-hidden rounded-[20px_5px_20px_5px] ml-[13px]">
                <SendButton />
            </div>
        </div>}
    </div>
}

const Chat = () => {
    const { chat: { ChatLinesLoading }, getChatLines, ChatLines } = useChat();
    const [toastId, setToastId] = useState<string>('');
    const [activeLineId, setActiveLineId] = useState<string | null>(null);
    useEffect(() => {
        if (ChatLinesLoading) {
            setToastId(toast.loading('Mesaj listesi Yükleniyor...'))
        }
        else {
            setTimeout(() => {
                toast.remove(toastId);
                toast.success('Mesaj listesi Yüklendi');
            }, 500);
        }
    }, [ChatLinesLoading]);
    useEffect(() => {
        getChatLines();
    }, []);
    const isDesktop = useBreakpoint("md")
    return (
        <DashboardLayout>
            {!isDesktop ? <div className="w-full h-full items-center justify-center flex p-[30px]">
                <h1> Bu sayfayı görüntülemek için mobil cihazlar uygun değildir. </h1>
            </div> :
                <div className=" md:h-[798px] flex h-full  rounded-[30px_5px] bg-[#F4F4F4]">
                    <div className="w-1/3 h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                        <div className="flex justify-between w-full">
                            <Text type="h3" className="text-secondary !text-[20px] w-full">Mesajlar</Text>
                        </div>
                        <div className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-white-default scrollbar-thin scrollbar-track-indigo-100">
                            {ChatLines.map((item) => <ChatUserCard active={
                                activeLineId == item.ChatLineId
                            } onClick={() => {
                                setActiveLineId(item.ChatLineId);
                            }} chatLine={item} key={v4()} />)}
                        </div>
                    </div>
                    <ChatBox />
                </div>}
        </DashboardLayout>
    );
}

export default Chat;