import axios from 'axios';
import { ResponseModel, userModel } from '../models/ResponseModel';

export const api = {
    getUsersList: () => {
        return axios.get<ResponseModel>('https://dummyjson.com/users')
    },
    getUserById: (id: string | undefined) => {
        return axios.get<userModel>(`https://dummyjson.com/users/${id}`)
    }
}