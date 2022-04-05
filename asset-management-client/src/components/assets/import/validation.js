import * as yup from "yup";

import { parse } from 'date-fns'

const convertStatusLabel = (value, orignalValue)  => {
    const statusEnum = {
        Ativo: 'ACTIVE',
        'No Estoque': 'IN_STOCK',
        Quebrado: 'BROKEN', 
        Emprestado: 'LOANED',
        Retirado: 'RETIRED'
    }
    
    return statusEnum[orignalValue]
}

yup.addMethod(yup.string, "dateString", function(errorMessage) {
    return this.test("test-date-string", errorMessage, function(value) {
        const { path, createError } = this;

        var dt = parse(value, "dd/MM/yyyy", new Date())
        if (dt instanceof Date && !isNaN(dt)) return true

        return createError({ path, errorMessage })
    });
});

const schema = yup.object().shape({
    ownerRe: yup
        .number()
        .typeError("O RE do responsável dever ser númerico")
        .min(1, 'Este usuário não é valido')
        .required('O RE é obrigatório'),
    locationTitle: yup
        .string()
        .required('O titulo da localização é obrigatório'),
    modelTitle: yup
        .string()
        .required('O titulo do modelo é obrigatório'),
    contractNumber: yup
        .string(),
    invoiceNumber: yup
        .number()
        .typeError("O número de nota fiscal dever ser númerico"),
    hostname: yup
        .string()
        .max(30, 'O hostname deve conter no máximo 30 caracteres'),
    serialNumber: yup
        .string()
        .max(50, 'O Número de Série deve conter no máximo 50 caracteres'),
    tag: yup
        .string()
        .max(10, 'A TAG deve conter no máximo 10 caracteres'),
    imei: yup
        .string()
        .max(20, 'O IMEI deve conter no máximo 20 caracteres'),
    companyIdentification: yup
        .number()
        .typeError("O Ativo dever ser númerico")
        .max(999999, 'O número maximo permitido para o Ativo é 999999'),
    status: yup
        .string()
        .transform(convertStatusLabel)
        .oneOf(['ACTIVE', 'IN_STOCK', 'BROKEN', 'LOANED', 'RETIRED'], 'Opção de status não valida')
        .required('O Status é obrigatório'),
    chipIdentification: yup
        .string()
        .max(30, 'O chip deve conter no máximo 30 caracteres'),
    lineIdentification: yup
        .string()
        .max(18, 'A linha deve conter no máximo 18 caracteres'),
    endOfWarranty: yup
        .string()
        .dateString("Formato de data invalido")
})

export { schema as assetImportSchema }