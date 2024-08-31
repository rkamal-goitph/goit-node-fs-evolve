import express from "express";
// prettier-ignore
import { listContacts, getContactById, removeContact, addContact, updateContact } from "../../models/contacts.js";
import { contactValidation } from "../../validation/validation.js";

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);

    if (!result) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactValidation.validate(req.body);
    if (error) {
      const validationError = new Error("Missing required name field");
      validationError.status = 400;
      throw validationError;
    }

    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);

    if (!result) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }

    res.json({
      message: "Contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = contactValidation.validate(req.body);
    if (error) {
      const validationError = new Error("Missing fields");
      validationError.status = 400;
      throw validationError;
    }

    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);

    if (!result) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

export { router };
