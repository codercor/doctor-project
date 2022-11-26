import { TrainingDataType } from "@app/Training/training.types";

export interface ChatLine {
    UserId: string;
    UserName: string;
    IsAdmin: boolean;
    ChatLineId: string;
}

export interface SendMessage {
    ChatLineId: string;
    SenderId: string;
    RecieverId: string;
    Message: string;
}

export interface Message {
    ChatLineId: string;
    SenderId: string;
    RecieverId: string;
    Message: string;
    SenderName: string;
    RecieverName: string;
    created_at: string;
}

export interface ChatState {
    ChatLines: ChatLine[];
    ChatLinesLoading: boolean;
    Messages: Message[];
    MessagesLoading: boolean;
    SendMessageLoading: boolean;
    SelectedChatLineId: string;
}
