function validateEmail() {
    const email = document.getElementById('email');
    const validityState = email.validity;
    const emailFeedback = document.getElementById('emailFeedback');

    console.log(email.checkValidity());
    if (validityState.valueMissing) {
    emailFeedback.textContent = 'Debe ingresar un email';
      email.classList.add('is-invalid');
    } else if (validityState.patternMismatch) {
    emailFeedback.textContent = 'El email debe tener un formato válido';
      email.classList.add('is-invalid');
    } else  if(validityState.valid) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        emailFeedback.textContent = '';
    }
  
    email.reportValidity();
  }

  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe inmediatamente
    validateEmail(); // Llamar a la función de validación
});

// Código de Bootstrap para la validación
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()