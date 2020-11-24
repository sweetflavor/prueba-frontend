import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://dummyapi.io/data/api/`,
    headers: {
        'app-id': '5fbbd6bd507cbe03376fb02b'
    }
})