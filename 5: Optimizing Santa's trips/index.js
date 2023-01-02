/**
 * Calculate the max number of gift that can distribute based on max gifts and cities that can visit
 * @param {Number[]} giftsCities Array of cities' gifts numbers that should to distribute
 * @param {Number} maxGifts Max number of gifts that can carrie
 * @param {Number} maxCities Max number of cities can can visit each time
 * @returns Max number of gift that can distribute
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const getCombinations = (set, max, acc = [], iteration = 0) => {
        const combinations = []
        if (max - iteration === 1) {
            set.forEach((item) => combinations.push([...acc, item]))
            return combinations
        }
        for (let i = 0; i <= set.length - max + iteration; i++) {
            const newSet = set.slice(i + 1)
            const newAcc = [...acc, set[i]]
            combinations.push(
                ...getCombinations(newSet, max, newAcc, iteration + 1)
            )
        }

        return combinations
    }

    let highestNumGiftsToDistribute = 0

    // Get all combinations
    for (let cities = maxCities; cities > 0; cities--) {
        const combinations = getCombinations(giftsCities, cities)
        combinations.forEach((combination) => {
            const sum = combination.reduce((prev, current) => prev + current)
            if (sum <= maxGifts && sum > highestNumGiftsToDistribute)
                highestNumGiftsToDistribute = sum
        })
    }

    return highestNumGiftsToDistribute
}

/*

Score: 80
50 ops/s (Higher is better)
Cognitive complexity: 10 (Lower is better)

*/
