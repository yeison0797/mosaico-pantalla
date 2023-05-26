import axios from 'axios';
import config from '../config.json'


const axiosBasicInstanceApiInventario = axios.create({
    baseURL: config.ApiInventario,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export {
    axiosBasicInstanceApiInventario
}
