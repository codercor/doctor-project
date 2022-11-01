import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer, { fetchUser } from './User/user.slice'
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

store.dispatch(fetchUser("1"))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;