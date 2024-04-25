'use strict';

const passInput = document.querySelector('#password1');
const passConfirmInput = document.querySelector('#password2');

// Create div with error msg
const errorMsg = document.createElement('div');
errorMsg.setAttribute('class', 'error-msg')
errorMsg.style.display = 'none'
document.querySelector('form > div:nth-child(2)').append(errorMsg);

function passwordValidation(e) {
    // Initialize password verification pattern
    const passPattern = /^(?=[\w@#$^&*+=]{8,20}$)\w+[@#$^&*+=]*/;

    if (!passPattern.test(passInput.value)) {
        errorMsg.innerHTML ='Password must contain 8-20 symbols of alphabet, numbers and no other special symbols than (@#$^&*+=_).';
        errorMsg.style.display = 'block';
    } else if (passInput.value !== passConfirmInput.value) {
        errorMsg.innerHTML= 'Passwords doesn\'t match!';
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }
}

// Add event listener
passInput.addEventListener('change', passwordValidation);
passConfirmInput.addEventListener('change', passwordValidation);
