'use strict';

console.log('proof');

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  var name = event.target.inputElementName.value;
  var age = event.target.inputElementAge.value;

console.log(name);
console.log(age);

//   alert(`Hello ${name} you are ${age}`);

  event.target.inputElementName.value = null;
};



