import { MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { ReactElement } from 'react';
import { FullscreenDialog } from 'shared/ui/fullscreen-dialog';
import { useClickableElement, useDialog } from 'shared/ui/hooks';
import { useTranslation } from 'react-i18next';
import { ActivityType } from 'entities/activity/model/activity-type';
import { Point, useCreatePoint, useInvalidatePoints } from 'entities/point';
import { useNotifications } from '@toolpad/core';

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
                <FormContainer<Omit<Point, 'id'>>
                    FormProps={{
                        id: 'point-form',
                    }}
                    onSuccess={(values) => create(values)}
                >
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextFieldElement
                                name="activityType"
                                label={t('point.fields.activityType')}
                                select
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            >
                                {Object.keys(ActivityType).map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {t(`activity.type.${type}`)}
                                    </MenuItem>
                                ))}
                            </TextFieldElement>
                        </Grid>
                        <Grid size={12}>
                            <TextFieldElement
                                name="name"
                                label={t('point.fields.name')}
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextFieldElement
                                name="desc"
                                label={t('point.fields.desc')}
                                multiline
                                rows={3}
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextFieldElement
                                name="coords.lat"
                                label={t('point.fields.coords.lat')}
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextFieldElement
                                name="coords.long"
                                label={t('point.fields.coords.long')}
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </FormContainer>
            </FullscreenDialog>
        </>
    );
};
