abstract class People {
    displayData() {
        console.log("Some data");
        
    }
}

class Kids extends People{

}

let kidsClass = new Kids;

kidsClass.displayData();