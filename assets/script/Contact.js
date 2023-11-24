"use strict";

class Contact {
  // Private properties
  #name;
  #city;
  #email;

  // Regular expressions for validation
  #namePattern = /^[A-Za-z\s]+$/;
  #cityPattern = /^[A-Za-z\s]+$/;
  #emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(information) {
    // Split the input information
    const [name, city, email] = information.split(", ");

    // Check if any of the fields is empty
    if (!name || !city || !email) {
      throw new Error(
        "Invalid contact format. Please provide a name, city, and email."
      );
    }

    // Set properties with validation
    this.setName(name);
    this.setCity(city);
    this.setEmail(email);
  }

  // Setters with validation
  setName(name) {
    if (!this.#namePattern.test(name)) {
      throw new Error(
        "Invalid name format. Name should only contain letters and spaces."
      );
    }
    this.#name = name;
  }

  setCity(city) {
    if (!this.#cityPattern.test(city)) {
      throw new Error(
        "Invalid city format. City should only contain letters and spaces."
      );
    }
    this.#city = city;
  }

  setEmail(email) {
    if (!this.#emailPattern.test(email)) {
      throw new Error(
        "Invalid email format. Please enter a valid email address."
      );
    }
    this.#email = email;
  }

  // Getters
  get name() {
    return this.#name;
  }
  get city() {
    return this.#city;
  }
  get email() {
    return this.#email;
  }

  // Method to display contact in HTML
  displayHTML() {
    return `
			<div class="contact-div">
				<p><span>Name:</span> ${this.name}</p>
				<p><span>City:</span> ${this.city}</p>
				<p><span>Email:</span> ${this.email}</p>
			</div>
		`;
  }
}

export default Contact;
