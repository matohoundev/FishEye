export default class Form {
    init() {
        let contact = document.querySelector('#btn-contact');
        let btnCloseContact = document.querySelector('.close-contact');
        const form = document.querySelector('form');
        const firstName = document.querySelector('#firstname');
        const lastName = document.querySelector('#lastname');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
        
        // launch modal event
        contact.addEventListener('click', this.displayModal);
        
        // close modal event
        btnCloseContact.addEventListener('click', this.closeModal);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(this.checkFirstName(firstName) && this.checkLastName(lastName) && this.checkEmail(email) && this.checkMessage(message)  === true ) {
                console.log('Prénom:', firstName.value);
                console.log('Nom:', lastName.value);
                console.log('Email:', email.value);
                console.log('Message:', message.value);
                form.reset();
            } else {
                console.log('error');
            }
        });

    }
    
    displayModal() {
        let modal = document.querySelector('.content-form-modal');
        modal.style.display = 'flex';
    }
    
    closeModal() {
        let modal = document.querySelector('.content-form-modal');
        modal.style.display = 'none';
    }

    minTwoChar(input) {
        if (input.length < 2) {
            return false;
        }
    }

    minTenChar(input) {
        if (input.length < 2) {
            return false;
        }
    }
      
    checkFirstName(input) {
        if (this.minTwoChar(input.value) === false) {
            input.setAttribute('data-error', 'false');
        } else {
            input.setAttribute('data-error', 'true');
            return true;
        }
    }
      
    checkLastName(input) {
        if (this.minTwoChar(input.value) === false) {
            input.setAttribute('data-error', 'false');
        } else {
            input.setAttribute('data-error', 'true');
            return true;
        }
    }
      
    checkEmail(input) {
        if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
            input.setAttribute('data-error', 'false');
        }
        else {
            input.setAttribute('data-error', 'true');
            return true;
        }
    }
      
    checkMessage(input) {
        if (this.minTenChar(input.value) === false) {
            input.setAttribute('data-error', 'false');
        } else {
            input.setAttribute('data-error', 'true');
            return true;
        }
    }
}