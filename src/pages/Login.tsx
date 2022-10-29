import { Box, Button, Checkbox, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidate } from '../helpers/validateForm'
import { useNotification } from '../hooks/useNotification'

type LoginType = {
    username: string,
    password: string
}

export const Login = () => {
    let navigate = useNavigate();
    const { getError, getSuccess } = useNotification()
    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData).then(() => {
            navigate('/');
            getSuccess(`Bienvenido ${loginData.username}`);
        }).catch((error) => {
            getError(error.message)

        })
    }

    return (
        <>
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }} >
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant='h4'>Iniciar sesión</Typography>
                        <Box component="form" onSubmit={handleSubmit}>

                            <Stack direction="column" spacing={2}>

                                <TextField name="username" type="text" label="Username" onChange={handleChange} />
                                <TextField name="password" type="password" label="password" onChange={handleChange} />
                                <Button type="submit"> Iniciar Sesion</Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
