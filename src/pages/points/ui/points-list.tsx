import { useTranslation } from 'react-i18next';
import { Button, ButtonProps, Stack, StackProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Point } from 'entities/point';
import { Data } from 'shared/ui/component-types';
import { PointCard } from './point-card';

export const AddButton: React.FC<ButtonProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Button variant="text" startIcon={<AddIcon />} {...props}>
            {t('point.actions.create.title')}
        </Button>
    );
};

type PointsListProps = StackProps & Data<Point[]>;

export const PointsList: React.FC<PointsListProps> = ({ data, ...rest }) => {
    return (
        <Stack gap={3} {...rest}>
            <AddButton />
            {data?.map((point) => {
                return <PointCard key={point.id} data={point} />;
            })}
        </Stack>
    );
};
