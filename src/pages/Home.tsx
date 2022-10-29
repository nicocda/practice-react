import { Button, Container } from "@mui/material"
import { useNotification } from "../../hooks/useNotification"

export const Home = () => {
    const { getError, getSuccess } = useNotification()
    const handleErrorClick = () => {
        getError("Hola mundo");
    }
    const handleSuccessClick = () => {
        getSuccess("Hola mundo");
    }
    return (
        <Container sx={{ marginTop: 9 }} maxWidth="xl">
            <Button variant="outlined"> Hello World</Button>
            <Button variant="outlined" onClick={handleErrorClick}>Open Error Notificacion</Button>
            <Button variant="outlined" onClick={handleSuccessClick}>Open Success Notificacion</Button>

        </Container>
    )
}
