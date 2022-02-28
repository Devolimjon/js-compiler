const email = document.querySelector('.input_text');
const password = document.querySelector('.password');
const button = document.querySelector('.input_text button');
const error = document.querySelector('.alert_error')
const text_error = document.querySelector('.error_text')

button.onclick, function () {
    if (email.value ==="" && password.value ===""){
        error.classList.remove('d-none');
        text_error.innerText = 'You are do not write a formulo'
    }
}