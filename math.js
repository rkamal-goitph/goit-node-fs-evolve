// COMMONJS SYNTAX (CJS)
// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

// ES6 MODULES (ESM) // ECMASCRIPT MODULES
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };

// export nested function
// export default add - NAMED EXPORT
