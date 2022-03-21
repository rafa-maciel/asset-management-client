import React, { useEffect, useState } from "react"
import { Divider, Grid, TextField, Typography } from '@material-ui/core'
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

function AssetInfoFields({ asset }) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Identificação"
                        defaultValue={ asset.companyIdentification }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Status"
                        defaultValue={ asset.status }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Chip ID"
                        defaultValue={ asset.chipIdentification }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Linha"
                        defaultValue={ asset.lineIdentification }
                        disabled={ true }
                        fullWidth/>
                </Grid>
            </Grid>

            <Divider />
            <Typography variant="h6">Responsável</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Nome"
                        defaultValue={ asset.owner.name }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="RE"
                        defaultValue={ asset.owner.re }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Departamento"
                        defaultValue={ asset.owner.department }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Status"
                        defaultValue={ asset.owner.status }
                        disabled={ true }
                        fullWidth/>
                </Grid>
            </Grid>
            <Divider />
            <Typography variant="h6">Modelo / Localização </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Modelo"
                        defaultValue={ asset.model.title }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Tipo"
                        defaultValue={ asset.model.type }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Marca"
                        defaultValue={ asset.model.brand }
                        disabled={ true }
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Localização"
                        defaultValue={ asset.location.title }
                        disabled={ true }
                        fullWidth/>
                </Grid>
            </Grid>
        </>
    )
}