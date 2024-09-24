import { Components, Theme } from '@mui/material';

type ComponentsTheme = Components<Omit<Theme, 'components'>>;

export default ComponentsTheme;
