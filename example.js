const printTree = require('.');

const customTree = {
  name: 'head',
  children: [
    {
      name: 'branchA',
      children: [
        { name: 'branchC' },
      ],
    },
    { name: 'branchB' },
  ],
};

const result = printTree(
  customTree, {
    printNode: node => node.name,
    getChildren: node => node.children
  }
);

console.log(result);
