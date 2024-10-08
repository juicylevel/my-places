import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';

export const PageLayout = () => {
    return (
        <Container maxWidth="md">
            <Header />
            <Box component="main" pt="20px">
                <Outlet />
            </Box>
        </Container>
    );
};
