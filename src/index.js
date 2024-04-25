'use strict';

const email_input = document.querySelector('#email');

// Add div with error message to a page 
const error_msg = document.createElement('div');

error_msg.setAttribute('class', 'error-msg');
error_msg.innerHTML = '(!) You should enter a proper email into this field!';
error_msg.style.display = 'none';

document.getElementById('email-input-container').append(error_msg);

// Add event listener
email_input.addEventListener('change', (e) => {
    const emailRegExp = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/;
    if (emailRegExp.test(e.target.value)) {
        error_msg.style.display = 'none';
    } else {
        error_msg.style.display = 'block';
    }
})
