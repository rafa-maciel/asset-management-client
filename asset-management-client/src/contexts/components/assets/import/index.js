import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import XLSX from 'xlsx'
import { importAssets } from "../../../../adapters/assets";
import { searchContracts } from "../../../../adapters/contract";
import { searchInvoices } from "../../../../adapters/invoices";
import { searchLocations } from "../../../../adapters/locations";
import { searchModels } from "../../../../adapters/models";
import { searchUsers } from "../../../../adapters/user";

function useAssetImportForm(onSuccessImport) {
    const [file, setFile] = useState(null)
    const [data, setData] = useState([])
    const [assets, setAssets] = useState(null)
    const history = useHistory()

    const handleFiles = e => {
        var files = e.target.files
        if (files) {
            setFile(files[0])
        }
    }

    const removeAsset = index => {
        if(assets) {
            var listAssets = assets.filter((value, i, arr) => i !== index)
            setAssets(listAssets)
        }
    }

    const importAssetToAPI = () => {
        var assetsWithoutErrors = assets
            .filter(asset => asset.errors.length === 0)
            .map((asset, i) => {
                var dateStrArr = asset.endOfWarranty.split("/")
                var dateParsed = new Date(dateStrArr[1] + "/" + dateStrArr[0] + "/" + dateStrArr[2])
                asset.endOfWarranty = dateParsed

                return asset
            })

        console.log(assetsWithoutErrors)
        importAssets(assetsWithoutErrors)
            .then(resp => {
                console.log(resp)
                redirectToList()
            })
    }

    const redirectToList = () => {
        var message = {
            'type': 'success',
            'title': 'Ativos Importados!',
            'message': 'A lista de ativos foi importada com sucesso'
        }

        history.push({
            pathname: '/assets',
            state: { message }
        })
    }

    useEffect(() => {
        if (file) {
            console.log('converting file')
            var reader = new FileReader()
            reader.onload = e => {
                /* Parse data */
                const bstr = e.target.result
                const wb = XLSX.read(bstr, {type : "array"})

                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];

                /* Convert array of arrays */
                const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
                setData(jsonData)
            }

            reader.readAsArrayBuffer(file)
        }
    }, [ file, onSuccessImport ])

    useEffect(() => {
        if (data.length > 0) {
            var assetList = data
                .filter((v, i) => i > 0 && v.length > 0) // // Ignore fist row HEADER and empty lines
                .map((value, i) => {
                    console.log(value)
                    return sheetLineToAssetJSON(value)
                })
                .map((asset, i) => checkForAssetErrorsFields(asset));

            Promise.all(assetList).then(values => {
                setAssets(values)
            })

        }
    }, [ data ])

    return [handleFiles, assets, removeAsset, importAssetToAPI]
}

const checkForAssetErrorsFields = async (asset) => {
    console.log(asset)
    const errors = []

    const isValidDate = date => {
        var dateStrArr = date.split("/")
        var dateParsed = new Date(dateStrArr[1] + "/" + dateStrArr[0] + "/" + dateStrArr[2])
        console.log(dateParsed)
        return (dateParsed !== "Invalid Date") && !isNaN(dateParsed);
    }

    if (!asset.owner.re || asset.owner.re < 1) {
        errors.push('O RE do responsável não é valido')
    } else {
        var userSearch = await searchUsers({ 're':asset.owner.re })
        if (userSearch.content[0]) {
            asset.owner = userSearch.content[0]
            asset.ownerId = asset.owner.id
        } else
            errors.push('Não foi encontrado um responsável com este re')
    }

    if (!asset.location.title || asset.location.title.length < 2 || asset.location.title.length > 30) {
        errors.push('O Titulo da localização não é valido')
    } else {
        var locSearch = await searchLocations({ 'title':asset.location.title })
        if (locSearch.content[0]) {
            asset.location = locSearch.content[0]
            asset.locationId = asset.location.id
        } else
            errors.push('Não foi encontrado uma localização com este titulo')
    }

    if (!asset.model.title || asset.model.title.length < 2 || asset.model.title.length > 30) {
        errors.push('O Titulo do modelo não é valido')
    } else {
        var modSearch = await searchModels({ 'title':asset.model.title })
        if (modSearch.content[0] ) {
            asset.model = modSearch.content[0]
            asset.modelId = asset.model.id
        } else
            errors.push('Não foi encontrado um modelo com este titulo')
    }

    if (asset.contract.number) {
        var contractContent = await searchContracts({ 'number': asset.contract.number })
        if (contractContent.content[0]) {
            asset.contract = contractContent.content[0]
            asset.contractId = asset.contract.id
        } else {
            errors.push('Não foi encontrado um contrato com este número')
        }
    }

    if (asset.invoice.number) {
        var invoiceContent = await searchInvoices({ 'number': asset.invoice.number })
        if (invoiceContent.content[0]) {
            asset.invoice = invoiceContent.content[0]
            asset.invoiceId = asset.invoice.id
        } else {
            errors.push('Não foi encontrado uma nota fiscal com este número')
        }
    }

    if (asset.companyIdentification.length > 60)
        errors.push('A Identificação do ativo não é valido')
    
    var validStatus = ['ACTIVE', 'DISABLE', 'DESTROYED', 'BROKEN', 'RETIRED']
    if (!asset.status || !validStatus.includes(asset.status))
        errors.push('O campo status não é valido | status validos ' + validStatus.toString())
    
    if (asset.chipIdentification && asset.chipIdentification.length > 60)
        errors.push('A identificação do chip não é valida')
    
    if (asset.lineIdentification && asset.lineIdentification.length > 60)
        errors.push('A Linha do chip não é valida')
    
    if (asset.endOfWarranty && !isValidDate(asset.endOfWarranty)) {
        errors.push('A data de final de garantia não é valida')
    }

    console.log(asset.endOfWarranty)


    asset.errors = errors

    return asset
}

const sheetLineToAssetJSON = value => {
    return {
        'serialNumber': value[0],
        'hostname': value[1],
        'tag': value[2],
        'imei': value[3],
        'endOfWarranty': value[4],
        'companyIdentification': value[5],
        'status': value[6],
        'owner': {
            're': value[7]
        },
        'location': {
            'title': value[8]
        },
        'model': {
            'title': value[9]
        },
        'chipIdentification': value[10],
        'lineIdentification': value[11],
        'contract': {
            'number': value[12],
        },
        'invoice': {
            'number': value[13],
        }
    }
}

export { useAssetImportForm }