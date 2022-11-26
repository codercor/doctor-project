import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { ChatState, SendMessage } from './chat.types';
import { getChatLineWithIdRequest, sendMessageRequest, getChatLinesRequest } from './chat.utils';
import Router from 'next/router';



const initialState: ChatState = {
    ChatLines: [],
    ChatLinesLoading: false,
    Messages: [],
    MessagesLoading: false,
    SendMessageLoading: false,
    SelectedChatLineId: '',
};

export const getChatLines = createAsyncThunk(
    'chat/getChatLines',
    async () => {
        try {
            const response = await getChatLinesRequest();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const getChatLineWithId = createAsyncThunk(
    'chat/getChatLineWithId',
    async (id: string, thunkApi) => {
        try {
            const response = await getChatLineWithIdRequest(id);
            thunkApi.dispatch(setSelectedChatLineId(id));
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (message: SendMessage, thunkApi) => {
        try {
            const response = await sendMessageRequest(message);
            thunkApi.dispatch(getChatLineWithId(message.ChatLineId));
            return response;
        } catch (error) {
            throw error;
        }
    }
);


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedChatLineId: (state, action: PayloadAction<string>) => {
            state.SelectedChatLineId = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getChatLines.pending, (state) => {
                state.ChatLinesLoading = true;
            })
            .addCase(getChatLines.fulfilled, (state, action) => {
                state.ChatLinesLoading = false;
                state.ChatLines = action.payload;
            })
            .addCase(getChatLines.rejected, (state) => {
                state.ChatLinesLoading = false;
            })
            .addCase(getChatLineWithId.pending, (state) => {
                state.MessagesLoading = true;
            })
            .addCase(getChatLineWithId.fulfilled, (state, action) => {
                state.MessagesLoading = false;
                state.Messages = action.payload.reverse();
            })
            .addCase(getChatLineWithId.rejected, (state) => {
                state.MessagesLoading = false;
            })
            .addCase(sendMessage.pending, (state) => {
                state.SendMessageLoading = true;
            })
            .addCase(sendMessage.fulfilled, (state) => {
                state.SendMessageLoading = false;
            })
            .addCase(sendMessage.rejected, (state) => {
                state.SendMessageLoading = false;
            })
    },
});


export const { setSelectedChatLineId } = chatSlice.actions;

export const selectChat = (state: RootState) => state?.chat;

export default chatSlice.reducer;