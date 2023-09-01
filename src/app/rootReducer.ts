import { combineReducers } from '@reduxjs/toolkit'

import co_system_auth from 'component/security/authorizeProviderSlice';

const rootReducer = combineReducers({
  co_system_auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;