import { useEffect, useState } from "react"
import { formatAssetStatus } from "../../../../utils/asset/conversors";

function useAssetInfo(asset) {
    const [ assetData, setAssetData ] = useState({})

    useEffect(() => {
        const getInvoiceValue = () => {
            if (!asset || !asset.invoice) return null;

            return `${asset.invoice.number} (${asset.invoice.vendor})`
        }

        const getContractValue = () => {
            if (!asset || !asset.contract) return null;

            return `${asset.contract.number} (${asset.contract.vendor})`
        }

        if (asset) {
            // Create asset data object with label and value in order to be showed
            var data = {
                "Hostname": asset.hostname,
                "Tag": asset.tag,
                "Número de Série": asset.serialNumber,
                "Ativo": asset.companyIdentification,
                "IMEI": asset.imei,
                "CHIP": asset.chipIdentification,
                "Linha": asset.lineIdentification,
                "Modelo": asset.model.title,
                "Responsável": asset.owner.name,
                "Localização": asset.location.title,
                "Nota Fiscal": getInvoiceValue(),
                "Contrato": getContractValue(),
                "Status": formatAssetStatus(asset.status),
                "Fim da Garantia": asset.endOfWarranty
            }

            setAssetData(data)
        }

    }, [ asset ])

    return [ assetData ]
}

export { useAssetInfo }