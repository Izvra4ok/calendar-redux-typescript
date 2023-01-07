import {
    AuthActionsEnum,
    FetchUserErrorType,
    FetchUserSuccessType,
    FetchUserType,
    SetAuthActionType
} from "../../Types/AuthReducerTypes";
import {UserTypes} from "../../Types/UserTypes";
import {AppDispatchType} from "../store";
import axios from "axios";

export const AuthActionCreators = {
    setIsAuth: (auth: boolean): SetAuthActionType => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),

    fetchUserSuccess: (user: UserTypes): FetchUserSuccessType => ({type: AuthActionsEnum.FETCH_USER_SUCCESS, payload: user, isLoading: false,}),

    fetchUserIsLoading: (payload: boolean): FetchUserType => ({type: AuthActionsEnum.FETCH_USER, isLoading: payload}),

    fetchUserError: (payload: string): FetchUserErrorType => ({type: AuthActionsEnum.FETCH_USER_ERROR, payload}),

    login: (username: string, password: string) => async (dispatch: AppDispatchType) => {
        try {
            dispatch(AuthActionCreators.fetchUserIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<UserTypes[]>("../user.json")
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.fetchUserSuccess(mockUser));
                } else {
                    dispatch(AuthActionCreators.fetchUserError("Incorrect data"));
                    dispatch(AuthActionCreators.fetchUserIsLoading(false));
                }
                dispatch(AuthActionCreators.fetchUserIsLoading(false));
            }, 1000)

        } catch (e) {
            dispatch(AuthActionCreators.fetchUserError("Sorry,error"));
        }
    },
    logout: () => async (dispatch: AppDispatchType) => {

        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthActionCreators.fetchUserSuccess({} as UserTypes))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}
