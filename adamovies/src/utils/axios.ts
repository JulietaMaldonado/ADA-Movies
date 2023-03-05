import axios from "axios";
import { param } from "jquery";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '8f2ec42ca660094d1483c89192516f6a'
    }
})

const fireBase = axios.create ({
    url: "https://ada-movies-35ec4-default-rtdb.firebaseio.com/"

})

fireBase.post('/users.json')

export {api, apiMovies, fireBase}