import { Dialog, DialogContent, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { findFilesByAsset } from '../../../adapters/files'
import { FileCreate, FileList, FileNav } from '../../../components/files/dashboard'

export default function FileDashboard({ assetId }) {
    const [files, setFiles] = useState([])
    const [showAddDialog, setShowAddDialog] = useState(false)

    useEffect(() => {
        if (assetId) {
            findFilesByAsset(assetId)
                .then(filesList => setFiles(filesList))
        }
    }, [ assetId ])

    const handleCreateFile = file => {
        var filesList = [...files]
        filesList.push(file)
        setShowAddDialog(false)
        setFiles(filesList)
    }

    const handleDeleteFile = file => {
        var filesList = files.filter((f, index) => f.id !== file.id)
        setFiles([...filesList])
    }

    return (
        <>
            <FileNav onClickAddFile={ () => setShowAddDialog(true) }/>
            <FileList
                assetId={ assetId }
                files={files}
                onDelete={ handleDeleteFile }/>

            <Dialog open={ showAddDialog } onClose={ () => setShowAddDialog(false) }>
                <DialogContent>
                    <Grid container spacing={3}>
                        <FileCreate 
                            assetId={ assetId }
                            onCreate={ handleCreateFile } />
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}