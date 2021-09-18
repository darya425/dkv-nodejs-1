import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db/contacts.json");

export const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
