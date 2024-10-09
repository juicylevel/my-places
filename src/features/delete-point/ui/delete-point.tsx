import { useDialogs, useNotifications } from '@toolpad/core';
import { Point, useDeletePoint, useInvalidatePoints } from 'entities/point';
import { ReactElement } from 'react';
import { Data } from 'shared/ui/component-types';
import { useClickableElement } from 'shared/ui/hooks';
import { dialogAsyncCloseHandler } from 'shared/ui/lib/dialog-async-close-handler';

type DeletePointProps = Data<Point> & {
    children: ReactElement;
};

export const DeletePoint: React.FC<DeletePointProps> = ({ data, children }) => {
    const dialogs = useDialogs();
    const notifications = useNotifications();
    const invalidatePoints = useInvalidatePoints();

    const { mutateAsync: deletePoint } = useDeletePoint({
        onSuccess: () => {
            notifications.show('Точка успешно удалена', {
                severity: 'success',
            });
            invalidatePoints();
        },
        onError: () => {
            notifications.show('Произошла ошибка при удалении точки', {
                severity: 'error',
            });
        },
    });

    const triggerElement = useClickableElement(children, async () => {
        await dialogs.confirm(
            `Вы действительно хотите удалить точку "${data?.name}"?`,
            {
                title: 'Удаление точки',
                cancelText: 'Нет',
                okText: 'Да',
                onClose: dialogAsyncCloseHandler(
                    async () => await deletePoint(data?.id!),
                ),
            },
        );
    });

    return triggerElement;
};
