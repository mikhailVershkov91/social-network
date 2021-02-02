import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

type setAuthUserDataActionPayloadType = {
	userId: number | null;
	email: string | null;
	login: string | null;
	isAuth: boolean;
};

type setAuthUserDataActionType = {
	type: typeof SET_USER_DATA;
	payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
): setAuthUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

type getCapthaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS;
	payload: { captchaUrl: string };
};

export const getCapthaUrlSuccess = (
	captchaUrl: string
): getCapthaUrlSuccessActionType => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl },
});

export const getAuthUserData = () => {
	return async (dispatch: any) => {
		let response = await authAPI.me();
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	};
};

export const login = (
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string
) => {
	return async (dispatch: any) => {
		let response = await authAPI.login(email, password, rememberMe, captcha);
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			let message =
				response.data.messages.length > 0
					? response.data.messages[0]
					: "Some error";
			dispatch(stopSubmit("login", { _error: message }));
		}
	};
};

export const getCaptchaUrl = () => {
	return async (dispatch: any) => {
		let response = await securityAPI.getCaptchaUrl();
		let captchaUrl = response.data.url;
		dispatch(getCapthaUrlSuccess(captchaUrl));
	};
};

export const logout = () => {
	return async (dispatch: any) => {
		let response = await authAPI.logout();
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	};
};

export default authReducer;
