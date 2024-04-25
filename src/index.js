'use strict';

const emailInput = document.querySelector('#email');

// Add div with error message to a page 
const errorMsg = document.createElement('div');

errorMsg.setAttribute('class', 'error-msg');
errorMsg.innerHTML = '(!) You should enter a proper email into this field!';
errorMsg.style.display = 'none';

document.getElementById('email-input-container').append(errorMsg);

// Add event listener
emailInput.addEventListener('change', (e) => {
    const emailRegExp = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/;
    if (emailRegExp.test(e.target.value)) {
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }
})
