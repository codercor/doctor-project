import { getChatLines, sendMessage, getChatLineWithId } from '@app/Chat/chat.slice';
import { SendMessage } from '@app/Chat/chat.types';
import { RootState } from '@app/store';
import { useSelector, useDispatch } from 'react-redux';
import useUser from './user.hook';

export const useChat = () => {
    const dispatch = useDispatch<any>();
    const { user: { IsAdmin, Id } } = useUser()
    const chat = useSelector((state: RootState) => state.chat);
    return {
        chat,
        sendMessage: (message: SendMessage) => dispatch(sendMessage(message)),
        getChatLines: () => dispatch(getChatLines()),
        getChatLineMessages: (id: string) => dispatch(getChatLineWithId(id)),
        ChatLines: chat.ChatLines.filter(line => {
            return IsAdmin ? !line.IsAdmin : line.IsAdmin
        })
    };
};