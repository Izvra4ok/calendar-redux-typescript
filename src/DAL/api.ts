import axios, {AxiosResponse} from "axios";
import {UserTypes} from "../Types/UserTypes";

export default class UserService {
    static async getUser(): Promise<AxiosResponse<UserTypes[]>> {
        return axios.get<UserTypes[]>("../user.json")
    }

}