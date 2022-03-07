const signupForm = document.getElementById('sign-up-form');
const signupFirstName = document.getElementById('first-name');
const signupLastName = document.getElementById('last-name');
// const signupEmail = document.getElementById('email');
const signupPassword = document.getElementById('sign-up-password');
const signupError = document.getElementById('error');
// const SB_SIGNUP_URL = "https://yisignzphxpjugshmhhp.supabase.co/auth/v1/signup";
// const SB_SIGNUP_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";

const SB_SU_URL = "https://yisignzphxpjugshmhhp.supabase.co"
const SB_SU_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM"

signupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);
    const emailValue = evt.target[2];
    const pwValue = evt.target[3];
// console.log(emailValue.value)
// console.log(pwValue.value)

    if (
        checkNotEmpty(signupFirstName, "enter first name required") &&
        checkNotEmpty(signupLastName, "last name required") &&
        checkNotEmpty(emailValue, "email required") &&
        checkNotEmpty(pwValue, "password required")
    ) {
        console.log(evt)
        signUpLk(emailValue,pwValue)

    }
    {
        window.location.replace(`/index.html`)
    }{
        window.location.replace(`/signup.html`)
    }


})





function checkNotEmpty(domInput, errorMessage) {

    if (domInput.value === "") {
        signupError.innerHTML = "";
        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signupError.appendChild(div);


        return false; //ends block of code in if statement
    }

    return true

}


async function signUpLk(email,password){
    let newUser = {
        email:email.value,
        password:password.value
    }
    // console.log(newUser)
    // console.log(newUser)
    const response = await fetch(`${SB_SU_URL}/auth/v1/signup`, {
        method: "POST",
        headers: {
            "apikey": `${SB_SU_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(res =>{
        document.getElementById('first-name').value ="";
        document.getElementById('last-name').value ="";
        document.getElementById('email').value ="";
        document.getElementById('sign-up-password').value ="";
    })

}


