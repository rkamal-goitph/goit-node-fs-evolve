import readline from "readline";

// for example, from class Car
// i can create an instance Sedan, which has the access to all the function from class Car

const rl = readline.createInterface({
  input: process.stdin, // input from standard stream
  output: process.stdout, // output to standard stream
});

rl.question("What is your name?", (name) => {
  console.log(`Hello, ${name}!`);

  rl.pause();

  setTimeout(() => {
    console.log("Resuming input...");
    rl.resume();

    // Ask the second question after resuming the input
    rl.question("How old are you? ", (age) => {
      console.log(`You are ${age} years old.`);

      // Close the readline interface
      rl.close();
    });
  }, 3000);
});
