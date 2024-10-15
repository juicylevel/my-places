import { MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { ReactElement } from 'react';
import { FullscreenDialog } from 'shared/ui/fullscreen-dialog';
import { useClickableElement, useDialog } from 'shared/ui/hooks';
import { useTranslation } from 'react-i18next';
import { ActivityType } from 'entities/activity/model/activity-type';

type CreatePointProps = {
    children: ReactElement;
};

export const CreatePoint: React.FC<CreatePointProps> = ({ children }) => {
    const { onOpen, ...modalProps } = useDialog();
    const triggerElement = useClickableElement(children, onOpen);
    const { t } = useTranslation();
    return (
        <>
            {triggerElement}
            <FullscreenDialog
                {...modalProps}
                title={t('point.form.create')}
                submitForm="point-form"
                okText={t('actions.save')}
            >
                <FormContainer
                    FormProps={{
                        id: 'point-form',
                    }}
                    onSuccess={(data) => console.log(data)}
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
                                name="title"
                                label={t('point.fields.title')}
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
                                name="latitude"
                                label={t('point.fields.latitude')}
                                fullWidth
                                required
                                rules={{
                                    required: true,
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextFieldElement
                                name="longitude"
                                label={t('point.fields.longitude')}
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
