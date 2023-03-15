function nearestSq(n) {
    let root = Math.floor(Math.sqrt(n));
    let lowerSq = root ** 2;
    let upperSq = (root + 1) ** 2;

    if (n === lowerSq || n === upperSq) {
        return n;
    } else if (n < (lowerSq + upperSq) / 2) {
        return lowerSq;
    } else {
        return upperSq;
    }
}


////////////////////////

