import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db/contacts.json");

export const addContact = async (name, email, phone) => {
  const contact = {
    name,
    email,
    phone,
  };

  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = await JSON.parse(data);
    const newContacts = [...contacts, contact];
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));

    console.log(`contact ${contact.name} was added!`);
    console.table(contact);
  } catch (error) {
    console.log(error);
  }
};
