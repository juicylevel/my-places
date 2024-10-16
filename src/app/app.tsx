import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { DialogsProvider, NotificationsProvider } from '@toolpad/core';
import { queryClient } from 'shared/api/react-query-client';
import { notificationsConfig } from 'shared/config/notifications-config';
import theme from 'shared/ui/theme';
import router from './router';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <DialogsProvider>
                    <NotificationsProvider {...notificationsConfig}>
                        <RouterProvider router={router} />
                    </NotificationsProvider>
                </DialogsProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
