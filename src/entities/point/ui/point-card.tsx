import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Card,
    CardContent,
    CardHeader,
    cardHeaderClasses,
    CardProps,
    IconButton,
    Typography,
} from '@mui/material';
import { MenuWithTrigger, MenuItemIcon } from 'shared/ui/menu';
import { Data } from 'shared/ui/component-types';
import { Point } from '../model/point.types';

type PointCardProps = Data<Point> & CardProps;

const PointCard: React.FC<PointCardProps> = ({ data, ...rest }) => (
    <Card key={data.id} {...rest}>
        <CardHeader
            avatar={
                <IconButton sx={{ bgcolor: '#f8f8f8' }}>
                    <PlaceTwoToneIcon color="info" />
                </IconButton>
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

export default PointCard;
