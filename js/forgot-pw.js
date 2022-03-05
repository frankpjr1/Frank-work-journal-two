const forgotPwForm = document.getElementById('forgot-pw-form');
const forgotPwFirstName = document.getElementById('first-name');
const forgotPwFormLastName= document.getElementById('last-name');
const forgotPwFormEmail = document.getElementById('email');
const forgotPwFormError = document.getElementById('error');


forgotPwForm.addEventListener('submit',(evt)=>{
    forgotPwFormError.innerHTML = "";
    evt.preventDefault();
    console.log(forgotPwFirstName.value)

if (
    checkNotEmpty(forgotPwFirstName,"first name required")&&
    checkNotEmpty(forgotPwFormLastName,"last name required")&&
    checkNotEmpty(forgotPwFormEmail,"email required")
){

    }


})



function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        forgotPwFormError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true}