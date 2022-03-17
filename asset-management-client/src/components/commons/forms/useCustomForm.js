import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function useCustomForm(schema, initialData, formArrErrors) {
    const { handleSubmit, control, register, setValue, setError  } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (initialData) {
            Object.entries(initialData).forEach(([key, value]) => { 
                if (key === "id") {
                    register(key, { value: value })
                } else {
                    setValue(key, value)
                }
             })
        }
    }, [ initialData ])

    useEffect(() => {
        if (formArrErrors) {
            Object.entries(formArrErrors).forEach(([key, value]) => { 
                setError(key, {
                    type: "manual",
                    message: value,
                })
            })
        }
    }, [ formArrErrors ])


    return [ handleSubmit, control ]
}

export { useCustomForm }