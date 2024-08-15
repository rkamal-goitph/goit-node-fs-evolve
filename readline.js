import readline from "readline";

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin, // input from standard stream
  output: process.stdout, // output to standard stream
});

// Ask the first question
rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  // Pause the input stream
  rl.pause();

  // Simulate an asynchronous operation (e.g., fetching data, processing something)
  setTimeout(() => {
    console.log("Resuming input...");

    // Resume the input stream
    rl.resume();

    // Ask the second question after resuming the input
    rl.question("How old are you? ", (age) => {
      console.log(`You are ${age} years old.`);

      // Close the readline interface
      rl.close();
    });
  }, 3000); // Simulate a 3-second delay
});
