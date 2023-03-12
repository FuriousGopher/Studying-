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


