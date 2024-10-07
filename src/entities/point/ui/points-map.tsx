import { Avatar, Button, Stack, StackProps, Typography } from '@mui/material';
import { Data } from 'shared/ui/component-types';
import { Point } from '../model/point.types';

type PointsMapProps = StackProps & Data<Point[]>;

export const PointsMap: React.FC<PointsMapProps> = ({ data, ...rest }) => {
    return (
        <Stack alignItems="flex-start" gap={3} {...rest}>
            <Button>Add point</Button>
            <Stack direction="row" gap={2}>
                {data?.map((point) => (
                    <Avatar
                        key={point.id}
                        sx={{ fontSize: '14px' }}
                    >{`[${point.coords}]`}</Avatar>
                ))}
            </Stack>
        </Stack>
    );
};
