var myNameSpace;
(function (myNameSpace) {
    function displayData() {
        console.log("This is TS namespace");
    }
})(myNameSpace || (myNameSpace = {}));
