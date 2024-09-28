import { useQuery } from '@tanstack/react-query';
import { api } from 'shared/api/react-query-client';
import { Point } from '../model/point.types';

export const usePointsQuery = () => {
    return useQuery<Point[]>({
        queryKey: ['points'],
        queryFn: async () => {
            const result = await api.get('/points');
            return result.data;
        },
    });
};
