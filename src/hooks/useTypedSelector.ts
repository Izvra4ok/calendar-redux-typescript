import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, RootReducerType} from "../Redux/store";


export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export const useAppDispatch: () => AppDispatchType = useDispatch;