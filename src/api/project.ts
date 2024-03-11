import { get } from '@/http/request';

export const getProjectList = async () => {
    return get({}, '/projects');
};
