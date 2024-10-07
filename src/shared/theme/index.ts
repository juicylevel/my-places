import { createTheme, responsiveFontSizes } from '@mui/material';
import { MuiCssBaseline } from './css-baseline';
import { MuiButton } from './button';

const theme = createTheme({
    components: {
        MuiCssBaseline,
        MuiButton,
    },
});

export default responsiveFontSizes(theme);
