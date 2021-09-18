const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
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

const addContact = async (name, email, phone) => {
  const contact = {
    name,
    email,
    phone,
  };

  const contactsNew = [];

  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = await JSON.parse(data);
    contactsNew.push(...contacts, contact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsNew));

    console.log(`contact ${contact.name} was added!`);
    console.table(contact);
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
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

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
