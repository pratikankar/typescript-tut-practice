var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.escalators = function () {
        console.log("The escalator is moving");
    };
    return Building;
}());
var building = new Building();
building.escalators();
