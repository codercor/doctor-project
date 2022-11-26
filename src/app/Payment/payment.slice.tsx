import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { PaymentState, PaymentCredentials } from './payment.types';
import { paymentRequest } from './payment.utils';
import Router from 'next/router';



const initialState: PaymentState = {
    paymentProcess: {
        loading: false,
        error: null,
    },
    htmlContent: null,
    paymentCredentials: null,
};


export const payment = createAsyncThunk(
    'payment/payment',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const credentials = state.payment.paymentCredentials;
        if (!credentials) return Promise.reject('No payment credentials');
        try {
            return (await paymentRequest(credentials));
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });



export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentCredentials: (state, action: PayloadAction<PaymentCredentials>) => {
            state.paymentCredentials = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(payment.pending, (state) => {
            state.paymentProcess.loading = true;
        }).addCase(payment.fulfilled, (state, action) => {
            state.paymentProcess.loading = false;
            state.htmlContent = action.payload.HtmlContent;
        }).addCase(payment.rejected, (state, action: any) => {
            console.log("payload", action.payload);
            state.paymentProcess.loading = false;
            state.paymentProcess.error = action.payload.Message;

            if (action.payload.Message == "Kullanıcı faturalandırma bilgileri doldurulmalı") {
                Router.push("/dashboard/settings/invoice-settings")
            }
        });
    }
});


export const { setPaymentCredentials } = paymentSlice.actions;

export const selectPayment = (state: RootState) => state?.payment;

export default paymentSlice.reducer;