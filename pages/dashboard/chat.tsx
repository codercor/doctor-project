import SendButton from "@components/Button/SendButton";
import SettingsMenuButton from "@components/Button/SettingsMenuButton";
import Input from "@components/Input/Input";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import Text from "@components/Text";
import { Star, SendSharp } from "@mui/icons-material";
import classNames from "classnames";


const ChatUserCard = () => {
    return <div className="bg-[#D0E4E8] h-[97px] flex items-center justify-start p-[20px]">
        <div className="bg-[#4E929D] w-[60px] h-[60px] rounded-full text-[white] grid place-content-center">
            <Star className="text-[34px]" />
        </div>
        <div className="flex flex-col ml-[20px]">
            <Text className="text-[14px]">Prof. Dr. Mehmet Ali Yılmaz</Text>
            <Text className="text-[14px] text-[#878787]">Merhaba Nazan Hanım ?</Text>
        </div>
    </div>
}
type ChatMessageProps = { isMe?: boolean, message?: string }
const ChatMessage = ({ isMe = true, message = `Hi! gggggggggg
asdsa asdaaaaaaaaad asdasd assaagdhfddasdfas  dasfas asdfasd dsaf adf adfadsfafda
sdffsadfsadf 
asdfasdfdfas asdfas asdf asdf a
adsfasdfadsf asdfas
 asdfasdfa asdf adsfa
 adsfasdf a fasdfa 
 afsdfsdgsfgs sdfgsdfgsd
 sfdgsdfg sfgsfdgsfdgs sdafsd as 
 asdfasfas asd` }: ChatMessageProps) => {
    return <div className={classNames("flex p-[20px] h-fit mt-[20px] w-[80%] ", {
        "self-end": !isMe,
    })}>
        <div className="flex  items-center justify-center min-w-[60px] h-[60px] rounded-full bg-secondary">
            <Star />
        </div>
        <div className="h-fit mt-[36px] ml-2 leading-none  w-[calc(100%-80px)] bg-[white] pt-[3px] rounded-[10px_3px_10px_3px] pl-[5px]">
            <Text className="text-[12px] w-full h-auto">09.10</Text>
            <Text className="text-[16px] break-words max-h-auto h-fit">{message}</Text>
        </div>
    </div>
}

const ChatBox = () => {
    return <div className="px-[30px] w-full h-full flex flex-col bg-[#F9FBFC]">
        <div className="w-full h-[30px] text-center flex items-center justify-center sticky top-0 bg-[#F9FBFC]"> <Text className="text-gray-300">11 Ekim 2022</Text> </div>
        <div className="w-full  overflow-auto h-full flex flex-col-reverse">
            <ChatMessage isMe={false} />
            <ChatMessage />
            <ChatMessage isMe={false} />
            <ChatMessage /> 
            <ChatMessage isMe={false} />
            <ChatMessage />
        </div>
        <div className="flex my-[30px] items-center justify-start w-full min-h-[52px] bg-[transparent]">
            <div className="w-[90%] h-full">
                <Input type="text" placeholder="Mesaj Yaz" />
            </div>
            <div className="w-[62px]  h-full overflow-hidden rounded-[20px_5px_20px_5px] ml-[13px]">
                <SendButton />
            </div>
        </div>
    </div>
}

const Chat = () => {
    return (
        <DashboardLayout>
            <div className=" md:h-[798px] flex  rounded-[30px_5px] bg-[#F4F4F4]">
                <div className="w-1/3 h-full flex flex-col text-start items-center justify-start py-[26px] px-[30px]">
                    <div className="flex justify-between w-full">
                        <Text type="h3" className="text-secondary !text-[20px] w-full">Mesajlar</Text>
                    </div>
                    <div className="w-full">
                        <ChatUserCard />
                    </div>
                </div>
                <ChatBox />
            </div>
        </DashboardLayout>
    );
}

export default Chat;