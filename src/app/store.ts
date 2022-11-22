
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from './User/user.slice'
import trainingReducer from './Training/training.slice'
import paymentReducer from './Payment/payment.slice'
import { getPersistConfig } from 'redux-deep-persist';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist"
const rootReducer = combineReducers({
    user: userReducer,
    training: trainingReducer,
    payment: paymentReducer
})
const persistConfig = getPersistConfig({
    key: "root",
    version: 1,
    storage,
    whitelist: ["user"],
    rootReducer
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            // thunk: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;






