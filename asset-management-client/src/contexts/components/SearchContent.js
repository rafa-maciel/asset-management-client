class Page {
    constructor(data) {
        this.rowsPerPageOptions = [2, 5, 20, 50, 60 ]
        this.empty = data.empty
        this.first = data.first
        this.last = data.last
        this.number = data.number
        this.numberOfElements = data.numberOfElements
        this.pageNumber = data.pageable.pageNumber
        this.pageSize = data.pageable.pageSize
        this.paged = data.pageable.paged
        this.size = data.size
        this.totalElements = data.totalElements
        this.totalPages = data.totalPages

    }
}

export default class SearchContent {
    constructor(data) {
        this._content = data.content
        this._page = new Page(data)
    }

    get content() {
        return this._content
    }

    get page() {
        return this._page
    }
}