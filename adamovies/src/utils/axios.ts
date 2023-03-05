import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '8f2ec42ca660094d1483c89192516f6a'
    }
})

export {api, apiMovies}