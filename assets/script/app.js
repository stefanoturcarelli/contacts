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
  create,
} from "./utils.js";

import Contact from "./Contact.js";

// Get and store HTML elements
const addBtn = select(".add-contact");
const contactsContainer = select(".display-contacts .content");
const inputField = select("#name");
const contactsCounter = select(".contacts-counter");
const contactDiv = selectAll(".contact-div");

let contactsCount = 0;
let contactsArray = [];

onEvent("load", window, () => {
  inputField.focus();

  contactsCounter.textContent = `Number of contacts: ${contactsCount}`;
  deleteContact();
});

onEvent("click", addBtn, () => {
  try {
    if (contactsCount <= 11 && inputField.value.trim() !== "") {
      listContacts();
    } else if (contactsCount > 11) {
      contactsCounter.textContent = `You have reached the maximum number of contacts.`;
    } else {
      throw new Error("Please enter a valid contact");
    }
  } catch (error) {
    contactsCounter.textContent = `Error: ${error.message}`;
    contactsCounter.style.backgroundColor = "#973246";
    setTimeout(() => {
      contactsCounter.textContent = `Number of contacts: ${contactsCount}`;
      contactsCounter.style.backgroundColor = "#329783";
    }, 2000);
  }
  inputField.focus();
});

function listContacts() {
  let input = inputField.value.trim().split(", ");

  let contact = new Contact(input[0], input[1], input[2], input[3]);
  console.log(contact);

  let contactDiv = create("div");
  contactDiv.classList.add("contact-div");
  contactsContainer.appendChild(contactDiv);

  let contactName = create("p");
  contactName.classList.add("contact-name");
  contactName.textContent = `Name: ${contact.name}`;
  contactDiv.appendChild(contactName);

  let contactCity = create("p");
  contactCity.classList.add("contact-city");
  contactCity.textContent = `City: ${contact.city}`;
  contactDiv.appendChild(contactCity);

  let contactEmail = create("p");
  contactEmail.classList.add("contact-email");
  contactEmail.textContent = `Email: ${contact.email}`;
  contactDiv.appendChild(contactEmail);

  contactsArray.push(contact);
  contactsCount++;
  inputField.value = "";
  contactsCounter.textContent = `Number of contacts: ${contactsCount}`;
  console.log(contactsArray);
}

function deleteContact() {
  contactsContainer.addEventListener("click", (e) => {
    const contactDiv = e.target.closest(".contact-div");
    if (contactDiv) {
      contactDiv.remove();
      contactsCount--;
      contactsCounter.textContent = `Number of contacts: ${contactsCount}`;
    }
  });
}
