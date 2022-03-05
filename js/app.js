//code for dashboard page


//set and get variables for dashboard page

const getForm = document.querySelector('#sign-in-form');
const emailInputValue = document.querySelector('#email').value;
const passwordInputValue = document.querySelector('#password').value;
const signInError = document.getElementById('error');
const SB_SI_URL = "https://yisignzphxpjugshmhhp.supabase.co/auth/v1/token?grant_type=password";
const SB_SI_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";



//set and get error message for page (name)




//set up event listener for sign-in page


getForm.addEventListener('submit',(devt)=>{
    signInError.innerHTML = "";
    devt.preventDefault();
    const emailInputValue = document.querySelector('#email');
    const passwordInputValue = document.querySelector('#password');


    if(
        checkNotEmpty(emailInputValue,"you must enter a email")&&
        checkNotEmpty(passwordInputValue,"you must enter a password")

    ){

      login(emailInputValue,passwordInputValue)
          .then (data => {
              if (data.user.email !== undefined){
                  window.location.replace('/dashboard.html')
              }
          })
    }


});

//created function to validate inputs, create div,set inner html to create div, and append to element on index page.
async function login (email,password){

    const existingUser = {
        email: email,
        password: password
    }

    const signedInUser = await fetch(`${SB_SI_URL}`, {
        method: "POST",
        headers: {
            "apikey": `${SB_SI_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(existingUser)

    })
    const signedUser = await signedInUser.json()
    return signedUser
}


function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signInError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true}