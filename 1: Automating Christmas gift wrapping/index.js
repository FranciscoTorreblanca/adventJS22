function wrapping(gifts) {
    return gifts.map((gift) => {
        const giftSize = gift.length
        // Cover paper should to cover whole gift + sides (left & right)
        const coverPaper = `*${"*".repeat(giftSize)}*`
        return `${coverPaper}\n*${gift}*\n${coverPaper}`
    })
}

module.exports = { wrapping }
