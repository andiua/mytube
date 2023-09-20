import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';
import { IAuthData } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/api.utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Реєстрація', 'Успішно виконана');
			return response;
		} catch (e) {
			toastError(e);
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Вхід в систему', 'Успішно виконано');
			return response;
		} catch (e) {
			toastError(e);
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	return {};
});
