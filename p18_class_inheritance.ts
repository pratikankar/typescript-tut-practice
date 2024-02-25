class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
        console.log(`Person Created: ${this.name}`);
    }

    sayHello() {
        console.log(`${this.name} says Hello`);
    }
}

class Customer extends Person {
    id: number;

    constructor(id: number, name:string) {
        super(name);
        this.id = id;
        console.log(`Customer Created: ${this.name}`);
    }
}

let rajat: Person = new Customer(1, 'Rajat');
rajat.sayHello();