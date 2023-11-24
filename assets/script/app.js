"use strict";

import {
  onEvent,
  getElement,
  select,
  selectAll,
  print,
  sleep,
  randomNumber,
  filterArray,
} from "./utils.js";

import Contact from "./Contact.js";

// Get and store HTML elements
const form = select("form");
const addBtn = select(".add-contact");
const contactsContainer = select(".display-contacts .content");
const inputName = select("#name");
const contactsCounter = select(".contacts-counter");

let contactsCount = 0;
let contactsArray = [];

// Add event listener to add contact button
onEvent("click", addBtn, () => {
  // Create new contact
  let contact = new Contact(inputName.value);

  // Check if contacts count is less than or equal to 8 to limit contacts
  if (contactsCount <= 8) {
    // Add contact to HTML
    addContact(contact);
    displayContactsCount();
  }

  // Increment contacts count
  contactsCount++;

  // Clear input field
  inputName.value = "";
});

// Function to add contact to HTML and display the contact
function addContact(contact) {
  // Add contact to HTML
  contactsContainer.innerHTML += contact.displayHTML();
  // Push the new contact to the contacts array
  contactsArray.push(contact);
  console.log(contactsArray);
}

// Function to display the number of contacts
function displayContactsCount() {
  let paragraph = document.createElement("p");
  paragraph.classList.add("contacts-count");
  paragraph.textContent = `You have ${contactsCount} contacts.`;
  contactsCounter.appendChild(paragraph);
  // Clear the paragraph after 2 seconds using setTimeout
  setTimeout(() => {
    paragraph.remove();
  }, 2000);
}
