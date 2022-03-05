const creatPwForm = document.getElementById('create-pw-form');
const creatPwEmail= document.getElementById('email');
const creatPwPassword = document.getElementById('createpassword');
const creatPwFormError = document.getElementById('error');

// console.log(creatPwEmail);
// console.log(creatPwFormError);


creatPwForm.addEventListener('submit',(evt)=>{

    evt.preventDefault();
console.log(evt);
    console.log(creatPwEmail.value);

   if(checkNotEmpty(creatPwEmail,"email required")){

   }


})



function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        creatPwFormError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true}