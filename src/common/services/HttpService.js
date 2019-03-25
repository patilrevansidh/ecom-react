import axios from 'axios';
import { URLS } from '../constants/stringConstants';
const axiosInstance = axios.create({
    baseURL: URLS.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'user-key': localStorage.getItem('accessToken'),
    },
})

export class HTTPService {
    static axiosInstance = axios.create({
        baseURL: URLS.API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'user-key': localStorage.getItem('accessToken'),
        },
    })

    static get(url, params) {
        return new Promise((resolve, reject) => {
            HTTPService.axiosInstance.get(url, params)
                .then(response => {
                    if (response.status === 200)
                        resolve(response.data)
                })
                .catch((error) => reject(error))
        })
    }

    static put(url, body) {
        return new Promise((resolve, reject) => {
            HTTPService.axiosInstance.put(url, body)
                .then(response => {
                    if (response.status === 200)
                        resolve(response.data)
                })
                .catch((error) => reject(error))
        })
    }

    static post(url, body) {
        return new Promise((resolve, reject) => {
            HTTPService.axiosInstance.post(url, body)
                .then(response => {
                    if (response.status === 200) {
                        saveToken(response);
                        resolve(response.data)
                    }
                })
                .catch((error) => reject(error))
        })
    }

}

function saveToken(reponse) {
    if (reponse.data && reponse.data.accessToken) {
        localStorage.setItem('accessToken', reponse.data.accessToken)
    }
}
