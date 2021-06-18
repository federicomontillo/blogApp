import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "http://challenge-react.alkemy.org/"
});

export default clienteAxios;