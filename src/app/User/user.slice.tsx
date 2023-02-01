import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { UserCredentials, UserState, UserInformation, UserBillingDetail, BannerData } from './user.types';
import {
    fetchUserRequest,
    loginRequest,
    registerRequest,
    updateUserRequest,
    updateUserBillingDetailRequest,
    updatePasswordRequest,
    fetchUsersTrainingsRequest,
    adminUpdateBannerRequest,
    getUserOrderHistoryRequest
} from './user.utils';


const initialState: UserState = {
    Id: '',
    IsAdmin: false,
    Token: null,
    IsPatient: false,
    IsAuthenticated: false,
    Email: '',
    ParasutId: null,
    AuthProcess: {
        IsLoading: false,
        IsError: false,
        ErrorMessage: ''
    },
    UserProcess: {
        IsLoading: false,
        IsError: false,
        ErrorMessage: ''
    },
    Information: {
        Id: '',
        Fullname: '',
        Phone: '',
        Country: '',
        City: '',
        District: '',
    },
    BillingDetail: {
        Id: '',
        Name: '',
        Surname: '',
        Email: '',
        IdentityNumber: '',
        RegistrationAddress: '',
        City: '',
        District: '',
        ContactType: '',
        Phone: '',
        TaxOffice: '',
        Country: ''
    },
    UsersTrainings: [],
    UsersTrainingsProcess: {
        IsLoading: false,
    },
    UpdateHomePageProcess: {
        IsLoading: false,
        IsError: false,
    },
    orderHistory: [],
    getOrderHistoryProcess: {
        IsLoading: false,
        IsError: false,
    }
};


export const login = createAsyncThunk(
    'user/login',
    async (credentials: UserCredentials) => {
        return (await loginRequest(credentials));
    });
export const register = createAsyncThunk(
    'user/register',
    async (credentials: UserCredentials) => {
        return (await registerRequest(credentials));
    });

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        return (await fetchUserRequest(id));
    });

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (data: UserInformation, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        return (await updateUserRequest(id, data));
    });

export const adminUpdateBanner = createAsyncThunk(
    'user/adminUpdateBanner',
    async (data: BannerData, thunkApi) => {
        let result = (await adminUpdateBannerRequest(data));
        return result;
    });

export const updateUserBillingDetail = createAsyncThunk(
    'user/updateUserBillingDetail',
    async (data: UserBillingDetail, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        return (await updateUserBillingDetailRequest(id, data));
    });

export const updateUserPassword = createAsyncThunk(
    'user/updateUserPassword',
    async (newPassword: string, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        let result = (await updatePasswordRequest(id, newPassword));
        alert("Şifreniz başarıyla değiştirildi.");
        return result;
    });

export const fetchUsersTrainings = createAsyncThunk(
    'user/fetchUsersTrainings',
    async (_, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        return (await fetchUsersTrainingsRequest(id));
    });

