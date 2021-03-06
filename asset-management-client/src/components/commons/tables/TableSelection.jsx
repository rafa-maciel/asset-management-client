import React, { useState }  from "react";
import { Checkbox, Grid, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Toolbar, Tooltip, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FilterListIcon from '@material-ui/icons/FilterList';
import EditIcon from '@material-ui/icons/Edit';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SearchIcon from '@material-ui/icons/Search';

import './style.css'

export default function TableSelection({ tableTitle, tableHeaders, tableRows, pagination, actionPaths }) {
    const [ selectedItems, setSelectedItems ] = useState([])
    const [ fastParameter, setFastParameter ] = useState("")

    const isSelected = id => selectedItems.indexOf(id) !== -1

    const handleClick = (event, id) => {
        const selectedIndex = selectedItems.indexOf(id)
        let newSelectedItems = []

        if (selectedIndex === -1 ) {
            newSelectedItems = newSelectedItems.concat(selectedItems, id)
        } else if ( selectedIndex === 0 )  {
            newSelectedItems = newSelectedItems.concat(selectedItems.slice(1))
        } else if ( selectedIndex === selectedItems.length -1 ) {
            newSelectedItems = newSelectedItems.concat(selectedItems.slice(0, -1))
        } else if ( selectedIndex > 0 ) {
            newSelectedItems = newSelectedItems.concat(
                selectedItems.slice(0, selectedIndex),
                selectedItems.slice(selectedIndex + 1)
            );
        }

        setSelectedItems(newSelectedItems)
    }

    return (
        <>
            <Paper>
                <TableToolbar 
                    numSelected={ selectedItems.length } 
                    tableTitle={ tableTitle } 
                    actionPaths={ actionPaths } 
                    selected={ selectedItems[0] }
                    fastParameter={fastParameter}
                    setFastParameter={setFastParameter} />
                <TableContainer>
                    <Table >
                        <TableHeader data={ tableHeaders } />
                        <TableBody>
                            { tableRows ? tableRows.map( (row, index) => {
                                const isItemSelected = isSelected(row.id)
                                const labelId = `table-checkbox-${row.id}`

                                return (
                                    <TableRow
                                        hover
                                        onClick={event => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId}} />
                                            </TableCell>

                                        { Object.entries(row).filter(([key, value]) => key !== 'id').map(([key, value]) => (
                                            <TableCell key={key}>
                                                { value }
                                            </TableCell>
                                        ))}    
                                    </TableRow>
                                )
                            }) : null }                        
                        </TableBody>
                        { pagination && pagination.page ? (
                            <TableFooter>
                                <TableRow>
                                    <TablePagination 
                                        rowsPerPageOptions={pagination.page.rowsPerPageOptions} 
                                        count={pagination.page.totalElements}
                                        rowsPerPage={pagination.page.pageSize}
                                        page={pagination.page.pageNumber}
                                        onPageChange={(event, number) => pagination.changePage(number) }
                                        onRowsPerPageChange={event => pagination.changeRowsPerPage(event.target.value)}
                                        />
                                </TableRow>
                            </TableFooter>
                        ) : null}
                    </Table>
                </TableContainer>
            </Paper>
            
        </>
    )
}

const TableToolbar = ({ numSelected, tableTitle, actionPaths, selected, fastParameter, setFastParameter }) => {
    function hasDetailsOption(details) {
        if (details) {
            return (
                <Tooltip title="details" >
                    <IconButton aria-label="Detalhes" 
                        disabled={numSelected > 1}
                        component={ Link }
                        to={{
                            pathname: details,
                            state: { 'id': selected }
                        }}>
                        <ListAltIcon />
                    </IconButton>
                </Tooltip>
            )
        }

        return null
    }

    function hasImportOption(importData) {
        if (importData) {
            return (
                <Tooltip title="import" >
                    <IconButton aria-label="Importar" 
                        component={ Link }
                        to={{
                            pathname: importData
                        }}>
                        <CloudUploadIcon />
                    </IconButton>
                </Tooltip>
            )
        }

        return null
    }
    
    function hasFastSearchOption(fastSearch) {
        if (fastSearch) {
            return (
                <Paper style={{display:"flex", width:"400px"}}>
                    <InputBase style={{width:"400px", padding:"3px"}}
                    value={fastParameter}
                        placeholder="Pesquisa por Hostname, Respons??vel, SN, TAG"
                        inputProps={{ 'aria-label': 'pesquisa rapida' }} onChange={ e => setFastParameter(e.target.value)}/>
                    <IconButton type="button" aria-label="search" onClick={ () => actionPaths.onFastSearchClick(fastParameter) } style={{flex:"max-content"}}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            )
        }
    }

    return (
        <Toolbar>   
            <Grid container spacing={2}>
                <Grid item xs={10} align="flex-end">
                    { numSelected > 0 ? (
                        <Typography variant="subtitle1" component="div">
                            { numSelected } items selecionados
                        </Typography>
                    ) : (
                        <>
                            <Typography variant="h4" component="div">
                                { tableTitle }
                            </Typography>
                            { hasFastSearchOption( actionPaths.fastSearch )}
                        </>
                    )}
                </Grid>
                <Grid item xs={2}>
                    {numSelected > 0 ? (
                        <>
                            <Tooltip title="Delete" align="right">
                                <IconButton aria-label="Remover" 
                                    disabled={numSelected > 1}
                                    component={ Link }
                                    to={{
                                        pathname: actionPaths.delete,
                                        state: { 'id': selected }
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                            
                            <Tooltip title="Editar" >
                                <IconButton aria-label="Editar" 
                                    disabled={numSelected > 1}
                                    component={ Link }
                                    to={{
                                        pathname: actionPaths.update,
                                        state: { 'id': selected }
                                    }}>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>

                            { hasDetailsOption(actionPaths.details) }
                        </>
                    ) : (
                        <>
                            <Tooltip title="Filtrar Lista">
                                <IconButton aria-label="Filtrar Lista" onClick={ actionPaths.onFilterClick }>
                                    <FilterListIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Novo">
                                <IconButton aria-label="Novo" component={ Link } to={ actionPaths.create }>
                                    <AddCircleIcon />
                                </IconButton>
                            </Tooltip>

                            { hasImportOption(actionPaths.import) }
                        </>
                    )}
                </Grid>
            </Grid>
        </Toolbar>
    )
}

const TableHeader = ( {data} ) => {    
    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        
                    </TableCell>

                    { data ? data.map(( headCell, index ) => (
                        <TableCell

                            key={ index }
                            align={ headCell.numeric ? 'right' : 'left' }>
                                { headCell.label }
                        </TableCell>
                    )) : null }
                </TableRow>
            </TableHead>
        </>
    )
}