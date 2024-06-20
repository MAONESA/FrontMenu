import instance from './api';


// READ
export const getUser = async () => await instance.get('user/')

export const getUserByName = async (nombre) => await instance.get(`user/${nombre}`)

//CREATE;

export const createUser = async (obj) => await instance.post('user/', obj)

//LOGIN

export const loginUser = async (obj) => await instance.post('user/login', obj)