import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {eventReducer} from "./reducers/eventReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;