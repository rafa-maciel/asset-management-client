import { useForm } from "react-hook-form";

function useAssetFilterForm() {
    const { handleSubmit, control, reset  } = useForm();

    return [ handleSubmit, control, reset ]
}

export { useAssetFilterForm }