
let i = 0;
const realNumbers = (n) => {
    if (n <= 0) {
        return i
    }
    if (n % 2 && n % 3 && n % 5) {
        i++
    }
    return realNumbers(n - 1)
}

const num = realNumbers(20)
console.log(num)