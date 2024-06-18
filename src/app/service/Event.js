import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/event' });

// CREATE
export const createEvent = (obj) => instance.post('/', obj);

// READ
export const getEvent = async () => await instance.get('/');
