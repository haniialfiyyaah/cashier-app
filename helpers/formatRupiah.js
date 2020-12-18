let formatRupiah=(price) => {
    return `Rp ${price.toLocaleString("id-ID")},00`
}

module.exports = formatRupiah