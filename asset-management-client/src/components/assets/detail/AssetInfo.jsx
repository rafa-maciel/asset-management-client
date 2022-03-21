import React from "react"
import { Grid, TextField } from '@material-ui/core'
import { useAssetInfo } from "../../../contexts/components/assets/details/useAssetInfo"

export default function AssetInfo({ asset }) {
    const [ assetData ] = useAssetInfo(asset)

    return (
        <>
            <Grid container spacing={3}>
                { assetData && 
                    Object.entries(assetData).map(([label, value]) => (
                        <Grid item xs={12} sm={6}>
                            <AssetDefaultField label={label} value={value} />
                        </Grid>
                        ))}   
            </Grid>
            
        </>
    )
}

function AssetDefaultField({ label, value }) {
    return (
        <TextField
            label={ label }
            defaultValue={ value }
            InputProps={{
                readOnly: true,
            }}
            fullWidth
            InputLabelProps={{ shrink: true }}
            />
    )
}
