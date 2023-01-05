import Login from "../Pages/Login";
import Event from "../Pages/Event";
import React from "react";
import ErrorRoutes from "./ErrorRoutes";

export interface IRoute {
    path: string,
    element: React.ComponentType
}

export enum RoutesNames {
    LOGIN = "/login/",
    EVENT = "/*",
    ERROR = "*",
}

export const publicRoutes: IRoute[] = [
    {
        path: RoutesNames.LOGIN,
        element: Login
    },
    {
        path: RoutesNames.ERROR,
        element: ErrorRoutes
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RoutesNames.EVENT,
        element: Event
    },
    {
        path: RoutesNames.ERROR,
        element: ErrorRoutes
    },
]