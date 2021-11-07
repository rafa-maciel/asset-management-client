import { useHistory } from "react-router-dom"

function useAssetCreatePageContext() {
    const history = useHistory()

    const onAssetCreate = asset => {
        var message = {
            'type': 'success',
            'title': 'Ativo Criado',
            'message': 'O Ativo de identificação [ ' + asset.companyIdentification + ' ] foi criado com sucesso'
        }

        history.push({
            pathname: '/assets',
            state: { message }
        })
    }

    return [ onAssetCreate ]
}

export { useAssetCreatePageContext }