// Worrks, but with any type
// function cal(val1, val2) {
//     let total = val1 + val2;
//     return total;
// }

// cal(2,2);


// Better way to define variables with type
function cal(val1: number, val2: number): number {
    let total: number = val1 + val2;
    return total;
}

cal(2,2);