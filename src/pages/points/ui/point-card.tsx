import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Card,
    CardContent,
    CardHeader,
    cardHeaderClasses,
    CardProps,
    Fab,
    IconButton,
    Typography,
} from '@mui/material';
import { MenuWithTrigger, MenuItemIcon } from 'shared/ui/menu';
import { Data } from 'shared/ui/component-types';
import { Point } from '../model/point.types';

type PointCardProps = Data<Point> & CardProps;

export const PointCard: React.FC<PointCardProps> = ({ data, ...rest }) => {
    if (!data) return null;
    return (
        <Card key={data.id} {...rest}>
            <CardHeader
                avatar={
                    <Fab
                        size="small"
                        color="secondary"
                        sx={{ boxShadow: 'none' }}
                    >
                        <PlaceTwoToneIcon />
                    </Fab>
                }
                title={data.name}
                titleTypographyProps={{
                    variant: 'subtitle1',
                }}
                action={
                    <MenuWithTrigger
                        trigger={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    >
                        <MenuItemIcon
                            icon={<DeleteOutlineIcon />}
                            onClick={() => {}}
                        >
                            Удалить точку
                        </MenuItemIcon>
                    </MenuWithTrigger>
                }
                sx={{
                    pb: 0,
                    [`.${cardHeaderClasses.action}`]: {
                        mt: 0,
                    },
                }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.desc}
                </Typography>
            </CardContent>
        </Card>
    );
};
