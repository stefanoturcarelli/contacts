"use strict";

let id = 0;

class Contact {
  #name;
  #city;
  #email;
  #id;

  constructor(name, city, email) {
    if (!Contact.validateInput(name, city, email)) {
      throw new Error(
        "Invalid input format. Expected: 'Name, City, email@example.com'"
      );
    }

    this.#name = name;
    this.#city = city;
    this.#email = email;
    this.#id = id++;
  }

  static validateInput(name, city, email) {
    const regex = /^[a-zA-Z\s]+,\s*[a-zA-Z\s]+,\s*[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(`${name}, ${city}, ${email}`);
  }

  get name() {
    return this.#name;
  }

  get city() {
    return this.#city;
  }

  get email() {
    return this.#email;
  }

  get id() {
    return this.#id;
  }
}

export default Contact;
