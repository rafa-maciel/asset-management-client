import React, { useEffect, useState } from 'react'
import { findNotesByAsset } from '../../../adapters/notes';
import { NoteCreateForm } from '../../../components/notes/create';
import { NoteList } from '../../../components/notes/list';

export default function NoteDashboard({ assetId }) {
    const [ notes, setNotes ] = useState(null)

    const handleCreate = note => {
        var listNotes = [note].concat([...notes]);
        setNotes(listNotes)
    }

    useEffect(() => {
        if (assetId) {
            findNotesByAsset(assetId)
                .then(listNotes => {
                    setNotes(listNotes.reverse())
                })
        }
    }, [ assetId ])
    
    return (
        <>
            <NoteCreateForm
                assetId={ assetId }
                onCreate={ note => handleCreate(note) } />

            <NoteList 
                notes={ notes } />
        </>
    )
}