import { ListItemIcon, MenuItem, MenuItemProps } from '@mui/material';
import { ReactElement } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

export type RouterMenuItemProps = MenuItemProps &
    Pick<LinkProps, 'to'> & {
        icon?: ReactElement;
    };

export const RouterMenuItem: React.FC<RouterMenuItemProps> = ({
    to,
    icon,
    children,
}) => {
    const { pathname } = useLocation();
    const selected = pathname === to;
    return (
        <MenuItem component={Link} to={to} selected={selected}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            {children}
        </MenuItem>
    );
};
