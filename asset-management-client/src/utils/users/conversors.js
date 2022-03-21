const formatUserStatus = (status) => {
    // ACTIVE, LICENSE, INACTIVE
    switch (status) {
        case "ACTIVE":
            return "Ativo"

        case "LICENSE":
            return "Em Licença"

        case "INACTIVE":
            return "Inativo"

        default:
            return null
    }
}

export { formatUserStatus }
