export class TreeNode {
    //Hold value of TreeNode.
    private _value: number;
    public get value(): number {
        return this._value;
    }
    public set value(v: number) {
        this._value = v;
    }

    //Hold ref to left child TreeNode.
    private _left: TreeNode;
    public get left(): TreeNode {
        return this._left;
    }
    public set left(l: TreeNode) {
        this._left = l;
    }
    // Hold ref to right child TreeNode.
    
    private _right: TreeNode;
    public get right(): TreeNode {
        return this._right;
    }
    public set right(r: TreeNode) {
        this._right = r;
    }

    constructor (value: number) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
}