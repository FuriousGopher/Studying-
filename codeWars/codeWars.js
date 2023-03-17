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

function filter_list(l) {
    let N = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            N.push(l[i])
        }
    }
    return N
}


//////////////////////////


function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}

////////////////////////////

function heron(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

/////////////////////////////

const doubleChar = (str) => str.split("").map(c => c + c).join("");