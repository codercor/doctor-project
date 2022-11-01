export const API = `https://doktor-projesi-jg2xw.ondigitalocean.app/api`;

export const AUTH = `${API}/auth`;
export const AUTH_REGISTER = `${AUTH}/register`;
export const AUTH_LOGIN = `${AUTH}/login`;
export const FORGOT_PASSWORD = `${API}/forgot`;
export const FORGOT_PASSWORD_CHECK_HASH = `${FORGOT_PASSWORD}/hash`;
export const FORGOT_PASSWORD_RESET = `${FORGOT_PASSWORD}/reset`;

export const BANNER = `${API}/banner`;

export const USER = `${API}/user`;
export const USER_WITH_ID = `${USER}/:UserId`;

export const USER_BILLING = `${USER}/billing/:UserId`;

export const USER_INFORMATION = `${USER}/information/:UserId`;
