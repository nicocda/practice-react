import { AppBar, Box, Button, Container, Grid, Stack, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>Hola</Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>

                                    <Button variant="contained"><Link to="login">Login</Link></Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
