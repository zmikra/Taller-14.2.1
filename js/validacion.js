let all_fields = document.getElementsByTagName('input');

function validateFields(){
    for (let i = 0; i < all_fields.length; i++) {
        if (emptyField(all_fields[i]) && !isPassword(all_fields[i])) {
            console.log(all_fields[i]);
            all_fields[i].classList.add('is-invalid');
        } else {
            all_fields[i].classList.remove('is-invalid');
        }
    }
}

function emptyField(field) {
    return (field.value === '');
}

function isPassword(field) {
    return (field.id === "password1" || field.id === "password2");
}

function validateEmail() {
    const email = document.getElementById('email');
    const validityState = email.validity;
    const emailFeedback = document.getElementById('emailFeedback');

    if (validityState.valueMissing) {
        emailFeedback.textContent = 'Debe ingresar un email';
        email.classList.add('is-invalid');
    } else if (validityState.patternMismatch) {
        emailFeedback.textContent = 'El email debe tener un formato válido';
        email.classList.add('is-invalid');
    } else if (validityState.valid) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        emailFeedback.textContent = '';
    }

    email.reportValidity();
}

function validatePasswords(){
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const password2Feedback = document.getElementById("password2Feedback");
    const password1Feedback = document.getElementById("password1Feedback");
    const validity1 = password1.validity;
    const validity2 = password2.validity;


    if (validity1.valueMissing) {
        password1Feedback.textContent = 'Debe ingresar una contraseña';
        password1.classList.add('is-invalid');
        password2.classList.add('is-invalid');

        }else if (password1.value.length < 6) {
        password1.classList.add('is-invalid');
        password1Feedback.textContent = 'La contraseña debe tener al menos 6 caracteres';
        password2.classList.add('is-invalid');

        } else if(validity2.valueMissing) {
        password2Feedback.textContent = 'Debe repetir la contraseña';
        password2.classList.add('is-invalid');

        } else if (password1.value !== password2.value) {
        password2.classList.add('is-invalid');
        password2Feedback.textContent = 'Debe ser igual a "contraseña"';

        } else if (validity1.valid & validity2.valid) {
        password1.classList.remove('is-invalid');
        password2.classList.remove('is-invalid');
        password1.classList.add('is-valid');
        password2.classList.add('is-valid');
        password1Feedback.textContent = '';
        password2Feedback.textContent = '';
        }
}

const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario
    validateFields(); // Valida los campos genéricos
    validateEmail();  // Valida específicamente el campo de correo electrónico
    validatePasswords();

    // Aquí puedes verificar si algún campo aún tiene la clase 'is-invalid' antes de enviar
    const invalidFields = form.querySelectorAll('.is-invalid');
    if (invalidFields.length === 0) {
        form.submit(); // Solo envía el formulario si todas las validaciones son correctas
    }
});