import request, { CHAT_LINES, CHAT_LINE_WITH_ID } from '@config'
import { AxiosError } from 'axios';
import { ChatLine, Message, SendMessage } from './chat.types';


export const getChatLinesRequest = async (): Promise<Array<ChatLine>> => {
    try {
        const response = await request.get(CHAT_LINES);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getChatLineWithIdRequest = async (id: string): Promise<Array<Message>> => {
    try {
        const response = await request.get(CHAT_LINE_WITH_ID.replace(':lineId', id));
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const sendMessageRequest = async (message: SendMessage): Promise<any> => {
    try {
        const response = await request.post(CHAT_LINES, message);
        return response.data;
    } catch (error) {
        throw error;
    }
}