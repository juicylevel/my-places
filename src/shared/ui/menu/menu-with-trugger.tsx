import { IconButton, Menu, MenuProps } from '@mui/material';
import { Menu as Sandwich } from '@mui/icons-material';
import React, { Fragment, ReactElement } from 'react';
import { useClickableElement } from '../hooks';

export type MenuWithTriggerProps = Omit<MenuProps, 'open' | 'anchorEl'> & {
    trigger?: ReactElement;
};

const DefaultTrigger = (
    <IconButton>
        <Sandwich />
    </IconButton>
);

export const MenuWithTrigger = React.forwardRef<any, MenuWithTriggerProps>(
    ({ trigger = DefaultTrigger, ...rest }, ref) => {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
            null
        );
        const open = !!anchorEl;

        const handleTriggerClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
            event.stopPropagation();
            event.preventDefault();
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const triggerElement = useClickableElement(trigger, handleTriggerClick);

        return (
            <Fragment>
                {triggerElement}
                <Menu
                    ref={ref}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    anchorEl={anchorEl}
                    {...rest}
                />
            </Fragment>
        );
    }
);
