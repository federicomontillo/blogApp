import axios from 'axios';

const clienteAxiosPosts = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export default clienteAxiosPosts;