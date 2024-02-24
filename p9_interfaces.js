var automobile = {
    brand: "Mercedes",
    speed: 200,
    speedMethod: function () {
        console.log("this ".concat(this.brand, " is going at speed ").concat(this.speed, " kmph"));
    }
};
function car1(automobile) {
    // if automobile passed directly, it will go with "any" type.
    // automobile.speed = "three"   // this won't show error with "any" type.
    // declearing it with interface type, so the types will be correct.
    automobile.speed = 300;
    console.log("this ".concat(automobile.brand, " is going at speed ").concat(automobile.speed, " kmph"));
}
car1(automobile);
