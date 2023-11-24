"use strict";

let id = 0;

class Contact {
  #name;
  #city;
  #email;
  #id;

  constructor(name, city, email) {
    this.#name = name;
    this.#city = city;
    this.#email = email;
    this.#id = id++;
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
