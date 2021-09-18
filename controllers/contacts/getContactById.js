import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db/contacts.json");

export const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    contacts.map((item) => {
      if (item.id === Number(contactId)) {
        console.table(item);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
