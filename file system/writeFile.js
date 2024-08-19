import fs from "fs/promises";

async function writeFileExample() {
  try {
    // write file takes three arguments
    // first argument is the name of file to be created
    // second argument is the content of the file to be created
    // third argument is the file encoding format
    await fs.writeFile("example.txt", "Hello, World!", "utf8");
  } catch (error) {
    console.error(error);
  }
}

writeFileExample();
