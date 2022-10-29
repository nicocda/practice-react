import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const RouterLayout = () => {
    return (
        <>
            <NavBar />
            <Container sx={{ marginTop: 9 }} maxWidth="xl">
                <Outlet />
            </Container>
        </>
    )
}
