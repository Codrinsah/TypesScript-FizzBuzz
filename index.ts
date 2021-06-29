function printNumbers(limit: number): void {
    for (const value of Array(limit).fill(0).map((_, index) => index + 1)) {
        printValue(value)
    }
}

function printValue(value: number) {
    if (value % 15 == 0) {
        console.log("FizzBuzz")
    } else if (value % 5 == 0) {
        console.log("Buzz")
    } else if (value % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(value)
    }
}

printNumbers(100)
