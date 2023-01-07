import {UserTypes} from "./UserTypes";

export interface AuthReducerTypes {
    isAuth: boolean,
    user: UserTypes,
    isLoading: boolean,
    error: string,
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export interface SetAuthActionType {
    type: AuthActionsEnum.SET_AUTH,
    payload: boolean,
}

export interface FetchUserType {
    type: AuthActionsEnum.FETCH_USER,
    isLoading: boolean,
}

export interface FetchUserSuccessType {
    type: AuthActionsEnum.FETCH_USER_SUCCESS,
    payload: UserTypes,
    isLoading: boolean,
}

export interface FetchUserErrorType {
    type: AuthActionsEnum.FETCH_USER_ERROR,
    payload: string,
}

export type AuthActionTypes = SetAuthActionType | FetchUserType | FetchUserSuccessType | FetchUserErrorType;

