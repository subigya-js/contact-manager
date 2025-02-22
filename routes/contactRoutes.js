const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require("../controllers/contactController");

// These are GET and POST methods.
router.route("/").get(getContacts).post(createContact);

// These are GET, PUT and DELETE methods.
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router; // We have to export this router to use in the server.js