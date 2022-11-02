import axios from 'axios';
export const API = `https://doktor-projesi-jg2xw.ondigitalocean.app/api`;

export const AUTH = `/auth`;
export const AUTH_REGISTER = `${AUTH}/register`;
export const AUTH_LOGIN = `${AUTH}/login`;
export const FORGOT_PASSWORD = `/forgot`;
export const FORGOT_PASSWORD_CHECK_HASH = `${FORGOT_PASSWORD}/hash`;
export const FORGOT_PASSWORD_RESET = `${FORGOT_PASSWORD}/reset`;

export const BANNER = `/banner`;

export const USER = `/user`;
export const USER_WITH_ID = `${USER}/:UserId`;

export const USER_BILLING = `${USER}/billing/:UserId`;

export const USER_INFORMATION = `${USER}/information/:UserId`;


const request = axios.create({
    baseURL: API,
});
request.interceptors.request.use(
    (config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

export default request;
