//

const args = process.argv.slice(2);

// Arguments: [
//     '/Users/radhwanakamal/.nvm/versions/node/v16.13.0/bin/node',
//     '/Users/radhwanakamal/code/greet.js',
//     'Kenneth'
//   ]

// after slicing the process.argv
// Arguments: ["Kenneth"]

console.log(`Hello, ${args[0]}`);
console.log(`Hello, Kenneth`);

// Slice cuts an array and returns the remaining values after deleting the index specified in the parameter
// Splice cuts an array and returns the cut values
