import SearchContent from "../../contexts/components/utils/SearchContent"
import { doDelete, get, post, put, search } from "../xhr"


export function searchInvoices( params ) {
    return search("/invoices/search", params)
        .then(data => new SearchContent(data))
}

export function createNewInvoice(invoice) {
    var url = "/invoices"
    return post(url, invoice)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findInvoice( invoiceId ) {
    var url = "/invoices/" + invoiceId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}


export function findInvoiceByAsset( assetId ) {
    var url = "/assets/" + assetId + "/contract"
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateInvoice(invoiceId, invoice ) {
    var url = "/invoices/" + invoiceId
    return put(url, invoice)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteInvoice(invoiceId) {
    var url = "/invoices/" + invoiceId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}