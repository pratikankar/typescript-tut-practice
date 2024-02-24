// Class definition
// class Tree {
//     branch: string;

//     constructor(branch)  {
//         this.branch = branch;
//     }
// }

// Class definition with access modifier
class Tree {
    constructor(public branch: string, public leaf: string)  {
        this.branch = branch;
    }


    public moveLeaf() {
        console.log("leaf is moving")
    }
}

let tree1 = new Tree("Green branch", "Green leaf")

tree1.moveLeaf()