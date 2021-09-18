import { listContacts } from "./index.js";

export const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === Number(contactId));
    if (!contact) {
      console.log(`Contact by id ${contactId} not found!`);
    }
    return contact;
  } catch (error) {
    console.log(error);
  }
};
