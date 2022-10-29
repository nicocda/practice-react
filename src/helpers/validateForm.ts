import * as yup from "yup"
import { string } from "yup/lib/locale"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("Usuario es requerido"),
    password: yup.string().trim().required("Password es requerido"),
})