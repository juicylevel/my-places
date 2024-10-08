import { useState } from 'react';
import {
    Skeleton,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Typography,
} from '@mui/material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { usePointsQuery } from 'entities/point';
import { PointsList } from './points-list';
import { PointsMap } from './points-map';

enum PointsView {
    LIST,
    MAP,
}

const views = {
    [PointsView.LIST]: PointsList,
    [PointsView.MAP]: PointsMap,
};

export const PointsPage = () => {
    const { data, isPending } = usePointsQuery();
    const [view, setView] = useState(PointsView.MAP);
    const ViewComponent = views[view];

    const handleChangeView = (
        _: React.MouseEvent<HTMLElement>,
        value: PointsView | null
    ) => {
        if (value !== null) {
            setView(value);
        }
    };

    if (isPending) {
        return <Skeleton />;
    }

    return (
        <Stack gap={3}>
            <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
                <Typography>Filter</Typography>
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleChangeView}
                >
                    <ToggleButton value={PointsView.MAP}>
                        <AddLocationAltOutlinedIcon />
                    </ToggleButton>
                    <ToggleButton value={PointsView.LIST}>
                        <FormatListBulletedOutlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Toolbar>
            <ViewComponent data={data} />
        </Stack>
    );
};
