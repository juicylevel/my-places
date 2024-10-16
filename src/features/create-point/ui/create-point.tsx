import { ReactElement } from 'react';
import { FullscreenDialog } from 'shared/ui/fullscreen-dialog';
import { useClickableElement, useDialog } from 'shared/ui/hooks';
import { useTranslation } from 'react-i18next';
import {
    useCreatePoint,
    useInvalidatePoints,
    CreatePointValues,
} from 'entities/point';
import { useNotifications } from '@toolpad/core';
import { PointForm } from 'entities/point/ui/point-form';

const tPrefix = 'point.actions.create';

type CreatePointProps = {
    children: ReactElement;
};

export const CreatePoint: React.FC<CreatePointProps> = ({ children }) => {
    const { onOpen, ...modalProps } = useDialog();
    const triggerElement = useClickableElement(children, onOpen);
    const { t } = useTranslation();
    const notifications = useNotifications();
    const invalidatePoints = useInvalidatePoints();

    const { mutateAsync: create } = useCreatePoint({
        onSuccess: () => {
            notifications.show(t(`${tPrefix}.success`), {
                severity: 'success',
            });
            invalidatePoints();
            modalProps.onClose();
        },
        onError: () => {
            notifications.show(t(`${tPrefix}.error`), {
                severity: 'error',
            });
        },
    });

    return (
        <>
            {triggerElement}
            <FullscreenDialog
                {...modalProps}
                title={t('point.form.create')}
                submitForm="point-form"
                okText={t('actions.save')}
            >
                <PointForm<CreatePointValues>
                    onSuccess={(values) => create(values)}
                />
            </FullscreenDialog>
        </>
    );
};
