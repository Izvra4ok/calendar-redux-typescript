import {AuthActionCreators} from "./reducers/AuthActionCreators";
import {EventActionCreators} from "./reducers/EventActionCreators";


export const AllActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}
