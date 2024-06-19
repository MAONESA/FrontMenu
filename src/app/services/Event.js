import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/event' });

// READ
export const getEvent = async () => await instance.get('/');

export const getEventById = async (id) => await instance.get(`/${id}`);
