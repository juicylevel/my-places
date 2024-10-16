import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { api } from 'shared/api/react-query-client';
import { Point } from '../model/point.types';

type UsePointMutationOptions = Omit<
    UseMutationOptions<unknown, Error, unknown>,
    'mutationFn'
>;

export const useCreatePoint = (options?: UsePointMutationOptions) => {
    return useMutation({
        //  TODO: using Omit
        mutationFn: async (data: Omit<Point, 'id'>) => {
            await api.post(`/points`, data);
        },
        ...options,
    });
};

export const useUpdatePoint = (
    id: string,
    options?: UsePointMutationOptions,
) => {
    return useMutation({
        //  TODO: using Omit
        mutationFn: async (data: Omit<Point, 'id'>) => {
            await api.put(`/points/${id}`, data);
        },
        ...options,
    });
};

export const useDeletePoint = (options?: UsePointMutationOptions) => {
    return useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/points/${id}`);
        },
        ...options,
    });
};
