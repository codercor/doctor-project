import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { TrainingDataType, TrainingBranchProps, TrainingBranchType } from './training.types';
import { createTrainingRequest, uploadTrainingDocumentsRequest, uploadTrainingImageRequest, getAdminTrainingsRequest, getTrainingByIdRequest, deleteTrainingByIdRequest as _deleteTrainingByIdRequest, editTrainingRequest } from './training.utils';
import Router from 'next/router'

export type TrainingSliceProps = {
    createTrainingProcess: {
        loading: boolean,
        error: null | string | undefined
        loadingMessage: string
    },
    deleteTrainingProcess: {
        loading: boolean,
        error: null | string | undefined
        loadingMessage: string
    },
    editTrainingProcess: {
        loading: boolean,
        error: null | string | undefined
        loadingMessage: string
    },
    adminTrainings: TrainingDataType[],
    oneTraining: TrainingDataType | null
}

const initialState: TrainingSliceProps = {
    createTrainingProcess: {
        loading: false,
        error: null,
        loadingMessage: ''
    },
    deleteTrainingProcess: {
        loading: false,
        error: null,
        loadingMessage: ''
    },
    editTrainingProcess: {
        loading: false,
        error: null,
        loadingMessage: ''
    },
    adminTrainings: [],
    oneTraining: null
};



export const createTraining = createAsyncThunk(
    'training/createTraining',
    async (data: {
        trainingData: TrainingDataType,
        image: File | null,
        documents: FileList | null
    }, thunkApi) => {
        thunkApi.dispatch(setLoadingMessage('Eğitim oluşturuluyor...'));
        let createdTraining = (await createTrainingRequest(data.trainingData));
        console.log("createdTraining", createdTraining);
        const { Id } = createdTraining;
        //upload Images 
        console.log("data.image", data.image);

        if (data.image) {
            thunkApi.dispatch(setLoadingMessage('Eğitim resmi yükleniyor...'));
            await uploadTrainingImageRequest(Id, data.image);
        }
        //upload Documents
        if (data.documents) {
            thunkApi.dispatch(setLoadingMessage('Eğitim belgeleri yükleniyor...'));
            await uploadTrainingDocumentsRequest(Id, data.documents);
        }

        return createdTraining;
    });

export const editTraining = createAsyncThunk(
    'training/editTraining',
    async (data: {
        trainingData: TrainingDataType,
        image: File | null,
        documents: FileList | null,
        Id: string
    }, thunkApi) => {
        thunkApi.dispatch(setEditLoadingMessage('Eğitim güncelleniyor...'));
        let editedTraining = (await editTrainingRequest(data.trainingData, data.Id));
        console.log("editedTraining", editedTraining);
        //upload Images 
        console.log("data.image", data.image);

        if (data.image) {
            thunkApi.dispatch(setEditLoadingMessage('Eğitim resmi güncelleniyor...'));
            await uploadTrainingImageRequest(data.Id, data.image);
        }
        //upload Documents
        if (data?.documents) {
            thunkApi.dispatch(setEditLoadingMessage('Eğitim belgeleri güncelleniyor...'));
            await uploadTrainingDocumentsRequest(data.Id, data.documents);
        }

        return editedTraining;
    });


export const getAdminTrainings = createAsyncThunk(
    'training/getAdminTrainings',
    async (page: number, thunkApi) => {
        thunkApi.dispatch(setLoadingMessage('Eğitimler yükleniyor...'));
        const trainings = await getAdminTrainingsRequest(page);
        return trainings;
    })
export const getTrainingById = createAsyncThunk(
    'training/getTrainingById',
    async (id: string, thunkApi) => {
        thunkApi.dispatch(setLoadingMessage('Eğitim yükleniyor...'));
        const training = await getTrainingByIdRequest(id);
        return training;
    })

export const deleteTrainingById = createAsyncThunk(
    'training/deleteTrainingById',
    async (id: string, thunkApi) => {
        thunkApi.dispatch(setLoadingMessage('Eğitim siliniyor...'));
        const training = await _deleteTrainingByIdRequest(id);
        thunkApi.dispatch(getAdminTrainings(1));
        return training;
    })

export const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers: {
        setLoadingMessage: (state, action: PayloadAction<string>) => {
            state.createTrainingProcess.loadingMessage = action.payload;
        },
        setEditLoadingMessage: (state, action: PayloadAction<string>) => {
            state.editTrainingProcess.loadingMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTraining.pending, (state) => {
                state.createTrainingProcess.loading = true;
            })
            .addCase(createTraining.fulfilled, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = null;
                state.createTrainingProcess.loadingMessage = '';
                Router.push('/dashboard/trainings');
            })
            .addCase(createTraining.rejected, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = action.error.message;
                state.createTrainingProcess.loadingMessage = '';
            }).addCase(getAdminTrainings.pending, (state) => {
                state.createTrainingProcess.loading = true;
            }
            ).addCase(getAdminTrainings.fulfilled, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = null;
                state.createTrainingProcess.loadingMessage = '';
                console.log("action.payload", action.payload);

                state.adminTrainings = action.payload;
            }
            ).addCase(getAdminTrainings.rejected, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = action.error.message;
                state.createTrainingProcess.loadingMessage = '';
            }).addCase(getTrainingById.pending, (state) => {
                state.createTrainingProcess.loading = true;
            }).addCase(getTrainingById.fulfilled, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = null;
                state.createTrainingProcess.loadingMessage = '';
                state.oneTraining = action.payload;
            }).addCase(getTrainingById.rejected, (state, action) => {
                state.createTrainingProcess.loading = false;
                state.createTrainingProcess.error = action.error.message;
                state.createTrainingProcess.loadingMessage = '';
            }).addCase(deleteTrainingById.pending, (state) => {
                state.deleteTrainingProcess.loading = true;
            }).addCase(deleteTrainingById.fulfilled, (state, action) => {
                state.deleteTrainingProcess.loading = false;
                state.deleteTrainingProcess.error = null;
                state.deleteTrainingProcess.loadingMessage = '';
            }).addCase(deleteTrainingById.rejected, (state, action) => {
                state.deleteTrainingProcess.loading = false;
                state.deleteTrainingProcess.error = action.error.message;
                state.deleteTrainingProcess.loadingMessage = '';
            }).addCase(editTraining.pending, (state) => {
                state.editTrainingProcess.loading = true;
            }).addCase(editTraining.fulfilled, (state, action) => {
                state.editTrainingProcess.loading = false;
                state.editTrainingProcess.error = null;
                state.editTrainingProcess.loadingMessage = '';
                Router.push('/dashboard/trainings');
            }).addCase(editTraining.rejected, (state, action) => {
                state.editTrainingProcess.loading = false;
                state.editTrainingProcess.error = action.error.message;
                state.editTrainingProcess.loadingMessage = '';
            })
    },
});

export const { setLoadingMessage, setEditLoadingMessage } = trainingSlice.actions;

export const selectTraining = (state: RootState) => state?.training;

export default trainingSlice.reducer;