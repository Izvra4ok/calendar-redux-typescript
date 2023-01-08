import Login from "../Pages/Login";
import Event from "../Pages/Event";
import React from "react";


export interface IRoute {
    path: string,
    element: React.ComponentType
}

export enum RoutesNames{
    LOGIN = "/login",
    EVENT = "/event",
    START = "*"
}


export const publicRoutes: IRoute[] = [
    {
        path: RoutesNames.LOGIN,
        element: Login
    },
    {
        path: RoutesNames.START,
        element: Login
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RoutesNames.EVENT,
        element: Event
    },
    {
        path: RoutesNames.START,
        element: Event
    },
]