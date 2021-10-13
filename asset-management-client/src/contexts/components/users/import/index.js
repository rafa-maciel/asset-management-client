import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import XLSX from 'xlsx'
import { importUsers } from "../../../../adapters/user";

function useUserImportForm(onSuccessImport) {
    const [file, setFile] = useState(null)
    const [data, setData] = useState([])
    const [users, setUsers] = useState(null)
    const history = useHistory()

    const handleFiles = e => {
        var files = e.target.files
        if (files) {
            setFile(files[0])
        }
    }

    const removeUser = index => {
        if(users) {
            var listUsers = users.filter((value, i, arr) => i !== index)
            setUsers(listUsers)
        }
    }

    const importUsersToAPI = () => {
        var usersWithoutErrors = users.filter(user => user.errors.length === 0)
        importUsers(usersWithoutErrors)
            .then(resp => {
                console.log(resp)
                redirectToList()
            })
    }

    const redirectToList = () => {
        var message = {
            'type': 'success',
            'title': 'Usuários Importados!',
            'message': 'A lista de usuários foi importada com sucesso'
        }

        history.push({
            pathname: '/users',
            state: { message }
        })
    }

    useEffect(() => {
        if (file) {
            console.log('converting file')
            var reader = new FileReader()
            reader.onload = e => {
                /* Parse data */
                const bstr = e.target.result
                const wb = XLSX.read(bstr, {type : "array"})

                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];

                /* Convert array of arrays */
                const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
                setData(jsonData)
            }

            reader.readAsArrayBuffer(file)
        }
    }, [ file, onSuccessImport ])

    useEffect(() => {
        if (data) {
            // Ignore fist row
            delete data[0]

            var userList = data.map( (value, index) => {
                return {
                    'name': value[0],
                    're': value[1],
                    'department': value[2],
                    'status': value[3]
                }
            }).map((user, index) => checkErrors(user));
            setUsers(userList)

        }
    }, [ data ])

    const checkErrors = user => {
        const errors = []
        if (!user.name || user.name.length < 3 || user.name.length > 50)
            errors.push('O campo nome não é valido (deve conter entre 3 e 50 caracteres)')
        
        if (!user.re || isNaN(user.re))
            errors.push('O Campo RE não pode ser nulo e só deve conter números')

        if (!user.department || user.department.length < 1 || user.department.length > 50)
            errors.push('O campo departamento não é valido (deve conter entre 1 e 50 caracteres)')
        
        var validStatus = ['ACTIVE', 'INACTIVE', 'LICENSE']
        if (!user.status || !validStatus.includes(user.status))
            errors.push('O campo status não é valido | status validos ' + validStatus.toString())
        
        user.errors = errors

        return user
    }


    return [handleFiles, users, removeUser, importUsersToAPI]
}

export {useUserImportForm}