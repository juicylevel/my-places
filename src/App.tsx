import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import theme from './theme';
import RouterLink from 'components/RouterLink';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack gap={3}>
                <Outlet />
                <Stack direction="row" gap={2} justifyContent="center">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="about">About</RouterLink>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};

export default App;
