import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';



export interface IUser {
  id?: string,
  employeeId?: string,
  employeeCode?: string,
  employeeName?: string,
  account?: string,
  name?: string,
  enable?: boolean,  
}

interface IAuthenticateState {
    userInfo: IUser,    
}

const initialState : IAuthenticateState = {
    userInfo: {}
}

const authorizeProviderSlice = createSlice({
    name: 'component.system.authorizeProviderSlice',
    initialState,
    reducers: {
      refreshUserInfo(state, action: PayloadAction<IUser>) {
        state.userInfo = action.payload;
      },
    }
});

export const loadCurrentUserInfo = (): AppThunk => async (dispatch) => {
  dispatch(authorizeProviderSlice.actions.refreshUserInfo({
    id: "1",
    name: "Rick Murphy",
    enable: true,
    account: "user01",
    employeeId: "100",
    employeeCode: "EC011230",
    employeeName: "Rick Murphy",
  }));
}

export default authorizeProviderSlice.reducer;