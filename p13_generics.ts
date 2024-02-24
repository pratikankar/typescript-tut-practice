function displayData<T>(someData: T) {
    return someData;
}
// We can pass any kind of data to T, better way to use than "any"
console.log(displayData("Hello string parameter"));
console.log(displayData(1234));
console.log(displayData(true));