function fitsInOneBox(boxes) {
    // Cannot be splitted into more functions
    boxes.sort((a, b) => {
        if (a.l < b.l) return -1
        if (a.l > b.l) return 1
        return 0
    })
    for (let i = 1; i < boxes.length; i++) {
        const prevBox = boxes[i - 1]
        const currentBox = boxes[i]
        if (
            prevBox.l === currentBox.l ||
            prevBox.w === currentBox.w ||
            prevBox.h === currentBox.h
        )
            return false

        if (prevBox.w > currentBox.w || prevBox.h > currentBox.h) return false
    }
    return true
}

/*

Score: 10
2,250 ops/s (Higher is better)
Cognitive complexity: 4 (Lower is better)

*/

function fitsInOneBox(boxes) {
    boxes.sort((a, b) => {
        if (a.l < b.l) return -1
        if (a.l > b.l) return 1
        return 0
    })
    let fits = boxes.reduce((prevBox, currentBox, _, arr) => {
        if (
            prevBox.l === currentBox.l ||
            prevBox.w === currentBox.w ||
            prevBox.h === currentBox.h
        ) {
            arr.splice(1)
            return false
        }
        if (prevBox.w > currentBox.w || prevBox.h > currentBox.h) {
            arr.splice(1)
            return false
        }

        return currentBox
    })

    fits = Boolean(fits)
    return fits
}

/*

Score: 29
2,430 ops/s (Higher is better)
Cognitive complexity: 1
(Lower is better)

*/
