import { Skeleton, Stack } from '@mui/material';
import { usePointsQuery } from 'entities/point/api';
import PointCard from 'entities/point/ui/point-card';

const PointsPage = () => {
    const { data, isPending } = usePointsQuery();

    if (isPending) {
        return <Skeleton />;
    }

    return (
        <Stack direction="row" gap={3}>
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

export default PointsPage;
