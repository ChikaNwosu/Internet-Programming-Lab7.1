// Initialize the contacts array
let contacts = [
    { name: "Maxwell Wright", phone: "01917196495", email: "agent1@cctb.ca" },
    { name: "Tom MacDonalds", phone: "01917776495", email: "agent2@cctb.ca" },
    { name: "Helen Richards", phone: "019108001111", email: "agent3@cctb.ca" }
];

function displayContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const contactItem = document.createElement('li');
        contactItem.classList.add('list-group-item');
        contactItem.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;
        contactList.appendChild(contactItem);
    });
}

document.getElementById('add-contact').addEventListener('click', function () {
    let userChoice;

    do {
        userChoice = prompt("Choose an option: 'first', 'last', 'new', 'delete all', or 'quit'");

        if (userChoice === "first") {
            if (contacts.length > 0) {
                alert("First contact: " + contacts[0].name + " / " + contacts[0].phone + " / " + contacts[0].email);
            } else {
                alert("No contacts available.");
            }
        } else if (userChoice === "last") {
            if (contacts.length > 0) {
                alert("Last contact: " + contacts[contacts.length - 1].name + " / " + contacts[contacts.length - 1].phone + " / " + contacts[contacts.length - 1].email);
            } else {
                alert("No contacts available.");
            }
        } else if (userChoice === "new") {
            let newName = prompt("Enter name:");
            if (!newName) {
                alert("Name cannot be empty. Please try again.");
                continue; // Skip to the next iteration of the loop
            }

            let newPhone = prompt("Enter phone number:");
            if (!/^\d+$/.test(newPhone)) {
                alert("Phone number must contain only digits. Please try again.");
                continue; // Skip to the next iteration of the loop
            }

            let newEmail = prompt("Enter email address:");
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(newEmail)) {
                alert("Please enter a valid email address. Please try again.");
                continue; // Skip to the next iteration of the loop
            }

            // Add the new contact
            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            alert("New contact added: " + newName);
            displayContacts(); // Update the displayed contact list
        } else if (userChoice === "delete all") {
            contacts = []; // Clear the contacts array
            alert("All contacts deleted.");
            displayContacts(); // Update the displayed contact list
        } else if (userChoice === "quit") {
            break; // Exit the loop
        } else {
            alert("Invalid option. Please choose 'first', 'last', 'new', 'delete all', or 'quit'.");
        }
    } while (true);
});

// Initial rendering of contacts
displayContacts();
