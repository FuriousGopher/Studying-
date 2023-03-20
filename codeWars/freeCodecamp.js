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


////////////////////



const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Змініть код лише під цим рядком

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

////////////////////////////



const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Змініть код лише під цим рядком
const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;
// Змініть код лише над цим рядком


///////////////////////////////


const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// В ES6 ви можете взагалі видалити ключове слово function і двокрапку, коли визначаєте функції в об’єктах. Ось приклад такого синтаксису://

const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
/////////////

// Змініть код лише під цим рядком
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
// Змініть код лише над цим рядком

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Повинно показувати 'carrot'

///////////////////////////

// Змініть код лише під цим рядком
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(celsius) {
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Змініть код лише над цим рядком

const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм

/////////////////////////

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

Password cheking

//////////////