import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db/contacts.json");

export const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = await JSON.parse(data);
    const filteredContacts = await contacts.filter(
      (contact) => contact.id != Number(contactId)
    );
    console.log(`Contact ${contactId} was deleted!`);
    console.table(filteredContacts);
  } catch (error) {
    console.log(error);
  }
};
