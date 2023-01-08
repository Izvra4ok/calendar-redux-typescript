import {UserTypes} from "./UserTypes";
import {EventTypes} from "./EventTypes";

export interface EventStateReducerType {
    guests: UserTypes[],
    events: EventTypes[],
    error: string,
}

export enum EventActionsEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS",
    SET_EVENTS_ERROR = "SET_EVENTS_ERROR",
}

export interface SetGuestsAction {
    type: EventActionsEnum.SET_GUESTS,
    payload: UserTypes[],
}

export interface SetEventsAction {
    type: EventActionsEnum.SET_EVENTS,
    payload: EventTypes[],
}

export interface SetEventErrorAction {
    type: EventActionsEnum.SET_EVENTS_ERROR,
    payload: string
}


export type EventReducerActionsType = SetEventsAction | SetGuestsAction | SetEventErrorAction
