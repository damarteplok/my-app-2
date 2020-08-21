import axios from "axios";

const KEY = 'AIzaSyA4JuyESUP_0zEOiTMZZjcDDHNny1hyTd4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})  