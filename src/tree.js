class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const tree = new Tree(value);
    this.children.push(tree);
  }
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (this.children.length >= 1) {
      for (let i = 0; i < this.children.length; i++) {
        if (value === this.children[i].value) {
          return true;
        } else if (this.children[i].contains(value)) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = Tree;
