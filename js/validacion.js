const emailInput = document.getElementById("email");
const validIcon = document.getElementById("valid-icon");

const element = document.getElementById("email");
console.log(element.checkValidity());

function validate() {
    const input = document.getElementById('email');
    const validityState = input.validity;
  
    if (validityState.valueMissing) {
      input.setCustomValidity("Debe ingresar un email");
    } else if (validityState.typeMismatch) {
      input.setCustomValidity("El email debe tener un formato válido");
    } else {
      input.setCustomValidity("");
    }
  
    input.reportValidity();
  }

  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe inmediatamente
    validate(); // Llamar a la función de validación
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
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