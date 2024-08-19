import fs from "fs/promises";

async function deleteFileExample() {
  try {
    await fs.unlink("renamed_example.txt");
    console.log("File deleted successfully");
  } catch (err) {
    console.error("Error deleting file:", err);
  }
}

deleteFileExample();
