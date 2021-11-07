import { Button, Grid } from '@material-ui/core';
import React from 'react'
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils';

import SaveIcon from '@material-ui/icons/Save';
import { AssetLocationField, AssetOwnerField, AssetModelField, AssetCompanyIdentificationField, AssetStatusField, AssetChipIdentificationField, AssetLineIdentificationField } from './AssetFormFields';

export default function AssetForm({ 
    onValidFormSubmit, 
    ownerId, onChangeOwnerId, 
    companyIdentification, onChangeCompanyIdentification, 
    modelId, onChangeModelId, 
    locationId, onChangeLocationId, 
    status, onChangeStatus, 
    chipIdentification, onChangeChipIdentification, 
    lineIdentification, onChangeLineIdentification}) {

    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    const handleSubmit = e => {
        e.preventDefault()
        if (!invalidForm)
            onValidFormSubmit()
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <AssetOwnerField 
                            ownerId={ownerId} 
                            onChange={ onChangeOwnerId } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AssetLocationField 
                            locationId={locationId} 
                            onChange={ onChangeLocationId } />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <AssetModelField 
                            modelId={modelId} 
                            onChange={ onChangeModelId } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AssetCompanyIdentificationField
                            companyIdentification={ companyIdentification }
                            onChange={ onChangeCompanyIdentification }
                            onValidChange={ v => checkInvalidField(v, 'companyIdentification') } />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <AssetStatusField 
                            status={ status }
                            onChange={ onChangeStatus } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AssetChipIdentificationField 
                            chipIdentification={ chipIdentification }
                            onChange={ onChangeChipIdentification } />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <AssetLineIdentificationField 
                            lineIdentification={ lineIdentification }
                            onChange={ onChangeLineIdentification } />
                    </Grid>
                    
                    
                    <Grid item>
                        <Button type="submit"
                            fullWidth
                            size="medium"
                            disabled={ invalidForm }
                            variant="contained"
                            color="primary"
                            startIcon={ <SaveIcon /> }>
                                Salvar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}