const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');
var regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

myForm.addEventListener('submit', onSubmit);
var i = 2;
function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' || password.value === '') {
        const msg3 = document.createElement("text");
        msg3.classList.add("error");
        msg.appendChild(msg3);
        msg3.innerText = 'Please Fill All The Fields';
        setTimeout(() => msg3.remove(), 3000);
    } else {
        if (nameInput.value.length <= 3 || password.value.length < 6 || !password.value.match(regex)) {
            const msg2 = document.createElement("text");
            msg2.classList.add("error");
            msg.appendChild(msg2);
            msg2.innerText = 'Enter Correct Password or Name';
            setTimeout(() => msg2.remove(), 3000);
        }
        else {
            const li = document.createElement('li');
            const text = document.createTextNode(`Name: ${nameInput.value} || Email: ${emailInput.value}`);
            li.appendChild(text);
            userList.appendChild(li);
            nameInput.value = '';
            emailInput.value = '';
            password.value = '';
        }
    }
}