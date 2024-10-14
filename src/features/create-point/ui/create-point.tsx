import { ReactElement } from 'react';
import { FullscreenDialog } from 'shared/ui/fullscreen-dialog';
import { useClickableElement, useDialog } from 'shared/ui/hooks';

type CreatePointProps = {
    children: ReactElement;
};

export const CreatePoint: React.FC<CreatePointProps> = ({ children }) => {
    const { onOpen, ...modalProps } = useDialog();
    const triggerElement = useClickableElement(children, onOpen);
    return (
        <>
            {triggerElement}
            <FullscreenDialog {...modalProps} title="Новая точка">
                form...
            </FullscreenDialog>
        </>
    );
};
