import request, {
    AUTH_LOGIN, AUTH_REGISTER, USER_BILLING,
    USER_INFORMATION, USER_WITH_ID, TRAININGS_WITH_USER_ID,
    BANNER, PRESS, FORGOT_PASSWORD, FORGOT_PASSWORD_CHECK_HASH,
    FORGOT_PASSWORD_RESET, PAYMENT, USER, STATS, ORDER_HISTORY_WITH_USER_ID,
    ATTACH_VIDEO_FOLDER
} from '@config'
import { AxiosError } from 'axios';
import { BannerData, UserBillingDetail, UserCredentials, UserInformation } from './user.types';
import toast from 'react-hot-toast';

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
    const _toast = toast.loading('Kullanıcı bilgileri güncelleniyor...');
    try {
        const response = await request.put(
            USER_INFORMATION.replace(':UserId', id),
            data
        );
        console.log("updateUserRequest", response.data);
        toast.success('Kullanıcı bilgileri güncellendi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Kullanıcı bilgileri güncellenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const updateUserBillingDetailRequest = async (id: string, data: UserBillingDetail) => {
    const _toast = toast.loading('Kullanıcı fatura bilgileri güncelleniyor...');
    try {
        const response = await request.put(
            USER_BILLING.replace(':UserId', id),
            data
        );
        toast.success('Kullanıcı fatura bilgileri güncellendi.', { id: _toast });
        console.log("update BillingD request", response.data);
        return response.data;
    } catch (err: any) {
        toast.error('Kullanıcı fatura bilgileri güncellenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const updatePasswordRequest = async (id: string, newPassword: string) => {
    const _toast = toast.loading('Kullanıcı şifresi güncelleniyor...');
    try {
        const response = await request.put(
            USER_WITH_ID.replace(':UserId', id),
            { Password: newPassword }
        );
        console.log("update Password Request", response.data);
        toast.success('Kullanıcı şifresi güncellendi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Kullanıcı şifresi güncellenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const fetchUsersTrainingsRequest = async (id: string) => {
    const _toast = toast.loading('Kullanıcı eğitimleri getiriliyor...');
    try {
        const response = await request.get(
            TRAININGS_WITH_USER_ID.replace(':UserId', id),
        );
        console.log("users trainings data", response.data);
        toast.success('Kullanıcı eğitimleri getirildi.', { id: _toast });
        let filtered = response.data.data.map((item: any) => item.Education);
        return filtered;
    } catch (err: any) {
        toast.error('Kullanıcı eğitimleri getirilemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}
export const adminUpdateBannerRequest = async (data: BannerData) => {
    try {
        console.log("adminUpdateBannerRequest", data);

        const formData = new FormData();
        formData.append("Image", data.Image);
        formData.append("Title", data.Title);
        formData.append("Description", data.Description);
        const response = await request.post(BANNER + `/${data.Id}?_method=PUT`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        });
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const getBanner = async () => {
    try {
        const response = await request.get(
            BANNER,
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const getPresses = async () => {
    try {
        const response = await request.get(
            PRESS,
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const createPress = async (data: any) => {
    const form = new FormData();
    form.append("Image", data.Image);
    form.append("Title", data.Title);
    form.append("Description", data.Description);
    let _toast = toast.loading('Basın bülteni oluşturuluyor...', { duration: 20000 });
    try {
        const response = await request.post(
            PRESS,
            data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form
        }
        );
        toast.success('Basın bülteni oluşturuldu.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Basın bülteni oluşturulamadı.', { id: _toast });
        throw new Error(err.response.data.message)

    }
}

export const deletePress = async (id: string) => {
    let _toast = toast.loading('Basın bülteni siliniyor...');
    try {
        const response = await request.delete(PRESS + '/' + id);
        toast.success('Basın bülteni silindi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Basın bülteni silinemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const forgotPasswordRequest = async (email: string) => {
    const _toast = toast.loading('Şifre sıfırlama maili gönderiliyor...');
    try {
        const response = await request.post(
            FORGOT_PASSWORD,
            { Email: email }
        );
        toast.success('Şifre sıfırlama maili gönderildi.', { id: _toast });

        return response.data;
    } catch (err: any) {
        toast.error('Şifre sıfırlama maili gönderilemedi.', { id: _toast });
    }
}

export const getUserIdForResetPassword = async (UserId: string, Hash: string) => {
    const _toast = toast.loading('Şifre sıfırlama bilgileri getiriliyor...');
    try {
        const response = await request.post(
            FORGOT_PASSWORD_CHECK_HASH,
            { UserId: UserId, Hash: Hash }
        );
        toast.success('Şifre sıfırlama bilgileri getirildi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Şifre sıfırlama bilgileri getirilemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const resetPasswordRequest = async (UserId: string, Hash: string, Password: string) => {
    let _toast = toast.loading('Şifre sıfırlanıyor...');
    try {
        const response = await request.post(
            FORGOT_PASSWORD_RESET,
            {
                UserId,
                Hash,
                Password
            }
        );
        toast.success('Şifre sıfırlandı.', { id: _toast });
        _toast = toast.loading('Giriş ekranına yönlendiriliyorsunuz...');
        setTimeout(() => {
            toast.success('Giriş ekranına yönlendirildiniz.', { id: _toast });
            window.location.href = '/auth/login';
        }, 2000);
        return response.data;
    } catch (err: any) {
        toast.error('Şifre sıfırlanamadı.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const adminGetLastSalesRequest = async (page: number) => {
    try {
        const response = await request.get(
            PAYMENT + '?page=' + page
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const adminGetUsers = async () => {
    try {
        const response = await request.get(
            USER
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const getAdminStats = async () => {
    try {
        const response = await request.get(
            STATS
        );
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}


export const getUserOrderHistoryRequest = async (UserId: string) => {
    try {
        const response = await request.get(
            ORDER_HISTORY_WITH_USER_ID.replace(':UserId', UserId)
        );
        return response.data.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}
export const attachDriveItemToTraining = async (
    TrainingId: string,
    DriveItemId: string
) => {
    let _toast = toast.loading("Eşleştirme yapılıyor");
    try {
        const response = await request.post(
            ATTACH_VIDEO_FOLDER,
            {
                FileId: DriveItemId,
                EducationId: TrainingId
            }
        );
        toast.success("Eşleştirme yapıldı", { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error("Eşleştirme yapılamadı", { id: _toast });
        throw new Error(err.response.data.message)
    }
}