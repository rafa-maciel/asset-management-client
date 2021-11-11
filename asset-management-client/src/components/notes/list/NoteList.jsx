import { Divider, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

export default function NoteList({ notes }) {

    return (
        <>
            <List>
                { !notes ? null : notes.map((note, index) => (
                    <>
                        <ListItem key={ index } >
                            <ListItemText 
                                primary={ note.text }
                                secondary={ new Date(note.date) + " por " + note.author.name }  />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </>
    )
}