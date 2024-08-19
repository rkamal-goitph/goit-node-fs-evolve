// this is the syntax for synchronous ES6 import
// import fs from "fs";

// this is the syntax for asynchronous ES6 import
import fs from "fs/promises";
// import { promises as fs } from "fs";

async function readFileExample() {
  try {
    // takes two arguments
    // first argument is the filename
    // second argument is the file encoding format
    const data = await fs.readFile("greet.js", "utf8");
    console.log("File Contents: ", data);
  } catch (error) {
    console.error(error);
  }
}

readFileExample();
