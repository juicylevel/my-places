import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        },
    },
});
