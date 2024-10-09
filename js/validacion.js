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
