import { TreeNode } from './node';

export class BST {

    private _root: TreeNode;
    public get root(): TreeNode {
        return this._root;
    }
    public set root(r: TreeNode) {
        this._root = r;
    }

    constructor() { 
        this._root = null;
    }

    addToTree (value: number): boolean {
        const newNode = new TreeNode(value);

        if (this._root === null) {
            this._root === newNode;
            return true;
        } else {
            let current = this._root;
            let traversing = true;
            
            while(traversing) {
                if (current.value === newNode.value) {
                    traversing = false;
                    return false;
                } else if (newNode.value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        traversing = false;
                        return true;
                    } else {
                        current = current.left;
                    }
                } else if (newNode.value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        traversing = false;
                        return true;
                    } else {
                        current = current.right;
                    }
                }
            }           
        }
    }
    //BFS Travrsal - from level to level

    BFSTraversal(): number[] {
        let queue = new Array<TreeNode>();

        let visited = new Array<number>();

        queue.push(this._root);

        while(queue.length !== 0) {
            let current = queue.shift();
            visited.push(current.value);
            
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
        }

        return visited;
    }

    //PreOrder - recursive

    PreOrderTraversal(): number[] {
        let data = new Array<number>();
        let current = this._root;

        function traverse(node: TreeNode) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    //PostOrder - recursive 

    PostOrderTraversal(): number[] {
        let data = new Array<number>();
        let current = this._root;

        function traverse(node: TreeNode){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
    }

    //InOrder - recursive

    InOrderTraversal(): number[] {
        let data = new Array<number>();
        let current = this._root;

        function traverse(node: TreeNode) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
}