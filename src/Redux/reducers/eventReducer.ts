import {EventActionsEnum, EventReducerActionsType, EventStateReducerType} from "../../Types/EventReducerType";


const initialState: EventStateReducerType = {
    guests: [],
    events: [],
    error: "",
}

export const eventReducer = (state: EventStateReducerType = initialState, action: EventReducerActionsType): EventStateReducerType => {
    switch (action.type) {
        case EventActionsEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventActionsEnum.SET_EVENTS:
            return {...state, events: action.payload}
        case EventActionsEnum.SET_EVENTS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}