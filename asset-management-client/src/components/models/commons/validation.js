import * as yup from "yup";

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Este campo é obrigatório')
        .max(30, 'Este campo deve conter no máximo 30 caracteres'),
    brand: yup
        .string()
        .required('Este campo é obrigatório')
        .max(30, 'Este campo deve conter no máximo 30 caracteres'),
    type: yup
        .string()
        .required('Este campo é obrigatório')
        .max(50, 'Este campo deve conter no máximo 50 caracteres')
})

export { schema as modelSchema }