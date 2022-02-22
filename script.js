'use strict';
//-------variables------------------------
const getS = selector => document.querySelector(selector);
const getSA = selector => document.querySelectorAll(selector);
const firstName = document.querySelector('input[id="name"]');
const lastName = document.querySelector('input[id="surname"]');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const signUp = document.querySelector('input[type="submit"]');
//--------------
let fn, ln, em, pas;
//-------RegExp----------------------------
const nameRegExp = /^[a-zA-Z]{1,20}$/;
const emailRegExp = /^\S{1,}@\S{1,}$/;
const passwordRegExp = /^\w{8,15}$/;
//-------placeholder animation-------------
firstName.onfocus = function() {
    getS('.label1').classList.remove('hidden');
    firstName.placeholder = '';
};
lastName.onfocus = function() {
    getS('.label2').classList.remove('hidden');
    lastName.placeholder = '';
};
email.onfocus = function() {
    getS('.label3').classList.remove('hidden');
    email.placeholder = '';
};
password.onfocus = function() {
    getS('.label4').classList.remove('hidden');
    password.placeholder = '';
};
//--------validation of form fields--------------------
firstName.oninput = function() {
    let testName = nameRegExp.test(firstName.value);
    if (testName) {
        getS('.form_field1').classList.add('success');
        getS('.form_field1').classList.remove('error');
        getS('.error_message1').classList.add('hidden');
        fn = 'ok';
    } else {
        getS('.form_field1').classList.add('error');
        getS('.error_message1').classList.remove('hidden');
        getS('.form_field1').classList.remove('success');
        fn = '';
    }
    return fn;
};
lastName.oninput = function() {
    let testName = nameRegExp.test(lastName.value);
    if (testName) {
        getS('.form_field2').classList.add('success');
        getS('.form_field2').classList.remove('error');
        getS('.error_message2').classList.add('hidden');
        ln = 'ok';
    } else {
        getS('.form_field2').classList.add('error');
        getS('.error_message2').classList.remove('hidden');
        getS('.form_field2').classList.remove('success');
        ln = '';
    }
    return ln;
};
email.oninput = function() {
    let testEmail = emailRegExp.test(email.value);
    if (testEmail) {
        getS('.form_field3').classList.add('success');
        getS('.form_field3').classList.remove('error');
        getS('.error_message3').classList.add('hidden');
        em = 'ok';
    } else {
        getS('.form_field3').classList.add('error');
        getS('.error_message3').classList.remove('hidden');

        getS('.form_field3').classList.remove('success');
        em = '';
    }
    return em;
};
password.oninput = function() {
    let testPassword = passwordRegExp.test(password.value);
    if (testPassword) {
        getS('.form_field4').classList.add('success');
        getS('.form_field4').classList.remove('error');
        getS('.error_message4').classList.add('hidden');
        pas = 'ok';
    } else {
        getS('.form_field4').classList.add('error');
        getS('.error_message4').classList.remove('hidden');

        getS('.form_field4').classList.remove('success');
        pas = '';
    }
    return pas;
};
//------------sign up-----------------
window.addEventListener('change', event => {
    event.preventDefault();
    if (fn && ln && em && pas && getS('input[type ="checkbox"]').checked) {
        signUp.style.backgroundColor = 'blue';
    } else {
        signUp.style.backgroundColor = 'rgb(120, 110, 248';
    }
});
signUp.addEventListener('click', event => {
    event.preventDefault();
    getS('.modal').style.display = 'block';
});
//-----------exploring-----------------
getS('#exploring').addEventListener('click', event => {
    event.preventDefault();
    getS('.modal').style.display = 'none';
    getSA('.field').forEach(inp => (inp.value = ''));
    getS('input[type="checkbox"]').checked = false;
    getSA('.label').forEach(lab => lab.classList.add('hidden'));
    firstName.placeholder = 'First name';
    lastName.placeholder = 'Last name';
    email.placeholder = 'Email address';
    password.placeholder = 'Password';
});