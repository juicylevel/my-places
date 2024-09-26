import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const PageLayout = () => (
    <Container maxWidth="md">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    My Places
                </Typography>
            </Toolbar>
        </AppBar>
        <Box component="main" pt="20px">
            <Outlet />
        </Box>
    </Container>
);

export default PageLayout;
