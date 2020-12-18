
let generateInvoice = () => {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDay()
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    month = month.toString().length < 2 ? month = `0${month}` : month
    day = day.toString().length < 2 ? day = `0${day}` : day

    return `TF/${year}/${month}${day}/${h}${m}${s}`
}

module.exports = generateInvoice