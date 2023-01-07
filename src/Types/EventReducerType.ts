import {UserTypes} from "./UserTypes";
import {EventTypes} from "./EventTypes";

export interface EventStateReducerType {
    guests: UserTypes[],
    events: EventTypes[]
}

export enum EventActionsEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}

export interface SetGuestsAction {
    type: EventActionsEnum.SET_GUESTS,
    payload: UserTypes[],
}

export interface SetEventsAction {
    type: EventActionsEnum.SET_EVENTS,
    payload: EventTypes[],
}


export type EventReducerActionsType = SetEventsAction | SetGuestsAction
