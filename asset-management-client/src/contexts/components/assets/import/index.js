import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import XLSX from 'xlsx'
import { checkAssetsBeforeImport, importAssets } from "../../../../adapters/assets";
import { assetImportSchema as schema } from "../../../../components/assets/import/validation";



function useAssetImportForm(onSuccessImport) {
    const [file, setFile] = useState(null)
    const [data, setData] = useState([])
    const [dataErrors, setDataErrors] = useState([])
    const [assets, setAssets] = useState(null)
    const [loading, setLoading] = useState(false)
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
        importAssets(assets)
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
            setLoading(true)
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
        if (!data || data.length < 1) return null
        const [validData, invalidData] = validateSheetData(data)
        
        checkAssetsBeforeImport(validData)
            .then(resp => {
                setDataErrors([...invalidData, ...resp.invalidAssets])
                setAssets([...resp.validAssets])
                setLoading(false)
                
            })
    }, [ data ])

    return [handleFiles, assets, removeAsset, importAssetToAPI, loading, dataErrors]
}

const validateSheetData = (data) => {
    var validData = []
    var invalidData = []

    data
        .filter((v, i) => i > 0 && v.length > 0) // // Ignore fist row HEADER and empty lines
        .map((value, i) => sheetLineToAssetJSON(value)) // Format data to JSON
        .map(assetData => { // check for valid or invalid fields
            try {
                return schema.validateSync(assetData, { abortEarly: false })
            } catch ( errors ) {
                const listErrors = []

                errors.inner.forEach(({ errors, path, value}) => {
                    listErrors.push({
                        name: path,
                        message: errors[0]
                    })
                })

                assetData.fieldErrors = listErrors
                return assetData
            }
        }).forEach(assetData => {
            if ("fieldErrors" in assetData)
                invalidData = [...invalidData, assetData]
            else 
                validData = [...validData, assetData]
        })

    
    return [ validData, invalidData ]
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
        'ownerRe': value[7],
        'locationTitle': value[8],
        'modelTitle': value[9],
        'chipIdentification': value[10],
        'lineIdentification': value[11],
        'contractNumber': value[12],
        'invoiceNumber': value[13]
    }
}

export { useAssetImportForm }