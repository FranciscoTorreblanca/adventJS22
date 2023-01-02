function distributeGifts(packOfGifts, reindeers) {
    // pack weight is the sum of every gift string length
    const packWeight = packOfGifts.reduce(
        (weight, gift) => weight + gift.length,
        0
    )
    // reindeers' capacity is the sum of two times the reindeer's name
    const reindeersCapacity = reindeers.reduce(
        (capacity, reindeer) => capacity + reindeer.length * 2,
        0
    )
    // The max number of packs to deliver is the reinders' capacity between pack's
    const maxNumberOfPacksForDelivery = Math.floor(
        reindeersCapacity / packWeight
    )
    return maxNumberOfPacksForDelivery
}

/*

Score: 123
2,982 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)

*/
