'use strict';

function passwordValidation(e) {
    // Get password inputs, initialize password verification pattern
    const passPattern = /^(?=[\w@#$^&*+=]{8,20}$)\w+[@#$^&*+=]*/;
    const passInput = document.querySelector('#password1');
    const passConfirmInput = document.querySelector('#password2');

    // Create div with error msg
    const errorMsg = document.createElement('div');
}
