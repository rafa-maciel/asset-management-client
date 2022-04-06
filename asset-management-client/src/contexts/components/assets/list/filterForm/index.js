import { useForm } from "react-hook-form";

function useAssetFilterForm() {
    const { handleSubmit, control, reset  } = useForm();

    const resetForm = () => {
        reset({
            hostname: "",
            serialNumber: "",
            ownerName: "",
            ownerRE: "",
            modelTitle: "",
            modelType: "",
            locationTitle: "",
            companyIdentification: "",
            contractNumber: "",
            contractVendor: "",
            status: "",
            chipIdentification: "", 
            contractVendorCNPJ: "", 
            lineIdentification: "", 
            tag: "", 
            endOfWarranty: "", 
            endOfWarrantyMax: "", 
            modeSearchEndOfWarranty: ""
        })
    }

    return [ handleSubmit, control, resetForm ]
}

export { useAssetFilterForm }