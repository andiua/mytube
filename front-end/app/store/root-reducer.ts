import { combineReducers } from 'redux';
import { authSlice } from './auth/auth.slice';
import { reducer as  toastrReducer} from 'react-redux-toastr';

export const rootReducer = combineReducers({
	auth: authSlice.reducer,
	toastr: toastrReducer //add to the end for properly work
});