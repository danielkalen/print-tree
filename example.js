const printTree = require('.');

const customTree = {
  name: 'head',
  children: [
    {
      name: 'branchA',
      children: [
        { name: 'branchC'},
        { name: 'branchC', children:[{name:'branceD'}] },
        { name: 'branchC', children:[{name:'branceD'}, {name:'branceE'}] },
      ],
    },
    { name: 'branchB' },
  ],
};

printTree(
  customTree, {
    printNode: node => node.name,
    getChildren: node => node.children
  }
);

