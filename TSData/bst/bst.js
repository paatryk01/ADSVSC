"use strict";
exports.__esModule = true;
exports.BST = void 0;
var node_1 = require("./node");
var BST = /** @class */ (function () {
    function BST() {
        this._root = null;
    }
    Object.defineProperty(BST.prototype, "root", {
        get: function () {
            return this._root;
        },
        set: function (r) {
            this._root = r;
        },
        enumerable: false,
        configurable: true
    });
    BST.prototype.addToTree = function (value) {
        var newNode = new node_1.TreeNode(value);
        if (this._root === null) {
            this._root === newNode;
            return true;
        }
        else {
            var current = this._root;
            var traversing = true;
            while (traversing) {
                if (current.value === newNode.value) {
                    traversing = false;
                    return false;
                }
                else if (newNode.value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        traversing = false;
                        return true;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (newNode.value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        traversing = false;
                        return true;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    };
    //BFS Travrsal - from level to level
    BST.prototype.BFSTraversal = function () {
        var queue = new Array();
        var visited = new Array();
        queue.push(this._root);
        while (queue.length !== 0) {
            var current = queue.shift();
            visited.push(current.value);
            if (current.left !== null)
                queue.push(current.left);
            if (current.right !== null)
                queue.push(current.right);
        }
        return visited;
    };
    //PreOrder - recursive
    BST.prototype.PreOrderTraversal = function () {
        var data = new Array();
        var current = this._root;
        function traverse(node) {
            data.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        }
        traverse(current);
        return data;
    };
    //PostOrder - recursive 
    BST.prototype.PostOrderTraversal = function () {
        var data = new Array();
        var current = this._root;
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    };
    //InOrder - recursive
    BST.prototype.InOrderTraversal = function () {
        var data = new Array();
        var current = this._root;
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            data.push(node.value);
            if (node.right)
                traverse(node.right);
        }
        traverse(current);
        return data;
    };
    return BST;
}());
exports.BST = BST;
