import { createTheme, responsiveFontSizes } from '@mui/material';
import { MuiCssBaseline } from './css-baseline';
import { MuiButton } from './button';

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    components: {
        MuiCssBaseline,
        MuiButton,
    },
});

export default responsiveFontSizes(theme);
