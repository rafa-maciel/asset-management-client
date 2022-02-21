import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { downloadFile } from '../../../adapters/files';
import { FileDelete } from '.';

import DeleteIcon from '@material-ui/icons/Delete';
import GetApp from '@material-ui/icons/GetApp';

export default function FileList({ files, onDelete }) {
    const [fileSelected, setFileSelected] = useState(null)
    const [showDelDialog, setShowDelDialog] = useState(false)

    const handleClickDelete = file => {
        setFileSelected(file)
        setShowDelDialog(true)
    }

    const handleDelete = file => {
        setShowDelDialog(false)
        onDelete(file)
    }

    const handleDownload = fileId => {
        downloadFile(fileId)
            .then(resp => {
                const url = window.URL.createObjectURL(resp);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', resp.type); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
    }

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Titulo do Arquivo</TableCell>
                        <TableCell>Nota</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { !files ? null : files.map((file, index) => (
                        <TableRow key={index}>
                            <TableCell>{file.name}</TableCell>
                            <TableCell>{file.note}</TableCell>
                            <TableCell>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="secondary"
                                    onClick={ () => handleClickDelete(file) }
                                    startIcon={ <DeleteIcon /> }>
                                    Deletar
                                </Button>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={ () => handleDownload(file.id) }
                                    startIcon={ <GetApp /> }>
                                    Baixar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <FileDelete
                file={ fileSelected }
                showDialog={ showDelDialog }
                onCloseDialog={ () => setShowDelDialog(false) }
                onDelete={handleDelete} />
                
        </>
    )
}