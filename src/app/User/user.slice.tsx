import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';


export interface UserState {
    Id: string;
    Role: string;
    IsAdmin: boolean;
    Information: {
        Id: string;
        FullName: string;
        Phone: string;
        Address: string;
    };
    BillingDetail: {
        Id: string;
        Name: string;
        Surname: string;
        Email: string;
        IdentityNumber: string;
        RegistrationAddress: string;
        City: string;
        Country: string;
    }
}

const initialState: UserState = {
    Id: '',
    Role: '',
    IsAdmin: false,
    Information: {
        Id: '',
        FullName: '',
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


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId:string,thunkAPI) => {
        console.log(thunkAPI.getState());
        return 1;
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    //extraReducers: (builder) => { },
});

//export const { } = userSlice.actions;

export const selectCount = (state: RootState) => state.user;

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