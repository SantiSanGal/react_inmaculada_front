import axios from 'axios';

export const inmacualdaApi = axios.create({
    baseURL: 'http://localhost:3333/api/v1/',
    headers: {
        Authorization: 'Bearer token'
    }
})