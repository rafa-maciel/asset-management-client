import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import XLSX from 'xlsx'
import { importAssets } from "../../../../adapters/assets";
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
        var assetsWithoutErrors = assets.filter(asset => asset.errors.length === 0)
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
    
    
    const checkErrorsOld = async (asset)  => {
        const errors = []

        const isValidDate = date => {
            return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
        }

        if (!asset.owner.re || asset.owner.re < 1) {
            errors.push('O RE do responsável não é valido')
        } else {
            var userSearch = await searchUsers({ 're':asset.owner.re })
            if (userSearch.content[0])
                asset.owner = userSearch.content[0]
            else
                errors.push('Não foi encontrado um responsável com este re')
        }

        if (!asset.location.title || asset.location.title.length < 2 || asset.location.title.length > 30) {
            errors.push('O Titulo da localização não é valido')
        } else {
            var locSearch = await searchLocations({ 'title':asset.location.title })
            if (locSearch.content[0])
                asset.location = locSearch.content[0]
            else
                errors.push('Não foi encontrado uma localização com este titulo')
        }

        if (!asset.model.title || asset.model.title.length < 2 || asset.model.title.length > 30) {
            errors.push('O Titulo do modelo não é valido')
        } else {
            var modSearch = await searchModels({ 'title':asset.model.title })
            if (modSearch.content[0] )
                asset.model = modSearch.content[0]
            else
                errors.push('Não foi encontrado um modelo com este titulo')
        }

        if (asset.companyIdentification.length > 60)
            errors.push('A Identificação do ativo não é valido')
        
        var validStatus = ['ACTIVE', 'DISABLE', 'DESTROYED', 'BROKEN', 'RETIRED']
        if (!asset.status || !validStatus.includes(asset.status))
            errors.push('O campo status não é valido | status validos ' + validStatus.toString())
        
        if (asset.chipIdentification.length > 60)
            errors.push('A identificação do chip não é valida')
        
        if (asset.lineIdentification.length > 60)
            errors.push('A Linha do chip não é valida')
        
        if (!asset.contract.startsAt && !isValidDate(asset.contract.startsAt)) 
            errors.push('A data de inicio do contrato não é valida')
        
        if (!asset.contract.endsAt && !isValidDate(asset.contract.endsAt)) 
            errors.push('A data de final do contrato não é valida')
        
        asset.errors = errors

        return asset
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
                .filter((v, i) => i > 0) // // Ignore fist row HEADER
                .map( (value, index) => {
                return {
                    'owner': {
                        're': value[0]
                    },
                    'location': {
                        'title': value[1]
                    },
                    'model': {
                        'title': value[2]
                    },
                    'companyIdentification': value[3],
                    'status': value[4],
                    'chipIdentification': value[5],
                    'lineIdentification': value[6],
                    'contract': {
                        'number': value[7],
                        'vendor': value[8],
                        'vendorCNPJ': value[9],
                        'startsAt': value[10],
                        'endsAt': value[11],
                    }
                }
            }).map((asseResp, index) => checkErrorsOld(asseResp));

            Promise.all(assetList).then(values => {
                setAssets(values)
            })

        }
    }, [ data ])

    return [handleFiles, assets, removeAsset, importAssetToAPI]
}

export { useAssetImportForm }