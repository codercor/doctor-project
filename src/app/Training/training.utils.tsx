import request, { TRAINING, TRAINING_IMAGE, TRAINING_DOCUMENTS } from '@config'
import { TrainingDataType } from './training.types';


export const createTrainingRequest = async (trainingData: TrainingDataType) => {
    try {
        const response = await request.post(TRAINING, trainingData);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}
export const editTrainingRequest = async (trainingData: TrainingDataType, id: string) => {
    try {
        const response = await request.put(TRAINING + '/' + id, trainingData);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const uploadTrainingImageRequest = async (trainingId: string, image: File) => {
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
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const uploadTrainingDocumentsRequest = async (trainingId: string, documents: FileList) => {
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
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

export const getAdminTrainingsRequest = async (page: number) => {
    try {
        const response = await request.get(`${TRAINING}?page=${page}`);
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
    try {
        const response = await request.delete(`${TRAINING}/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}
