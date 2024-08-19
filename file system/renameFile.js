import fs from "fs/promises";

async function renameFileExample() {
  try {
    await fs.rename("example.txt", "renamed_example.txt");
    console.log("File renamed successfully");
  } catch (err) {
    console.error("Error renaming file:", err);
  }
}

renameFileExample();
