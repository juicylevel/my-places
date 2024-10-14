import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { forwardRef } from 'react';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export type FullscreenDialogProps = DialogProps & {
    title: string;
    okText?: string;
    cancelText?: string;
};

export const FullscreenDialog: React.FC<FullscreenDialogProps> = ({
    title,
    okText = 'Ok',
    cancelText = 'Cancel',
    children,
    onClose,
    ...rest
}) => {
    const handleClose = (event: React.MouseEvent) => {
        onClose?.(event, 'escapeKeyDown');
    };
    return (
        <Dialog
            {...rest}
            onClose={onClose}
            fullScreen
            hideBackdrop
            PaperProps={{
                elevation: 0,
            }}
            TransitionComponent={Transition}
        >
            <Container maxWidth="md" disableGutters>
                <AppBar position="static">
                    <DialogTitle>{title}</DialogTitle>
                </AppBar>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={handleClose}>
                        {cancelText}
                    </Button>
                    <Button variant="text">{okText}</Button>
                </DialogActions>
            </Container>
        </Dialog>
    );
};
