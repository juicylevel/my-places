import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [tsconfigPaths(), react()],
    resolve: {
        alias: {
            src: '/src',
        },
    },
    server: {
        port: 8700,
        // proxy: {
        //     ...(true && {
        //         '/mockServiceWorker.js': {
        //             target: 'http://localhost:8700',
        //             rewrite: () => '/my-places/mockServiceWorker.js',
        //         },
        //     }),
        // },
    },
    // base: '/my-places',
}));
