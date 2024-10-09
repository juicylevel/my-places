import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { api } from 'shared/api/react-query-client';

type UseDeletePointOptions = Omit<
    UseMutationOptions<unknown, Error, unknown>,
    'mutationFn'
>;

export const useDeletePoint = (options?: UseDeletePointOptions) => {
    return useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/points/${id}`);
        },
        ...options,
    });
};
