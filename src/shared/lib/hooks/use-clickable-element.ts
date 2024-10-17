import { cloneElement, MutableRefObject, ReactElement } from 'react';

export const useClickableElement = (
    children: ReactElement,
    onClick: any,
    ref?: MutableRefObject<any>
) => {
    return cloneElement(children, {
        ...children.props,
        ref,
        onClick,
    });
};
