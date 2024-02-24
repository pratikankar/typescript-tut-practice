function stringFunction() {
    console.log("Hello, I am a string");
}
function calculate(val1, val2) {
    var total = val1 + val2;
    return total;
}
console.log(calculate(2, 2));
var universal = calculate;
console.log(universal(3, 4));
