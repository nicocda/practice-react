import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"

type ThemeProp = {
    children: JSX.Element | JSX.Element[]
}
enum ThemePallete {
    BG_COLOR = "#12181b",
    MAIN_COLOR = "#C8FA5F", //LIME
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
    SUCCES_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: ThemePallete.BG_COLOR
        },
        primary: {
            main: ThemePallete.MAIN_COLOR
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    borderRadius: "0.5em"

                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    fontSize: "1em",
                    borderRadius: "0.8em",
                }
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${ThemePallete.ERROR_MAIN}`,
                    backgroundColor: ThemePallete.BG_ERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${ThemePallete.SUCCES_MAIN}`,
                    backgroundColor: ThemePallete.BG_SUCCESS_MAIN
                }
            }
        }
    },


})

export const ThemeConfig: React.FunctionComponent<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
