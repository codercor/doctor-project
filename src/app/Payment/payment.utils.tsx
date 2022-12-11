import request, { PAYMENT, PAYMENT_FREE_TRAINING } from '@config'
import { AxiosError } from 'axios';
import { PaymentCredentials } from './payment.types';


export const paymentRequest = async (credentials: PaymentCredentials) => {
    try {
        const response = await request.post(PAYMENT, credentials);
        return response.data;
    } catch (error) {
        throw (error as any).response.data;
    }
}

export const freePaymentRequest = async (credentials: {
    EducationId: string;
    UserId: string;
}) => {
    try {
        const response = await request.post(PAYMENT_FREE_TRAINING, credentials);
        return response.data;
    } catch (error) {
        throw (error as any).response.data;
    }
}