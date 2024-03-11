import { get } from '@/http/request';

export const getRoleList = async () => {
    return get({}, '/getRoleList');
};
