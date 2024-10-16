import { MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
} from 'react-hook-form-mui';
import { ActivityType } from 'entities/activity/model/activity-type';
import { useTranslation } from 'react-i18next';

export function PointForm<FormValues>(props: FormContainerProps<FormValues>) {
    const { t } = useTranslation();
    return (
        <FormContainer<FormValues>
            {...props}
            FormProps={{
                id: 'point-form',
                ...props.FormProps,
            }}
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
    );
}
