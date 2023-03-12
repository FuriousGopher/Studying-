function sum(arr, n) {
    // Only change code below this line

    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }

    // Only change code above this line
}

//////////////////////

const s = [5, 7, 2];
function editInPlace() {
    // Змініть код лише під цим рядком

    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Змініть код лише над цим рядком
}
editInPlace();

///////////////////////////////

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Змініть код лише під цим рядком

    Object.freeze(MATH_CONSTANTS)
    // Змініть код лише над цим рядком
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

////////////////////


var magic = function () {
    return new Date();
};




const magic = () => new Date();

//////////////////////////


var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};



const myConcat = (arr1, arr2) => arr1.concat(arr2);







console.log(myConcat([1, 2], [3, 4, 5]));


///////////////////////////

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // 6


//////////////////

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Змініть цей рядок

console.log(arr2);