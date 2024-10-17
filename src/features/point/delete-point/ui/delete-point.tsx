import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useDialogs, useNotifications } from '@toolpad/core';
import { Point, useDeletePoint, useInvalidatePoints } from 'entities/point';
import { Data } from 'shared/ui/types';
import { useClickableElement } from 'shared/lib/hooks';
import { dialogAsyncCloseHandler } from 'shared/lib/dialog-async-close-handler';

const tPrefix = 'point.actions.delete';

type DeletePointProps = Data<Point> & {
    children: ReactElement;
};

export const DeletePoint: React.FC<DeletePointProps> = ({ data, children }) => {
    const { t } = useTranslation();
    const dialogs = useDialogs();
    const notifications = useNotifications();
    const invalidatePoints = useInvalidatePoints();

    const { mutateAsync: deletePoint } = useDeletePoint({
        onSuccess: () => {
            notifications.show(t(`${tPrefix}.success`), {
                severity: 'success',
            });
            invalidatePoints();
        },
        onError: () => {
            notifications.show(t(`${tPrefix}.error`), {
                severity: 'error',
            });
        },
    });

    const triggerElement = useClickableElement(children, async () => {
        await dialogs.confirm(
            t(`${tPrefix}.confirm.content`, { name: data?.name }),
            {
                title: t(`${tPrefix}.confirm.title`),
                cancelText: t(`${tPrefix}.confirm.cancelText`),
                okText: t(`${tPrefix}.confirm.okText`),
                onClose: dialogAsyncCloseHandler(
                    async () => await deletePoint(data?.id!),
                ),
            },
        );
    });

    return triggerElement;
};
