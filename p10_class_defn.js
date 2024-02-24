// Class definition
// class Tree {
//     branch: string;
//     constructor(branch)  {
//         this.branch = branch;
//     }
// }
// Class definition with access modifier
var Tree = /** @class */ (function () {
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("leaf is moving");
    };
    return Tree;
}());
var tree1 = new Tree("Green branch", "Green leaf");
tree1.moveLeaf();
