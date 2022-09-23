import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = ' http://www.omdbapi.com/?i=tt3896198&apikey=22760848';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
