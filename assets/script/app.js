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
  if (contactsCount <= 11) {
    // Add contact to HTML
    addContact(contact);
    showContactAdded();
  }

  // Increment contacts count
  contactsCount++;

  // Clear input field
  inputName.value = "";
});

// Function to add contact to HTML, the contacts array, and display the contact
function addContact(contact) {
  // Add contact to HTML
  contactsContainer.innerHTML += contact.displayHTML();
  // Push the new contact to the contacts array
  contactsArray.push(contact);
  console.log(contactsArray);
}

// Function to display feedback when contact is added
function showContactAdded() {
  let paragraph = document.createElement("p");
  paragraph.classList.add("contacts-count");
  paragraph.textContent = `Contact added`;
  contactsCounter.appendChild(paragraph);
  // Clear the paragraph after 2 seconds using setTimeout
  setTimeout(() => {
    paragraph.remove();
  }, 1000);
}

// Add an event listener to handle click events on the contacts container
onEvent("click", contactsContainer, (event) => {
  const clickedElement = event.target.closest(".contact-div");

  if (clickedElement) {
    // Remove the contact from the HTML
    clickedElement.remove();

    // Find the index of the clicked contact in the array
    const index = contactsArray.findIndex(
      (contact) => contact.id === clickedElement.dataset.id
    );

    // Remove the contact from the contacts array
    if (index !== -1) {
      contactsArray.splice(index, 1);
      console.log(contactsArray);

      // Decrement contacts count
      contactsCount--;
    }
  }
});
