const fs = require("fs/promises");
const nanoid = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function readContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}
async function writeContacts(contacts) {
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts;
}

async function listContacts() {
  const data = await readContacts();
  return data;
}
async function getContactById(contactId) {
  const data = await readContacts();
  const findBook = data.find((book) => book.id === contactId);
  return findBook || null;
}
async function removeContact(contactId) {
  const data = await readContacts();
  const findBook = data.find((book) => book.id === contactId);
  if (!findBook) {
    return null;
  }
  const bookIndex = data.findIndex((book) => book.id === contactId);
  data.splice(bookIndex, 1);
  return writeContacts(data);
}
async function addContact(name, email, phone) {
  const data = await readContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  return writeContacts(data);
}
