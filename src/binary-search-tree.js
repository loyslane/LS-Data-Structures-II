// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value > this.value && this.right === null) {
      this.right = new BinarySearchTree(value);
    } else if (value > this.value) {
      this.right.insert(value);
    } else if (value <= this.value && this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value > this.value && !(this.right === null)) {
      return this.right.contains(value);
    } else if (value < this.value && !(this.left === null)) {
      return this.left.contains(value);
    }
    return false;
  }
  depthFirstForEach(cb) {
    this.value = cb(this.value);
    if (!(this.right === null)) {
      this.right.depthFirstForEach(cb);
    } else if (!(this.left === null)) {
      this.left.depthFirstForEach(cb);
    }
  }
}

module.exports = BinarySearchTree;
