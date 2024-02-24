class objectGenericsClass<T, X> {
    constructor(public value1: T, public value2: X) {

    }
}

let object1 = new objectGenericsClass<string, number>("Hello", 2);
let object2 = new objectGenericsClass<number,boolean>(2, true);
let object3 = new objectGenericsClass(true, true);

// Class Generics constraints
// second value must have to be string
class objectGenericsClass2<T, X extends string> {
    constructor(public value1: T, public value2: X) {

    }
}

let object4 = new objectGenericsClass2(2, 'World');