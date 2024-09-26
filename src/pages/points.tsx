import { Card, CardContent, Skeleton, Stack } from '@mui/material';
import { usePointsQuery } from 'entities/point/point.queries';

const PointsPage = () => {
    const { data, isPending } = usePointsQuery();

    if (isPending) {
        return <Skeleton />;
    }

    return (
        <Stack direction="row" gap={3}>
            {data?.map((point) => {
                return (
                    <Card key={point.id}>
                        <CardContent>{point.name}</CardContent>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default PointsPage;
