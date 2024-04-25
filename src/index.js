'use strict';

// Initialise class Person
class Person {
    constructor(fname, lname, nickname, email) {
        this.fname = fname;
        this.lname = lname;
        this.nickname = nickname;
        this.email = email;
    }
}

const email_input = document.querySelector('#email');

// Function to be an event listener.
const createUser = (e) => {
    e.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const nickname = document.querySelector('#nickname').value;
    const email = email_input.value;
    
    if (fname && lname && nickname && email) {
        const newUser = new Person(fname, lname, nickname, email);
        localStorage.setItem(lname, JSON.stringify(newUser))
    } else {
        console.log(`Cannot create user without 1 of props`);
    }
} 

// Add div with error message to a page 
const error_msg = document.createElement('div');

error_msg.setAttribute('class', 'error-msg');
error_msg.innerHTML = '(!) You should enter a proper email into this field!';
error_msg.style.display = 'none';

document.getElementById('email-input-container').append(error_msg);

// Add event listener to a button.
const submit_btn = document.querySelector('input[type="submit"]');

email_input.addEventListener('change', (e) => {
    const emailRegExp = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/;
    if (emailRegExp.test(e.target.value)) {
        error_msg.style.display = 'none';
    } else {
        error_msg.style.display = 'block';
    }
})

const emailRegExp = new RegExp('^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$', 'gi')
