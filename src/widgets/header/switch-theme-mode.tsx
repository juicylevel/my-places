import { Switch, SwitchProps, useColorScheme } from '@mui/material';

type SwitchThemeModeProps = Omit<SwitchProps, 'checked' | 'onChange'>;

export const SwitchThemeMode: React.FC<SwitchThemeModeProps> = (props) => {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mode = event.target.checked ? 'dark' : 'light';
        setMode(mode);
    };
    return (
        <Switch {...props} checked={mode === 'dark'} onChange={handleChange} />
    );
};

export default SwitchThemeMode;
