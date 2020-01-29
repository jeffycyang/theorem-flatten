// IIFE wrapper detects if test environment is Node.js or a browser
;(function(root, undefined) {


  // exported flatten function
  const flatten = array => {
    // error case
    if (!Array.isArray(array)) return console.error('\x1b[31m%s\x1b[0m', 'input supplied is not an array!');

    // generic case
    return recursiveConcat(array);
  };

  // recursive concatenation
  const recursiveConcat = array => {
    // base case, true if array is completely flat
    const isFlat = array.reduce((acc, curr) => acc && !Array.isArray(curr), true);
    if (isFlat) return array;

    // otherwise, recursively concat elements that are arrays
    return array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? recursiveConcat(curr) : curr), []);
  };


  // export 'flatten' accordingly
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    module.exports = flatten;
  } else if (root) {
    root.flatten = flatten;
  }
}(this));
