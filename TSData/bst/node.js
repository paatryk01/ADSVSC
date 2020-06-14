"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
    Object.defineProperty(TreeNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (l) {
            this._left = l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (r) {
            this._right = r;
        },
        enumerable: false,
        configurable: true
    });
    return TreeNode;
}());
exports.TreeNode = TreeNode;
