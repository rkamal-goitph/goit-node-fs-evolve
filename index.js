import {
  getContactById,
  listContacts,
  removeContact,
  addContact,
} from "./contacts.js";

import { Command } from "commander";

// for example, from class Car
// i can create an instance Sedan, which has the access to all the function from class Car

// we are creating an instance of the class Command from commander module
// it means that our program can access the functions that are built in to the Command class from the commander package
const program = new Command();

program
  // the first parameter of the option function refers to the flag
  // the flag can have a short version and a long version
  // we can specify them by separating them with a comma

  // node -v, node --version
  // this is used for checking successful installation of node

  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

// node index.js --action list
// this would list all the contacts in the console

// node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
// this would  get a specific contact and print it in the console

// node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
// this would add a new contact to the contacts.json

// node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
// this would remove a contact from the contacts.json