export const getUserOrderHistory = createAsyncThunk(
    'user/getUserOrderHistory',
    async (_, thunkApi) => {
        const state = thunkApi.getState() as RootState;
        const id = state.user.Id;
        return (await getUserOrderHistoryRequest(id));
    });


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state = initialState;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.AuthProcess.IsLoading = true;
            state.AuthProcess.IsError = false;
            state.AuthProcess.ErrorMessage = '';
        }).addCase(login.fulfilled, (state, action) => {
            state.Id = action.payload.Id;
            state.IsAdmin = action.payload.IsAdmin;
            state.Email = action.payload.Email;
            state.Token = action.payload.Token;
            state.Information = action.payload.Information;
            state.BillingDetail = action.payload.BillingDetail;
            state.IsAuthenticated = true;
            return state;
        }).addCase(login.rejected, (state, action) => {
            state.AuthProcess.IsError = true;
            state.AuthProcess.ErrorMessage = "Giriş yapılamadı.Tekrar deneyin";
            state.AuthProcess.IsLoading = false;
            state.IsAuthenticated = false;
            return state;
        }).addCase(register.pending, (state) => {
            state.AuthProcess.IsLoading = true;
            state.AuthProcess.IsError = false;
            state.AuthProcess.ErrorMessage = '';
        }).addCase(register.fulfilled, (state, action) => {
            state.Id = action.payload.Id;
            state.IsAdmin = action.payload.IsAdmin;
            state.Token = action.payload.Token;
            state.Email = action.payload.Email;
            state.Information = action.payload.Information;
            state.BillingDetail = action.payload.BillingDetail;
            state.IsAuthenticated = true;
        }).addCase(register.rejected, (state, action) => {
            state.AuthProcess.IsError = true;
            state.AuthProcess.ErrorMessage = "Kayıt olunamadı.Eposta adresi kullanımda olabilir.";
            state.AuthProcess.IsLoading = false;
            state.IsAuthenticated = false;
            return state;
        }).addCase(fetchUser.pending, (state) => {
            state.UserProcess.IsLoading = true;
            state.UserProcess.IsError = false;
            state.UserProcess.ErrorMessage = '';
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.Email = action.payload.Email;
            console.log("fetchUser payload", action.payload);
            state.IsPatient = action.payload.IsPatient;
            state.ParasutId = action.payload.ParasutId;
            state.Information = action.payload.Information;
            console.log("fetchUser Information", action.payload.Information);
            state.BillingDetail = action.payload.BillingDetail;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.UserProcess.IsError = true;
            state.UserProcess.ErrorMessage = "Kullanıcı bilgileri alınamadı.";
            state.UserProcess.IsLoading = false;

        }).addCase(updateUser.pending, (state) => {
            state.UserProcess.IsLoading = true;
            state.UserProcess.IsError = false;
            state.UserProcess.ErrorMessage = '';
        }).addCase(updateUser.fulfilled, (state, action) => {
            state.Information = {
                Id: action.payload.Id,
                Fullname: action.payload.Fullname,
                Phone: action.payload.Phone,
                Country: action.payload.Country,
                City: action.payload.City,
                District: action.payload.District,
                BirthDate: action.payload.BirthDate,
                Gender: action.payload.Gender
            };
            state.UserProcess.IsLoading = false;
            state.UserProcess.IsError = false;
            return state;
        }).addCase(updateUser.rejected, (state, action) => {
            state.UserProcess.IsError = true;
            state.UserProcess.ErrorMessage = "Kullanıcı bilgileri güncellenemedi.";
            state.UserProcess.IsLoading = false;
        }).addCase(updateUserBillingDetail.pending, (state) => {
        })
            .addCase(updateUserBillingDetail.fulfilled, (state, action) => {
            }).addCase(updateUserBillingDetail.rejected, (state, action) => {
            })
            .addCase(updateUserPassword.pending, (state) => {
                state.UserProcess.IsLoading = true;
                state.UserProcess.IsError = false;
                state.UserProcess.ErrorMessage = '';
            })
            .addCase(updateUserPassword.fulfilled, (state, action) => {
                state.UserProcess.IsLoading = false;
                state.UserProcess.IsError = false;
                state.UserProcess.ErrorMessage = '';
            })
            .addCase(updateUserPassword.rejected, (state, action) => {
                state.UserProcess.IsError = true;
                state.UserProcess.ErrorMessage = "Şifre güncellenemedi.";
                state.UserProcess.IsLoading = false;
            }).addCase(fetchUsersTrainings.pending, (state) => {
                state.UsersTrainingsProcess.IsLoading = true;
            }).addCase(fetchUsersTrainings.fulfilled, (state, action) => {
                state.UsersTrainingsProcess.IsLoading = false;
                state.UsersTrainings = action.payload;
            }).addCase(fetchUsersTrainings.rejected, (state, action) => {
                state.UsersTrainingsProcess.IsLoading = false;
            }).addCase(adminUpdateBanner.pending, (state) => {
                state.UpdateHomePageProcess.IsLoading = true
                state.UpdateHomePageProcess.IsError = false;
            }).addCase(adminUpdateBanner.fulfilled, (state, action) => {
                state.UpdateHomePageProcess.IsLoading = false;
                state.UpdateHomePageProcess.IsError = false;
            }).addCase(adminUpdateBanner.rejected, (state, action) => {
                state.UpdateHomePageProcess.IsLoading = false;
                state.UpdateHomePageProcess.IsError = true;
            }).addCase(getUserOrderHistory.pending, (state) => {
                state.getOrderHistoryProcess.IsLoading = true;
            }).addCase(getUserOrderHistory.fulfilled, (state, action) => {
                state.getOrderHistoryProcess.IsLoading = false;
                state.getOrderHistoryProcess.IsError = false;
                state.orderHistory = action.payload;
            }).addCase(getUserOrderHistory.rejected, (state, action) => {
                state.getOrderHistoryProcess.IsLoading = false;
                state.getOrderHistoryProcess.IsError = true;
            });


    },
});

export const {
    logout
} = userSlice.actions;

export const selectUser = (state: RootState) => state?.user;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//     (amount: number): AppThunk =>
//         (dispatch, getState) => {
//             const currentValue = selectCount(getState());
//             if (currentValue % 2 === 1) {
//                 dispatch(incrementByAmount(amount));
//             }
//         };

export default userSlice.reducer;