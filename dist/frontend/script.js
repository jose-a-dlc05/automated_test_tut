"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#signupForm');
const passwordInput = (document.querySelector('#passwordInput'));
const usernameInput = (document.querySelector('#usernameInput'));
const serverMessage = (document.querySelector('#serverMessage'));
if (form !== null && passwordInput && usernameInput && serverMessage) {
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const password = passwordInput.value;
        const username = usernameInput.value;
        const result = yield fetch('http://localhost:8080/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => response.json());
        if (result.message) {
            serverMessage.innerText = result.message;
            serverMessage.classList.replace('error', 'success');
        }
        if (result.error) {
            serverMessage.innerText = result.error;
            serverMessage.classList.replace('success', 'error');
        }
        console.log(result);
    }));
}
