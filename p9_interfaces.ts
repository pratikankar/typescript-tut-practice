interface AutomobileInterface {
    brand: string;
    speed: number;
    speedMethod(velocity: number): void
}

// Using for interface inheritance
interface AutomobileInterface2 extends AutomobileInterface {

}

const automobile2: AutomobileInterface2 = {
    brand: "Mercedes",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at speed ${this.speed} kmph`);
    }
}

///////////////////////////////////

const automobile: AutomobileInterface = {
    brand: "Mercedes",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at speed ${this.speed} kmph`);
    }
}

// Implementing interfaces to function
function car1(automobile: AutomobileInterface) {

    // if automobile passed directly, it will go with "any" type.
    // automobile.speed = "three"   // this won't show error with "any" type.
    // declearing it with interface type, so the types will be correct.
    automobile.speed = 300;
    console.log(`this ${automobile.brand} is going at speed ${automobile.speed} kmph`);
}

// car1(automobile)


// Implementing interface to classes
class AutomobileClass implements AutomobileInterface {
    brand: string;
    speed: number;

    speedMethod(speed) {
        console.log(`Hi my car is going at ${speed} `)
    }
}

let carObject = new AutomobileClass();

carObject.speedMethod(500);