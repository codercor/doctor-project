import request, { AUTH_LOGIN, AUTH_REGISTER, USER_BILLING, USER_INFORMATION, USER_WITH_ID, TRAININGS_WITH_USER_ID } from '@config'
import { AxiosError } from 'axios';
import { UserBillingDetail, UserCredentials, UserInformation } from './user.types';


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
export const fetchUserRequest = async (id: string) => {
    try {
        const response = await request.get(
            USER_WITH_ID.replace(':UserId', id),
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}



export const updateUserRequest = async (id: string, data: UserInformation) => {
    try {
        const response = await request.put(
            USER_INFORMATION.replace(':UserId', id),
            data
        );
        console.log("updateUserRequest", response.data);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}


export const updateUserBillingDetailRequest = async (id: string, data: UserBillingDetail) => {
    try {
        const response = await request.put(
            USER_BILLING.replace(':UserId', id),
            data
        );
        console.log("update BillingD request", response.data);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const updatePasswordRequest = async (id: string, newPassword: string) => {
    try {
        const response = await request.put(
            USER_WITH_ID.replace(':UserId', id),
            { Password: newPassword }
        );
        console.log("update Password Request", response.data);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const fetchUsersTrainingsRequest = async (id: string) => {
    try {
        const response = await request.get(
            TRAININGS_WITH_USER_ID.replace(':UserId', id),
        );
        console.log("users trainings data", response.data);
        let filtered = response.data.map((item: any) => item.Education);
        return filtered;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}