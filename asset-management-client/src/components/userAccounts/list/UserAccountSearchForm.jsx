import { Button, Dialog, DialogContent, DialogTitle, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function UserAccountSearchForm({ onFormSubmit, showModal, onCloseModal }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profile, setProfile] = useState("")
    const [enabled, setEnabled] = useState("")

    const profileOptions = ['', 'ADMIN', 'IT', 'RH']

    const handleFormSubmit = event => {
        event.preventDefault()
        var data = {
            email,
            name,
            profile,
            enabled
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setName('')
        setEmail('')
        setProfile('')
        setEnabled('')
    }

    return (
        <>
            <Dialog open={showModal} onClose={ onCloseModal }>
                <DialogTitle>Filtrar pesquisa de Contas de Clients</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <TextField 
                            label="E-mail" 
                            fullWidth
                            value={ email }
                            onChange={ e => { setEmail(e.target.value) }}/>

                        <TextField 
                            label="Nome" 
                            fullWidth
                            defaultValue={ name }
                            onChange={e => { setName(e.target.value) }}/>

                        <Select
                            fullWidth
                            label="Perfil"
                            value={ profile }
                            onChange={ e => { setProfile( e.target.value )}}>
                                
                                <MenuItem value="">--</MenuItem>
                                { profileOptions.map((val, index) => <MenuItem key={index} value={val}>{ val }</MenuItem>) }
                        </Select>

                        <Select
                            fullWidth
                            label="Status"
                            value={ enabled }
                            onChange={ e => { setEnabled( e.target.value )}}>
                                
                                <MenuItem value="">--</MenuItem>
                                <MenuItem value={false}>Inativos</MenuItem>
                                <MenuItem value={true}>Ativos</MenuItem>
                        </Select>

                        <Button type="submit">Filtrar Pesquisa</Button>
                        <Button type="button" onClick={() => { clear() }}>Limpar Campos</Button>
                    </form>
                </DialogContent>
                
            </Dialog>
        </>
    )

}