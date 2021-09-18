const contacts = require("./contacts");

// contacts.listContacts();
// contacts.getContactById(9);
// contacts.removeContact(2);

// contacts.addContact("Anatoli", "asdf@mail,ru", "333-333-333");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

contacts.invokeAction(argv);
