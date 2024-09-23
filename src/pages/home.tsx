import { Box, Stack, Typography } from '@mui/material';
import appLogo from '/favicon.svg';

const HomePage = () => {
    return (
        <Stack gap={3} alignItems="center">
            <Box
                component="img"
                src={appLogo}
                alt="app logo"
                maxWidth="500px"
            />
            <Typography variant="h2">My places</Typography>
        </Stack>
    );
};

export default HomePage;
