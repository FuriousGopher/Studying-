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

//////////////////////////////
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false; // the walk is not 10 minutes long
    }

    let x = 0;
    let y = 0;

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'e':
                x++;
                break;
            case 'w':
                x--;
                break;
            default:
                return false;
        }
    }

    return x === 0 && y === 0;
}
//////////////////////////

function simpleMultiplication(number) {
    if (number % 2 == 0) {
        return number * 8;
    }

    else {
        return number * 9;
    }

}
//////////////////

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});

///////////////////////////

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});


///////////////////////

// complete the function
function solution(string) {
    return string.replace(/[A-Z]/g, " $&");
}

////////////////////
function highAndLow(numbers) {
    var arr = numbers.split(' ');
    var max = arr[0], min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) > max) {
            max = arr[i];
        }
        if (parseInt(arr[i]) < min) {
            min = arr[i]
        }
    }
    var result = max + ' ' + min;
    return result;
}