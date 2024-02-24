// namespace declaration and using it.
// export is needed before any variable or function to use.
namespace myNameSpace {
    export function displayData() {
        return "This is TS namespace";
    }
}

console.log(myNameSpace.displayData())