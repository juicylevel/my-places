import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';

export const PageLayout = () => {
    return (
        <Container maxWidth="md" disableGutters>
            <Header />
            <Box component="main" p={3}>
                <Outlet />
            </Box>
        </Container>
    );
};
