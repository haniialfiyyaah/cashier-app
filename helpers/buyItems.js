const fs = require('fs')
let writeData = (data) => {
    fs.writeFileSync('./files/carts.json',JSON.stringify(data, null, 2))
}
let getData = () => {
    return JSON.parse(fs.readFileSync('./files/carts.json','utf-8'))
}
let buyItems = (item, quantity, select) => {
    let listData = getData();
    let obj = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
        total: 0
    }
    let data = listData.find(data => data.id === item.id)
    data ? data.quantity += quantity : listData.push(obj)
    listData.map(data => data.id === item.id && (data.total = data.price * data.quantity) )
    writeData(listData)
}

let cancel = (id) => {
    let listData = getData();
    let newList = []
    listData.map(data => {
        data.id !== id && newList.push(data)
    })
    // console.log(newList);
    writeData(newList)
}

let destroy = () => {
    writeData([])
}

// cancel(2)
// console.log(getData());
module.exports = {getData, buyItems, cancel, destroy}
