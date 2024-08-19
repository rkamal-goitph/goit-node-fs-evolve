import fs from "fs/promises";

async function appendFileExample() {
  try {
    // write file takes three arguments
    // first argument is the name of file to be appended
    // second argument is the content to be appended
    // third argument is the file encoding format
    await fs.appendFile("example.txt", "\nAppended text", "utf8");
  } catch (error) {
    console.error(error);
  }
}

appendFileExample();
