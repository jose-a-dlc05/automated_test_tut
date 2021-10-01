"use strict";
const validatePassword = (password) => {
    // at least 8 characters long
    const validLength = password.length >= 8;
    // has at least one letter
    let hasLetter = false;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of alphabet) {
        if (password.includes(letter)) {
            hasLetter = true;
        }
    }
    // at least one number
    let hasNumber = false;
    const numbers = '0123456789';
    for (const number of numbers) {
        if (password.includes(number)) {
            hasNumber = true;
        }
    }
    const validPassword = hasNumber && hasLetter && validLength;
    return validPassword;
};
module.exports = validatePassword;
