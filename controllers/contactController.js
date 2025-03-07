const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  // console.log("User ID in getContacts:", req.user.id);
  const contacts = await Contact.find({ user_id: req.user.id });
  // console.log("Contacts found:", contacts);
  res.status(200).json({ contacts });
});

//@desc GET contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ contact });
});

//@desc Create new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, contact } = req.body;

  // If any of name, email and contact is available, it will throw an error
  if (!name || !email || !contact) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  console.log("User ID in createContact:", req.user.id);

  // If all the fields are available, then we will create a new contact
  const newContact = await Contact.create({
    name,
    email,
    contact,
    user_id: req.user.id,
  });

  console.log("New contact created:", newContact);
  res.status(201).json({ newContact }); // If we are creating something (POST Request), then we will give status as 201
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You are not authorized to update this contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You are not authorized to update this contact");
  }

  const deletedContact = await Contact.findByIdAndDelete(
    req.params.id,
    req.body
  );
  res.status(200).json({ deletedContact });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
