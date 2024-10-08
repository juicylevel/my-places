import { Box, Stack, Typography } from '@mui/material';
import appLogo from '/favicon.svg';

export const NoMatchPage = () => {
    return (
        <Stack gap={3} alignItems="center">
            <Box
                component="img"
                src={appLogo}
                alt="app logo"
                maxWidth="500px"
            />
            <Typography variant="h2">404 Not Found</Typography>
        </Stack>
    );
};
