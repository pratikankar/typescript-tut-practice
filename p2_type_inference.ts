let  car = {

    brand: "BMW",
    engine: 3.4,
    run: function() {
        console.log("driving at 200 km per hour")
    }
}

// This works as brand has string type data
car.brand = "Mercedes"
// This won't work since integer value is assigned
// car.brand = 3.5