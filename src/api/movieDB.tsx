import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: "bf43112d5be4dfaa17e1c506675859d8",
        language: "es-MX",
    }
});

export default movieDB;