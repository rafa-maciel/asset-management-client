import { useEffect, useState } from "react"
import { searchAssets } from "../../../../adapters/assets"
import { useTablePageable } from "../../../commons/useTablePageable"

function useAssetTableContext( onFilterError ) {
    const [ assets, setAssets ] = useState(null)
    const [ filterParams, setFilterParams ] = useState(null)
    const [ page, setPage ] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchAssets(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])

    const onSearchSuccess = ( response ) => {
        var list = response.content.map(asset => {
            return {
                'id': asset.id,
                'hostname': asset.hostname,
                'tag': asset.tag,
                'serialNumber': asset.serialNumber,
                'companyIdentification': asset.companyIdentification,
                'imei': asset.imei,
                'endOfWarranty': asset.endOfWarranty,
                'chipIdentification': asset.chipIdentification,
                'lineIdentification': asset.lineIdentification,
                'model': asset.model.title,
                'modelType': asset.model.type,
                'owner': asset.owner.name,
                'location': asset.location.title,
                'invoice': asset.invoice ? asset.invoice.number : null,
                'contract': asset.contract ? asset.contract.number : null,
                'status': asset.status
            }
        })

        setAssets(list)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    const pagination = {
        page,
        changePage,
        changeRowsPerPage
    }

    const tableHeaders = [
        { 'numeric': false, 'label' : 'Hostname'},
        { 'numeric': false, 'label' : 'TAG '},
        { 'numeric': false, 'label' : 'SN '},
        { 'numeric': false, 'label' : 'Ativo '},
        { 'numeric': false, 'label' : 'IMEI '},
        { 'numeric': false, 'label' : 'Garantia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              '},
        { 'numeric': false, 'label' : 'Chip '},
        { 'numeric': false, 'label' : 'Linha'},
        { 'numeric': false, 'label' : 'Modelo '},
        { 'numeric': false, 'label' : 'Tipo '},
        { 'numeric': false, 'label' : 'Responsável '},
        { 'numeric': false, 'label' : 'Localização '},
        { 'numeric': false, 'label' : 'NF '},
        { 'numeric': false, 'label' : 'Contrato '},
        { 'numeric': false, 'label' : 'Status '},
    ]

    return [ assets, changeFilterParams, pagination, tableHeaders ]
}

export { useAssetTableContext }