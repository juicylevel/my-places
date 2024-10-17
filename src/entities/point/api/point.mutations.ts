import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { api } from 'shared/api/react-query-client';
import { CreatePointValues, UpdatePointValues } from '../model/point.types';

type UsePointMutationOptions<Payload = unknown> = Omit<
    UseMutationOptions<unknown, Error, Payload>,
    'mutationFn'
>;

export const useCreatePoint = (
    options?: UsePointMutationOptions<CreatePointValues>,
) => {
    return useMutation({
        mutationFn: async (data) => {
            await api.post(`/points`, data);
        },
        ...options,
    });
};

export const useUpdatePoint = (
    id: string,
    options?: UsePointMutationOptions<UpdatePointValues>,
) => {
    return useMutation({
        mutationFn: async (data) => {
            await api.put(`/points/${id}`, data);
        },
        ...options,
    });
};

export const useDeletePoint = (options?: UsePointMutationOptions<string>) => {
    return useMutation({
        mutationFn: async (id) => {
            await api.delete(`/points/${id}`);
        },
        ...options,
    });
};
