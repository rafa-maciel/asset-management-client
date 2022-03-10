import * as yup from "yup";

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Este campo é obrigatório')
        .max(60, 'Este campo deve conter no máximo 60 caracteres'),
    address: yup
        .string()
        .required('Este campo é obrigatório')
        .max(60, 'Este campo deve conter no máximo 60 caracteres')
    
})

export { schema as locationSchema }