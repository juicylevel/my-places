import { ReactElement } from 'react';
import { FullscreenDialog } from 'shared/ui/modal';
import { useClickableElement, useDialog } from 'shared/lib/hooks';
import { useTranslation } from 'react-i18next';
import { Point, useInvalidatePoints, useUpdatePoint } from 'entities/point';
import { useNotifications } from '@toolpad/core';
import { PointForm } from 'entities/point/ui/point-form';
import { Data } from 'shared/ui/types';

const tPrefix = 'point.actions.update';

type UpdatePointProps = Data<Point> & {
    children: ReactElement;
};

export const UpdatePoint: React.FC<UpdatePointProps> = ({ data, children }) => {
    const { onOpen, ...modalProps } = useDialog();
    const triggerElement = useClickableElement(children, onOpen);
    const { t } = useTranslation();
    const notifications = useNotifications();
    const invalidatePoints = useInvalidatePoints();

    const { mutateAsync: update } = useUpdatePoint(data?.id!, {
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
                title={t('point.form.update')}
                submitForm="point-form"
                okText={t('actions.save')}
            >
                <PointForm
                    defaultValues={data}
                    onSuccess={(values) => update(values)}
                />
            </FullscreenDialog>
        </>
    );
};
