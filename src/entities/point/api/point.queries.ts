import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from 'shared/api/react-query-client';
import { Point } from '../model/point.types';
import { useCallback } from 'react';

export const pointsQueryKey = () => ['points'];

export const usePointsQuery = () => {
    return useQuery<Point[]>({
        queryKey: pointsQueryKey(),
        queryFn: async () => {
            const result = await api.get('/points');
            return result.data;
        },
    });
};

export const useInvalidatePoints = () => {
    const queryClient = useQueryClient();
    return useCallback(() => {
        queryClient.invalidateQueries({ queryKey: pointsQueryKey() });
    }, [queryClient]);
};
