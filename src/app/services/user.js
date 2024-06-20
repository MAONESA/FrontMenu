import instance from "./api";


//READ

export const getUsers = async () => await instance.get('user/');


//CREATE

export const createUser = async (obj) => await instance.post('user/', obj);

//LOGIN

export const loginUser = async (obj) => await instance.post('user/login', obj);

