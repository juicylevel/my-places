import { useTranslation } from 'react-i18next';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOffOutlinedIcon from '@mui/icons-material/EditOutlined';
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
import { UpdatePoint, DeletePoint } from 'features/point';
import { Point } from 'entities/point';
import {
    MenuWithTrigger,
    MenuItemIcon,
    MenuItemIconProps,
} from 'shared/ui/menu';
import { Data } from 'shared/ui/types';

type PointMenuItemProps = MenuItemIconProps & {
    actionKey: string;
};

const PointMenuItem: React.FC<PointMenuItemProps> = ({
    actionKey,
    ...rest
}) => {
    const { t } = useTranslation();
    return (
        <MenuItemIcon {...rest}>
            {t(`point.actions.${actionKey}.title`)}
        </MenuItemIcon>
    );
};

type PointCardProps = Data<Point> & CardProps;

export const PointCard: React.FC<PointCardProps> = ({ data, ...rest }) => {
    const { t } = useTranslation();
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
                subheader={t(`activity.type.${data.activityType}`)}
                titleTypographyProps={{
                    variant: 'subtitle1',
                }}
                action={
                    <MenuWithTrigger
                        keepMounted
                        trigger={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    >
                        <UpdatePoint data={data}>
                            <PointMenuItem
                                icon={<EditOffOutlinedIcon />}
                                actionKey="update"
                            />
                        </UpdatePoint>
                        <DeletePoint data={data}>
                            <PointMenuItem
                                icon={<DeleteOutlineIcon />}
                                actionKey="delete"
                            />
                        </DeletePoint>
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
