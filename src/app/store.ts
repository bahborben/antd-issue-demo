import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './rootReducer'

const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;
export default store;

// hooks
export function useAppDispatch(): AppDispatch{
    return store.dispatch;
}