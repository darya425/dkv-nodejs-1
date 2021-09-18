import shortid from "shortid";
import fs from "fs/promises";
import path from "path";
import { listContacts } from "./index.js";

const contactsPath = path.resolve("db/contacts.json");

export const addContact = async (name, email, phone) => {
  const contact = {
    id: shortid.generate(),
    name,
    email,
    phone,
  };

  try {
    const contacts = await listContacts();
    contacts.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contact;
  } catch (error) {
    console.log(error);
  }
};
