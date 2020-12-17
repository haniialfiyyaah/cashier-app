const fs = require('fs')

const readFileTxt = (filePath) => {
    let datas = fs.readFileSync(filePath, 'utf-8').split('\n')
    let listData = []
    for (let i = 1; i < datas.length; i++) {
        let obj = {}
        let data = datas[i].split(',')
        let title = datas[0].split(',')
        title.forEach((el, i) => {
            obj[el] = data[i]
        });
        listData.push(obj)
    }
    return listData
}

module.exports = readFileTxt