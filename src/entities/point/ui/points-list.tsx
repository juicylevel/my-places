import { Stack, StackProps } from '@mui/material';
import { Data } from 'shared/ui/component-types';
import { Point } from '../model/point.types';
import { PointCard } from './point-card';

type PointsListProps = StackProps & Data<Point[]>;

export const PointsList: React.FC<PointsListProps> = ({ data, ...rest }) => {
    return (
        <Stack direction="row" gap={3} flexWrap="wrap" {...rest}>
            {data?.map((point) => {
                return (
                    <PointCard
                        key={point.id}
                        data={point}
                        sx={{ maxWidth: '300px' }}
                    />
                );
            })}
        </Stack>
    );
};
