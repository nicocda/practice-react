import { Alert, AlertColor, Snackbar, Typography } from '@mui/material'
import React from 'react'

type NotificationProps = {
    open: boolean,
    msg: string,
    type: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({
    open, msg, type, handleClose
}) => {
    return (
        <>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type}>
                    <Typography>{msg}</Typography>
                </Alert>
            </Snackbar>
        </>
    )
}
