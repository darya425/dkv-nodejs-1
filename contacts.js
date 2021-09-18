const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.table(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    const contacts = JSON.parse(data);
    contacts.map((item) => {
      if (item.id === contactId) {
        console.table(item);
      }
    });
  });
}

function addContact(name, email, phone) {
  const contact = {
    id: Math.random(),
    name,
    email,
    phone,
  };

  const contactsNew = [];

  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    const contacts = JSON.parse(data);
    contacts.map((item) => {
      contactsNew.push(item);
    });
    contactsNew.push(contact);
    fs.writeFile(contactsPath, JSON.stringify(contactsNew), (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`contact ${contact.name} was added!`);
      console.table(contact);
    });
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    const contacts = JSON.parse(data);
    contacts.filter((contact) => contact.id != contactId);
    console.log(`Contact ${contactId} was deleted!`);
  });
}

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

module.exports = {
  invokeAction,
};
