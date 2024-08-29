import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.join("db", "contacts.json"); // join method automatically generates the path from the directory or folder where the contacts.json is located
console.log(contactsPath);

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath); // this code returns contacts in a json format
    return JSON.parse(contacts); // we want to parse it to convert it into a JavaScript object
  } catch (error) {
    console.error("Error reading contacts:", error.message);
  }
};

// similar to the list contacts function but only returns one contact
const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId); // we are filtering the contact that corresponds to the contactId passed as an argument/parameter
    return result || null; // return the filter/found value
  } catch (error) {
    console.error("Error reading contacts by id:", error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts(); // returns an object
    // works similar to the find function in the getContactById but we need the index to delete the contact
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const deletedContact = contacts.splice(index, 1); // we are passing the index to the splice function to delete the specified contactId
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2)); // we are stringifying the object before appending it back to the contacts.json
    return deletedContact;
  } catch (error) {
    console.error("Error removing contact:", error.message);
  }
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    const allContacts = [...contacts, newContact]; // spread to push the new contact to the existing contacts
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2)); // we are stringifying the object before appending it back to the contacts.json
    return newContact;
  } catch (error) {
    console.error("Error adding new contact:", error.message);
  }
};

export { listContacts, getContactById, removeContact, addContact };
