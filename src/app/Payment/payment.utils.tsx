import request, { PAYMENT } from '@config'
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