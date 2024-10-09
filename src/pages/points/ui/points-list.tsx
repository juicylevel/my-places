import { Button, Stack, StackProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Data } from 'shared/ui/component-types';
import { Point } from 'entities/point';
import { PointCard } from './point-card';

type PointsListProps = StackProps & Data<Point[]>;

export const PointsList: React.FC<PointsListProps> = ({ data, ...rest }) => {
    return (
        <Stack gap={3} flexWrap="wrap" {...rest}>
            <Button variant="text" startIcon={<AddIcon />}>
                Новая точка
            </Button>
            {data?.map((point) => {
                return <PointCard key={point.id} data={point} />;
            })}
        </Stack>
    );
};
