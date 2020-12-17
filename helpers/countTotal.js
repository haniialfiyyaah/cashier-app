const { getData } = require("./buyItems")

let countTotal = () => {
    let data = getData()
    let total = 0
    data.forEach(el => {
        total += +el.total
    });
    return total
}
// countTotal()
module.exports = countTotal