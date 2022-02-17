import jwt_decode from 'jwt-decode'

const token_ref = "tkapi"
const token_ref_timeExpiration = "tkapi_exp"
const token_ref_type = "tkapi_type"

class AuthUser {
    constructor(id, name, profile) {
        this._id = id
        this._name = name
        this._profile = profile
    }

    hasAdminAccess() {
        return this._profile === "ADMIN"
    }

    hasITAccess() {
        return this._profile === "IT"
    }

    hasRHAccess() {
        return this._profile === "RH"
    }   
}

export default class AuthToken {
    constructor() {
        let strTime = localStorage.getItem(token_ref_timeExpiration)

        this._token = localStorage.getItem(token_ref)
        this._timeExp = strTime ? new Date(strTime) : undefined
        this._type = localStorage.getItem(token_ref_type)

        if (this.hasValidToken()) {
            var decoded = jwt_decode(this._token)
            this._authUser = new AuthUser(decoded.identification, decoded.name, decoded.profile)
        }
    }

    build(token, timeExp, type) {
        localStorage.setItem(token_ref, token)
        localStorage.setItem(token_ref_timeExpiration, timeExp)
        localStorage.setItem(token_ref_type, type)
    }

    clear() {
        localStorage.clear()
        document.location.href="/"
    }

    hasValidToken() {
        return this._token && this._timeExp && this._type && !this.tokenExpired()
    }

    tokenExpired() {
        return this._timeExp == null || this._timeExp < new Date()
    }

    milesecondsToExpireToken() {
        return this._timeExp - new Date()
    }

    get token() {
        return this._type + ' ' + this._token
    }

    get authUser() {
        return this._authUser
    }
}