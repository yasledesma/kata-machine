export default function two_crystal_balls(breaks: boolean[]): number {
    let iStart = 0
    let iDiff = Math.floor(Math.sqrt(breaks.length))
    let cb = 2


    while (cb > 1 && iDiff < breaks.length) {
        if (!breaks[iDiff]) {
            iStart = iDiff + 1
            iDiff += iDiff + 1
            continue
        }

        cb -= 1
        break
    }

    if (cb > 0) {
        for (let i = iStart; i < iDiff; i++) {
            if (breaks[i]) return i
        }
    }

    return -1
}
