export class Node{
    constructor(val){
        this.coordinates = val;
        this.parent = null;
    }

    setParent(node) {
        this.parent = node;
    }
}