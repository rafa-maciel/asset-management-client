function handleBadRequestError(error, cb) {
    if (error && error.response && error.response.status === 400 && error.response.data ) {
        var resp = error.response.data
        var newErrors = {}
        resp.errors.forEach(fieldErrorString => {
            let fieldError = fieldErrorString.split(": ");
            newErrors[fieldError[0]] = fieldError[1]
        });

        cb(newErrors)
    }
}

export { handleBadRequestError }