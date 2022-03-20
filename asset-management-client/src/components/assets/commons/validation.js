import * as yup from "yup";

const schema = yup.object().shape({
    ownerId: yup
        .number()
        .min(1, 'Este usuário não é valido')
        .required('Este campo é obrigatório'),
    locationId: yup
        .number()
        .required('Este campo é obrigatório')
        .min(1, 'Esta localização não é valida'),
    modelId: yup
        .number()
        .required('Este campo é obrigatório')
        .min(1, 'Este modelo não é valido'),
    contractId: yup
        .number(),
    invoiceId: yup
        .number(),
    hostname: yup
        .string()
        .max(30, 'Este campo deve conter no máximo 30 caracteres'),
    serialNumber: yup
        .string()
        .max(50, 'Este campo deve conter no máximo 50 caracteres'),
    tag: yup
        .string()
        .max(10, 'Este campo deve conter no máximo 10 caracteres'),
    imei: yup
        .number()
        .max(999999999999999, 'Este campo deve conter exatamente 15 caracteres'),
    companyIdentification: yup
        .number()
        .max(999999, 'O número maximo permitido para esté campo é 999999'),
    status: yup
        .string()
        .required('Este campo é obrigatório'),
    chipIdentification: yup
        .number()
        .max(999999999999999, 'Este campo deve conter exatamente 999999999999999 caracteres'),
    lineIdentification: yup
        .string()
        .max(18, 'Este campo deve conter no máximo 18 caracteres'),
    endOfWarranty: yup
        .date("Formato de data invalido")
})

export { schema as assetSchema }