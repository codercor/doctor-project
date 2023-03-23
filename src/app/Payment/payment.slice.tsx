import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { PaymentState, PaymentCredentials } from './payment.types';
import { paymentRequest, freePaymentRequest } from './payment.utils';
import Router from 'next/router';
import { toast } from 'react-hot-toast';



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
interface FreePaymentCredentials {
    EducationId: string,
    UserId: string
}
export const freePayment = createAsyncThunk(
    'payment/freePayment',
    async (freePaymentCredentials: FreePaymentCredentials, thunkAPI) => {
        try {
            let res = await freePaymentRequest(freePaymentCredentials)
            toast.success("Mail adresinizde ki açıklamaları kontrol ediniz.", {
                duration: 5000,
            });
            return res;
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
        }).addCase(freePayment.pending, (state) => {
            state.paymentProcess.loading = true;
        }).addCase(freePayment.fulfilled, (state, action) => {
            state.paymentProcess.loading = false;
            Router.push("/dashboard")
        }).addCase(freePayment.rejected, (state, action: any) => {
            state.paymentProcess.loading = false;
            state.paymentProcess.error = action.payload.Message;
        });
    }
});


export const { setPaymentCredentials } = paymentSlice.actions;

export const selectPayment = (state: RootState) => state?.payment;

export default paymentSlice.reducer;