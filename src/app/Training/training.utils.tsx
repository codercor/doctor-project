import request, { TRAINING, TRAINING_IMAGE, TRAINING_DOCUMENTS,ADMIN_TRAINING } from '@config'
import { TrainingDataType } from './training.types';
import toast from 'react-hot-toast';

export const createTrainingRequest = async (trainingData: TrainingDataType) => {
    const _toast = toast.loading('Eğitim oluşturuluyor...');
    try {
        const response = await request.post(TRAINING, trainingData);
        toast.success('Eğitim oluşturuldu.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Eğitim oluşturulamadı.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}
export const editTrainingRequest = async (trainingData: TrainingDataType, id: string) => {
    const _toast = toast.loading('Eğitim güncelleniyor...');
    try {
        const response = await request.put(TRAINING + '/' + id, trainingData);
        toast.success('Eğitim güncellendi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Eğitim güncellenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const uploadTrainingImageRequest = async (trainingId: string, image: File) => {
    const _toast = toast.loading('Eğitim resmi yükleniyor...');
    try {

        const formData = new FormData();
        formData.append('Image', image);
        formData.append("EducationId", trainingId);
        const response = await request.post(TRAINING_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        });
        toast.success('Eğitim resmi yüklendi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Eğitim resmi yüklenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const uploadTrainingDocumentsRequest = async (trainingId: string, documents: FileList) => {
    const _toast = toast.loading('Eğitim belgeleri yükleniyor...');
    try {
        const formData = new FormData();
        for (let i = 0; i < documents.length; i++) {
            formData.append('Documents[]', documents[i]);
        }
        formData.append("EducationId", trainingId);
        const response = await request.post(TRAINING_DOCUMENTS, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        });
        toast.success('Eğitim belgeleri yüklendi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Eğitim belgeleri yüklenemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const getAdminTrainingsRequest = async (page: number) => {
    try {
        const response = await request.get(`${ADMIN_TRAINING}?page=${page}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const getTrainingByIdRequest = async (id: string) => {
    try {
        console.log("training id", id, `${TRAINING}/${id}`);

        const response = await request.get(`${TRAINING}/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const deleteTrainingByIdRequest = async (id: string) => {
    const _toast = toast.loading('Eğitim siliniyor...');
    try {
        const response = await request.delete(`${TRAINING}/${id}`);
        toast.success('Eğitim silindi.', { id: _toast });
        return response.data;
    } catch (err: any) {
        toast.error('Eğitim silinemedi.', { id: _toast });
        throw new Error(err.response.data.message)
    }
}

export const getPublicTrainingsRequest = async (page: number) => {
    try {
        const response = await request.get(`${TRAINING}?page=${page}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}