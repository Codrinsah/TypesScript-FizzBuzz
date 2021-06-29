import * as readline from 'readline';

function printNumbers(limit: number, numbers: number[]): void {
    for (const value of Array(limit).fill(0).map((_, index) => index + 1)) {
        console.log(convertNumberToString(value, numbers));
    }
}

function contains(numbers: number[], number: number): boolean {
    return numbers.findIndex((value) => value == number) != -1;
}

function convertNumberToString(value: number, numbers: number[]): String {
    let reprez: String[] = [];

    if (value % 3 == 0 && contains(numbers, 3)) {
        reprez.push("Fizz");
    }
    if (value % 5 == 0 && contains(numbers, 5)) {
        reprez.push("Buzz");
    }
    if (value % 7 == 0 && contains(numbers, 7)) {
        reprez.push("Bang");
    }
    if (value % 11 == 0 && contains(numbers, 11)) {
        reprez = ["Bong"];
    }
    if (value % 13 == 0 && contains(numbers, 13)) {
        const firstPozB = reprez.findIndex((value) => value[0] == "B");
        reprez.splice(firstPozB, 0, "Fezz");
    }
    if (value % 17 == 0 && contains(numbers, 17)) {
        reprez = reprez.reverse();
    }

    if (reprez.length == 0) {
        return value.toString();
    } else {
        return reprez.join("");
    }
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
reader.question("Please input the limit of the program\n", (input1) => {
    reader.question("Please specify which rules you want to apply. Examples: \n" +
        "  * all\n" +
        "  * none\n" +
        "  * 3\n" +
        "  * 3, 5, 13\n", (input2) => {
        let numbers: number[] = [];
        if (input2 == "all") {
            numbers = [3,5,7,11,13,17]
        } else if (input2 == "none") {
            numbers = []
        } else {numbers = input2
            .split(',')
            .map((number) => number.trim())
            .map((number) => parseInt(number));
        }

        printNumbers(parseInt(input1), numbers);
        reader.close();
    })
})