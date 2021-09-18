import fs from "fs/promises";
import path from "path";
import { listContacts } from "./index.js";

const contactsPath = path.resolve("db/contacts.json");

export const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const filteredContacts = await contacts.filter(
      (contact) => contact.id != Number(contactId)
    );
    return filteredContacts;
  } catch (error) {
    console.log(error);
  }
};
