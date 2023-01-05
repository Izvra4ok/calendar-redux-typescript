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

// import {UserTypes} from "./UserTypes";
//
// export interface AuthReducerTypes {
//     isAuth: boolean,
//     user: UserTypes,
//     isLoading: boolean,
//     error: string,
// }
//
// export enum AuthActionEnum {
//     SET_AUTH = "SET_AUTH",
//     SET_ERROR = "SET_ERROR",
//     SET_USER = "SET_USER",
//     SET_IS_LOADING = "SET_IS_LOADING",
// }
//
// export interface SetAuthActionType {
//     type: AuthActionEnum.SET_AUTH;
//     payload: boolean;
// }
//
// export interface SetErrorActionType {
//     type: AuthActionEnum.SET_ERROR;
//     payload: string;
// }
//
// export interface SetUserActionType {
//     type: AuthActionEnum.SET_USER;
//     payload: UserTypes;
// }
//
// export interface SetIsLoadingActionType {
//     type: AuthActionEnum.SET_IS_LOADING;
//     payload: boolean;
// }
//
// export type AuthActionType =
//     SetAuthActionType |
//     SetUserActionType |
//     SetErrorActionType |
//     SetIsLoadingActionType