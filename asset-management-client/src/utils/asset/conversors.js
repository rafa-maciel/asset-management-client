const formatAssetStatus = (status) => {
    // ACTIVE, IN_STOCK, BROKEN, LOANED, RETIRED
    switch (status) {
        case "ACTIVE":
            return "Ativo"

        case "IN_STOCK":
            return "No Estoque"

        case "BROKEN":
            return "Quebrado"

        case "LOANED":
            return "Emprestado"

        case "RETIRED":
            return "Retirado / Aposentado"

        default:
            return null
    }
}

export { formatAssetStatus }
