import React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface Props {
    visible: boolean,
    loading: boolean,
    title: string,
    description: string,
    onConfirm(): void,
    onHide(): void,
}

const AreYouSureModal: React.FC<Props> = ({
    visible,
    loading,
    title,
    description,
    onConfirm,
    onHide,
}) => {
    return (
        <Dialog
            open={visible}
            onClose={onHide}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onHide} disabled={loading}>Cancelar</Button>
                <LoadingButton onClick={onConfirm} autoFocus loading={loading}>
                    Confirmar
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
};

export default AreYouSureModal;