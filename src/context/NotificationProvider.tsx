import { AlertColor } from "@mui/material";
import React from "react";
import { NotificationContext } from "./NotificationContext";
import { Notification } from '../components/notifications';

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState<AlertColor | undefined>(undefined);

    const getError = (msg: string) => {
        setType("error");
        setOpen(true);
        setMsg(msg);
    }

    const getSuccess = (msg: string) => {
        setType("success");
        setOpen(true);
        setMsg(msg);
    };

    const value = {
        getError,
        getSuccess,
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <NotificationContext.Provider value={value}>
            <Notification
                handleClose={handleClose}
                open={open}
                type={type}
                msg={msg}
            />
            {children}
        </NotificationContext.Provider>
    )
}