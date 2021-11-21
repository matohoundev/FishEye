const modal = document.querySelector('.content-form-modal');
const contact = document.querySelector('#btn-contact');
const btnCloseContact = document.querySelector('.close-contact');

console.log(contact);

// launch modal event
contact.addEventListener('click', displayModal);

// close modal event
btnCloseContact.addEventListener('click', closeModal);

function displayModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

export { displayModal, closeModal };
