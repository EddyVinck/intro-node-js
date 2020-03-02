const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, "contacts.json");

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation);
  const parsed = JSON.parse(contacts);
  return parsed;
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
  const newContacts = JSON.stringify(contacts);
  fs.writeFileSync(contactsLocation, newContacts, { encoding: "utf-8" });
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
};
