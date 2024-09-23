import {
    Components,
    createTheme,
    responsiveFontSizes,
    Theme,
} from '@mui/material';

type ComponentsTheme = Components<Omit<Theme, 'components'>>;

const MuiCssBaseline: ComponentsTheme['MuiCssBaseline'] = {
    styleOverrides: `
        :root, body, #root {
            height: 100%;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 60px white inset !important;
            background-color: white !important;
            background-clip: content-box !important;
            transition: background-color 5000s ease-in-out 0s;
        }
    `,
};

const theme = createTheme({
    components: {
        MuiCssBaseline,
    },
});

export default responsiveFontSizes(theme);
