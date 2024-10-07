import {
    AppBar,
    AppBarProps,
    Switch,
    Toolbar,
    Typography,
    useColorScheme,
} from '@mui/material';

export const Header: React.FC<AppBarProps> = (props) => {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mode = event.target.checked ? 'dark' : 'light';
        setMode(mode);
    };
    return (
        <AppBar position="static" {...props}>
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    My Places
                </Typography>
                <Switch checked={mode === 'dark'} onChange={handleChange} />
            </Toolbar>
        </AppBar>
    );
};
