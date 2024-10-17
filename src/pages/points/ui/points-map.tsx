import { Avatar, Button, Stack, StackProps } from '@mui/material';
import { Point } from 'entities/point';
import { CreatePoint } from 'features/point';
import { Data } from 'shared/ui/types';

type PointsMapProps = StackProps & Data<Point[]>;

export const PointsMap: React.FC<PointsMapProps> = ({ data, ...rest }) => {
    return (
        <Stack alignItems="flex-start" gap={3} {...rest}>
            <CreatePoint>
                <Button>Add point</Button>
            </CreatePoint>
            <Stack direction="row" gap={2}>
                {data?.map((point) => (
                    <Avatar key={point.id} sx={{ fontSize: '12px' }}>
                        {point.id}
                    </Avatar>
                ))}
            </Stack>
        </Stack>
    );
};
