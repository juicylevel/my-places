import { useTranslation } from 'react-i18next';
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
    MenuItemProps,
    Typography,
} from '@mui/material';
import { DeletePoint } from 'features/delete-point';
import { Point } from 'entities/point';
import { MenuWithTrigger, MenuItemIcon } from 'shared/ui/menu';
import { Data } from 'shared/ui/component-types';

const DeletePointMenuItem: React.FC<MenuItemProps> = (props) => {
    const { t } = useTranslation();
    return (
        <MenuItemIcon icon={<DeleteOutlineIcon />} {...props}>
            {t('point.actions.delete.title')}
        </MenuItemIcon>
    );
};

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
                        <DeletePoint data={data}>
                            <DeletePointMenuItem />
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
