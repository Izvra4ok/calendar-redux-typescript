import {AuthActionsEnum, AuthActionTypes, AuthReducerTypes} from "../../Types/AuthTypes";
import {UserTypes} from "../../Types/UserTypes";

const initialState: AuthReducerTypes = {
    isAuth: false,
    isLoading: false,
    error: "",
    user: {} as UserTypes,
}

export const authReducer = (state: AuthReducerTypes = initialState, action: AuthActionTypes): AuthReducerTypes => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.FETCH_USER:
            return {...state, isLoading: true,}
        case AuthActionsEnum.FETCH_USER_SUCCESS:
            return {...state, user: action.payload, isLoading: false,}
        case AuthActionsEnum.FETCH_USER_ERROR:
            return {...state, error: action.payload,}
        default:
            return state
    }
};