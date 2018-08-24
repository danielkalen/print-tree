// @flow

/* eslint-disable no-console, prefer-template */

/*:: type PrintNode<T> = (node: T, branch: string) => ?string;*/
/*:: type GetChildren<T> = (node: T) => Array<T>;*/


const defaults = {
  printNode: node => node.name,
  getChildren: node => node.children,
  print: true
};

function printTree /*:: <T>*/(initialTree /*: T*/, options /*: Object<T>*/) {
  function getBranch(tree, branch) {
    options = Object.assign({}, defaults, options);
    const isGraphHead = branch.length === 0;
    const children = options.getChildren(tree) || [];

    let o = '';
    let branchHead = '';

    if (!isGraphHead) {
      branchHead = children && children.length !== 0 ? '┬ ' : '─ ';
    }

    const toPrint = options.printNode(tree, `${branch}${branchHead}`);

    if (typeof toPrint === 'string') {
      o += `${branch}${branchHead}${toPrint}`;
    }

    let baseBranch = branch;

    if (!isGraphHead) {
      const isChildOfLastBranch = branch.slice(-2) === '└─';
      baseBranch = branch.slice(0, -2) + (isChildOfLastBranch ? '  ' : '| ');
    }

    const nextBranch = baseBranch + '├─';
    const lastBranch = baseBranch + '└─';

    children.forEach((child, index) => {
      o += '\n' + getBranch(child, children.length - 1 === index ? lastBranch : nextBranch);
    });

    return o;
  }

  const result = getBranch(initialTree, '');
  if (options.print) {
    console.log(result);
  }
  return result;
}

module.exports = printTree;