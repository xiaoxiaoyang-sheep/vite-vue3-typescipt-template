import { post, get } from '@/http/request';
import { LoginRequest, LoginResponse, reLoginRequest } from '@/store/user/types';

// 定义的接口
export const userLogin = async (data?: LoginRequest) => {
    return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
    return post<LoginResponse>({}, '/getUserInfo', data);
};

// 获取所有的用户
export const getUserList = () => {
    return get({}, '/getUserList');
};
