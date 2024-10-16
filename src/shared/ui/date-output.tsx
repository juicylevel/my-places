import { Typography, TypographyProps } from '@mui/material';
import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from './lib/format/date-format';

export type DateOutputProps = TypographyProps & {
    value: string;
};

export const DateOutput: React.FC<DateOutputProps> = ({ value, ...rest }) => {
    const dateString = dayjs(value).format(DATE_TIME_FORMAT);
    return (
        <Typography component="span" {...rest}>
            {dateString}
        </Typography>
    );
};
