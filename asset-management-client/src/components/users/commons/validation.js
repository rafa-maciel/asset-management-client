import * as yup from "yup";

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Este campo é obrigatório')
        .max(60, 'Este campo deve conter no máximo 60 caracteres'),
    re: yup
        .number()
        .required('Este campo é obrigatório')
        .max(99999, 'O limite desse campo é 99999'),
    department: yup
        .string()
        .required('Este campo é obrigatório')
        .max(60, 'Este campo deve conter no máximo 60 caracteres'),
    status: yup
        .string()
        .required('Este campo é obritatório')
        .max(50, 'Este campo deve conter no maximo 50 caracteres')
})

export { schema as userSchema }