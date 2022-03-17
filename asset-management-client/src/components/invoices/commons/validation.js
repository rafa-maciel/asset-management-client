import * as yup from "yup";

const schema = yup.object().shape({
    number: yup
        .number()
        .required('Este campo é obrigatório')
        .max(999999999, 'O limite deste campo é 999999999'),
    vendor: yup
        .string()
        .required('Este campo é obrigatório')
        .max(50, 'Este campo deve conter no máximo 50 caracteres'),
    vendorCNPJ: yup
        .string()
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,"Este não é um formato valido de CNPJ")
        .required('Este campo é obrigatório')
        .max(20, 'Este campo deve conter no máximo 20 caracteres'),
    date: yup
        .date("Formato de data invalido")
        .required('Este campo é obritatório')
})

export { schema as invoiceSchema }