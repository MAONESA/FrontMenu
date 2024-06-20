import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/user' });

// READ

export const getUser = async () => await instance.get('/')
