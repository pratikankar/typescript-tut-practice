function stringFunction(): string {
    console.log("Hello, I am a string");
    let str = "This is string";
    return str;
}

function calculate(val1: number, val2: number): number {
    let total: number = val1 + val2;
    return total;
}

console.log(calculate(2,2));

// let universal = calculate;

// console.log(universal(3,4));

let universal: () => string;

universal = stringFunction;