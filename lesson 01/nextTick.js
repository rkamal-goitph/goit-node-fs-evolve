console.log("Before nextTick");

// the nextTick adds a callback function to the process after the last code has been implemented
process.nextTick(() => {
  console.log("Inside nextTick callback");
});

console.log("After nextTick");
