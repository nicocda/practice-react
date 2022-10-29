import { useContext } from "react"
import { NotificationContext } from "../context/NotificationContext"

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error("No existe contexto");
    return context;
};