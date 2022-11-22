import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { PaymentState, PaymentCredentials } from './payment.types';
import { paymentRequest } from './payment.utils';




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
        return (await paymentRequest(credentials));
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
            state.paymentProcess.loading = false;
            state.paymentProcess.error = action.payload.ErrorMessage;
        });
    }
});


export const { setPaymentCredentials } = paymentSlice.actions;

export const selectPayment = (state: RootState) => state?.payment;

export default paymentSlice.reducer;