import { store } from '@app/store';
import axios from 'axios';
export const API = `https://doktor-projesi-jg2xw.ondigitalocean.app/api`;

export const AUTH = `/auth`;
export const AUTH_REGISTER = `${AUTH}/register`;
export const AUTH_LOGIN = `${AUTH}/login`;
export const FORGOT_PASSWORD = `/forgot`;
export const FORGOT_PASSWORD_CHECK_HASH = `${FORGOT_PASSWORD}/hash`;
export const FORGOT_PASSWORD_RESET = `${FORGOT_PASSWORD}/reset`;

export const BANNER = `/banner`;
export const PRESS = `/press`;

export const USER = `/user`;
export const USER_WITH_ID = `${USER}/:UserId`;

export const USER_BILLING = `${USER}/billing/:UserId`;

export const USER_INFORMATION = `${USER}/information/:UserId`;

export const TRAINING = `/education`;
export const ADMIN_TRAINING = `/admin/educations`;
export const TRAINING_IMAGE = `${TRAINING}/image`;
export const TRAINING_DOCUMENTS = `${TRAINING}/document`;
export const CHAT_LINES = `/chat`
export const CHAT_LINE_WITH_ID = `/chat/:lineId`
export const PAYMENT = '/purchase'
export const PAYMENT_FREE_TRAINING = `${PAYMENT}/free`

export const ORDER_HISTORY_WITH_USER_ID = `${PAYMENT}/:UserId`;

export const STATS = `/admin/statistics`

export const ATTACH_VIDEO_FOLDER = `${TRAINING}/video`


//TODO change this url and util function
export const TRAININGS_WITH_USER_ID = `${PAYMENT}/:UserId`;

export const request = axios.create({
    baseURL: API,
});
request.interceptors.request.use(
    (config: any) => {       // tslint:disable-next-line
        store.getState().user.Token ? (config.headers.Authorization = `Bearer ${store.getState().user.Token}`) : null;
        return config;
    }, (error) => {
        console.log("Error", error);
        return Promise.reject(error);
    });

export default request;
