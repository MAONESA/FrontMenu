import instance from "./api";

export const getUsers = async () => await instance.get('user/');
