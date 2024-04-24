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

// Function to be an event listener.
const createUser = (e) => {
    e.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const nickname = document.querySelector('#nickname').value;
    const email = document.querySelector('#email').value;
    
    if (fname && lname && nickname && email) {
        const newUser = new Person(fname, lname, nickname, email);
        localStorage.setItem(lname, JSON.stringify(newUser))
    } else {
        console.log(`Cannot create user without 1 of props`);
    }
} 

// Add event listener to a button.
const submit_btn = document.querySelector('input[type="submit"]');
submit_btn.addEventListener('click', createUser);

