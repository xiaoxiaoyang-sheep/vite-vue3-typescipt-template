export const useCompRef = <T extends abstract new (...args: any) => any>() => {
    return ref<InstanceType<T>>();
};
