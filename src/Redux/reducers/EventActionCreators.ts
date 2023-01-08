import {EventActionsEnum, SetEventsAction, SetGuestsAction} from "../../Types/EventReducerType";
import {EventTypes} from "../../Types/EventTypes";
import {UserTypes} from "../../Types/UserTypes";
import {AppDispatchType} from "../store";
import UserService from "../../DAL/api";
import {AuthActionCreators} from "./AuthActionCreators";


export const EventActionCreators = {
    setGuests: (payload: UserTypes[]): SetGuestsAction => ({
        type: EventActionsEnum.SET_GUESTS, payload
    }),
    setEvents: (payload: EventTypes[]): SetEventsAction => ({
        type: EventActionsEnum.SET_EVENTS, payload
    }),
    setEventsError: (payload: string): any => ({
        type: EventActionsEnum.SET_EVENTS_ERROR, payload
    }),
    fetchGuests: () => async (dispatch: AppDispatchType) => {
        try {
            const response = await UserService.getUser();
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (e) {
            dispatch(EventActionCreators.setEventsError("Error fetch users"))
        }
    },
    createEvent: (event: EventTypes) => async (dispatch: AppDispatchType) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            let json = JSON.parse(events) as EventTypes[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem("events", JSON.stringify(json));
        } catch (e) {
            dispatch(EventActionCreators.setEventsError("Error create event"))
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatchType) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            let json = JSON.parse(events) as EventTypes[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            dispatch(EventActionCreators.setEventsError("Error fetch event"))
        }

    }
}



