import { forwardRef } from 'react';
import {
    LinkProps as RouterLinkProps,
    Link as RouterDomLink,
} from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';

type CustomRouterLinkProps = Omit<LinkProps, 'component'> & RouterLinkProps;

const RouterLink = forwardRef<any, CustomRouterLinkProps>((props, ref) => (
    <Link ref={ref} component={RouterDomLink} {...props} />
));

export default RouterLink;
