import * as readline from 'readline'

function printNumbers(limit: number): void {
    for (const value of Array(limit).fill(0).map((_, index) => index + 1)) {
        printValue(value)
    }
}

function printValue(value: number) {
    let reprez: String[] = []

    if (value % 3 == 0) {
        reprez.push("Fizz")
    }
    if (value % 5 == 0) {
        reprez.push("Buzz")
    }
    if (value % 7 == 0) {
        reprez.push("Bang")
    }
    if (value % 11 == 0) {
        reprez = ["Bong"]
    }
    if (value % 13 == 0) {
        const firstPozB = reprez.findIndex((value) => value[0] == "B")
        reprez.splice(firstPozB, 0, "Fezz")
    }
    if (value % 17 == 0) {
        reprez = reprez.reverse()
    }

    if (reprez.length == 0) {
        console.log(value)
    } else {
        console.log(reprez.join(""));
    }
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
reader.question("Please input the limit of the program\n", (value) => {
    printNumbers(parseInt(value))
    reader.close()
})
