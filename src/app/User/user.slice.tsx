import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { UserCredentials, UserState } from './user.types';
import { loginRequest, registerRequest } from './user.utils';




const initialState: UserState = {
    Id: '',
    IsAdmin: false,
    Token: null,
    IsAuthenticated: false,
    Email: '',
    AuthProcess: {
        IsLoading: false,
        IsError: false,
        ErrorMessage: ''
    },
    Information: {
        Id: '',
        Fullname: '',
        Phone: '',
        Address: ''
    },
    BillingDetail: {
        Id: '',
        Name: '',
        Surname: '',
        Email: '',
        IdentityNumber: '',
        RegistrationAddress: '',
        City: '',
        Country: ''
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
        builder.
            addCase(login.pending, (state) => {
                state.AuthProcess.IsLoading = true;
                state.AuthProcess.IsError = false;
                state.AuthProcess.ErrorMessage = '';
            }).
            addCase(login.fulfilled, (state, action) => {
                state.Id = action.payload.Id;
                state.IsAdmin = action.payload.IsAdmin;
                state.Email = action.payload.Email;
                state.Token = action.payload.Token;
                state.Information = action.payload.Information;
                state.BillingDetail = action.payload.BillingDetail;
                state.IsAuthenticated = true;
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
            });
    },
});

export const {
    logout
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

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