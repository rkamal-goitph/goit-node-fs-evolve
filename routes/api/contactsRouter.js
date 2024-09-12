import express from "express";
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} from "../../models/contacts.js";

const router = express.Router();

// corresponds to listContacts
router.get("/", async (_req, res, next) => {
  // Calls the listContacts function to work with the JSON file `contacts.json
  // Returns an array of all contacts in json format with status 200
  try {
    const result = await listContacts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

// corresponds to getContactById
router.get("/:contactId", async (req, res, next) => {
  // Gets the id parameter
  // Calls the getById function to work with the contacts.json JSON file
  // If there is such an id, returns the contact object in JSON format with status 200
  // If there is no such id, returns json with "message": "Not found" key and 404 status

  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    //  const result = await getContactById(req.params.contactId); --->>> This is if you dont want to destructure the request parameter

    // early return pattern means we want to skip our function body early if the required constants are falsy

    if (!result) {
      res.status(404).json({ message: "Not found" });

      // create an error through a middleware
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
    }

    res.status(200).json(result);
  } catch (error) {
    next(error); // default middleware handler ni express
  }
});

// corresponds to addContact
router.post("/", async (req, res, next) => {
  // Gets body in {name, email, phone} format (all fields are required)
  const { name, email, phone } = req.body;

  // If there are no required fields in body, returns JSON with key {"message": "missing required name field"} and status 400
  // If everything is fine with body, add a unique identifier to the contact object

  // const result = await addContact({ name, email, phone});
  try {
    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
  // Calls the addContact(body) function to save the contact in the contacts.json file
  // Based on the result of the function, it returns an object with the added id {id, name, email, phone} and status 201
});

// corresponds to removeContact
router.delete("/:contactId", async (req, res, next) => {
  // Gets the id parameter
  // Calls the removeContact function to work with the JSON file contacts.json
  // If there is such an id, it returns JSON of the format {"message": "contact deleted"} with status 200
  // If there is no such id, returns JSON with the key "message": "Not found" and status 404
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);

    if (!result) {
      res.status(404).json({ message: "Not found" });

      // create an error through a middleware
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

// corresponds to updateContact
router.put("/:contactId", async (req, res, next) => {
  // Gets body in JSON format, updating any name, email и phone fields
  // If there is no body, returns json with key {"message": "missing fields"} and status 400
  // If everything is fine with body, call the updateContact(contactId, body) function (write it) to update the contact in the contacts.json file
  // Based on the result of the function, it returns an updated contact object with a status of 200. Otherwise, returns json with "message": "Not found" key and 404 status
  try {
    const result = await updateContact(req.params.contactId, req.body);

    if (!result) {
      res.status(404).json({ message: "Not found" });

      // create an error through a middleware
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export { router };
