let all_fields = document.getElementsByTagName('input');





function validateFields(){
    for (i=0; i<all_fields.length; i++){
        if(emptyField(all_fields[i]) && !isPassword(all_fields[i])){
            console.log(all_fields[i])
            all_fields[i].classList.add('is-invalid');
    }   else{
        all_fields[i].classList.remove('is-invalid');
    }

}
}

function emptyField(field){
    return (field.value === '');
    }


function isPassword(field){
    return (field.id === "password1" || field.id === "password2");
}

/*
function clearErrors(){
    errors= document.getElementsByClassName('invalid-feedback');
    if (errors !== []){
        for (error in errors){
            error.remove();
        }}

}
*/

const form = document.getElementById("form");



form.addEventListener('submit', function() {
    validateFields();
})
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