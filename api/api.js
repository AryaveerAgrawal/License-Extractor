import axios from 'axios'

const api = axios.create({
    baseURL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://192.168.29.210:8102/'  // Your actual network IP
        : '/api/'
});
// Use it right away or export it
export default api;
