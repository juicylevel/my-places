import { AppBar, AppBarProps, Toolbar, Typography } from '@mui/material';
import SwitchThemeMode from './switch-theme-mode';

export const Header: React.FC<AppBarProps> = (props) => {
    return (
        <AppBar position="static" {...props}>
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    My Places
                </Typography>
                <SwitchThemeMode />
            </Toolbar>
        </AppBar>
    );
};
