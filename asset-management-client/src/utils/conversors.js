function dateFormat(date) {
    var arrDate = date.split("/");
    return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`
}

export { dateFormat }