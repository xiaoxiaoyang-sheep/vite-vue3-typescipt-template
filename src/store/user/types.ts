export interface IUserState {
    username: string;
    accessToken: string;
    refreshToken: string;
    roles: string[]; // Array<string>
}
export type LoginRequest = {
    username: string;
    password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
    accessToken: string;
};
export type LoginResponse = {
    username: string;
    roles: string[];
    accessToken: string;
};
