import { createTheme, responsiveFontSizes } from '@mui/material';
import { MuiCssBaseline } from './css-baseline';

const theme = createTheme({
    components: {
        MuiCssBaseline,
    },
});

export default responsiveFontSizes(theme);
