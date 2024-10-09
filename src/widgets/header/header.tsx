import { AppBar, AppBarProps, Stack, Toolbar, Typography } from '@mui/material';
import ThemeSwitcherProps from './theme-switcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from './lang-switcher';

export const Header: React.FC<AppBarProps> = (props) => {
    const { t } = useTranslation();
    return (
        <AppBar position="static" {...props}>
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    {t('appTitle')}
                </Typography>
                <Stack direction="row" gap={1}>
                    <LangSwitcher size="small" />
                    <ThemeSwitcherProps />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
