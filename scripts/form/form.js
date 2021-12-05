const modal = document.querySelector(".content-form-modal");
const contact = document.querySelector("#btn-contact");
const btnCloseContact = document.querySelector(".close-contact");

// launch modal event
contact.addEventListener("click", displayModal);

// close modal event
btnCloseContact.addEventListener("click", closeModal);

function displayModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}
