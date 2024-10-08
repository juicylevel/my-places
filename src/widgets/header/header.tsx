import { AppBar, AppBarProps, Toolbar, Typography } from '@mui/material';
import ThemeSwitcherProps from './theme-switcher';

export const Header: React.FC<AppBarProps> = (props) => {
    return (
        <AppBar position="static" {...props}>
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    My Places
                </Typography>
                <ThemeSwitcherProps />
            </Toolbar>
        </AppBar>
    );
};
