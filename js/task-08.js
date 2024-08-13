"use strict";

const form = document.querySelector(`.login-form`);


form.addEventListener("submit", (event) => {


    event.preventDefault();

    const inputEmail = form.elements.email;
    const inputPassword = form.elements.password;
    
     if (!inputEmail.value || !inputPassword.value) {
         alert('Toate câmpurile trebuie completate.');
       return; }

const formData = {
     email: inputEmail.value,
      password: inputPassword.value
};
      console.log('Datele introduse:', formData);

       form.reset();
});
