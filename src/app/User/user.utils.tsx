import request, { AUTH_LOGIN, AUTH_REGISTER } from '@config'
import { AxiosError } from 'axios';
import { UserCredentials } from './user.types';


export const loginRequest = async (credentials: UserCredentials) => {
    try {
        const response = await request.post(AUTH_LOGIN, credentials);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const registerRequest = async (credentials: UserCredentials) => {
    try {
        const response = await request.post(AUTH_REGISTER, credentials);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}