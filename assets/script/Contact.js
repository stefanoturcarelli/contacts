"use strict";

// Create Contact class
class Contact {
  constructor(information) {
    // Set contact information
    this.name = information.split(", ").slice(0, 1).join("");
    this.city = information.split(", ").slice(1, 2).join("");
    this.email = information.split(", ").slice(2, 3).join("");
  }

  // Method to display contact in HTML
  displayHTML() {
    return `
			<div class="contact">
				<p><span>Name:</span> ${this.name}</p>
				<p><span>City:</span> ${this.city}</p>
				<p><span>Email:</span> ${this.email}</p>
			</div>
		`;
  }
}

export default Contact;
