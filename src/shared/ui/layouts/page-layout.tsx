import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { RouterLink } from '../router-link';

const PageLayout = () => (
    <Stack gap={3}>
        <Stack direction="row" gap={2} justifyContent="center">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="about">About</RouterLink>
        </Stack>
        <Outlet />
    </Stack>
);

export default PageLayout;
