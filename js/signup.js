const signupForm = document.getElementById('sign-up-form');
const signupFirstName = document.getElementById('first-name');
const signupLastName = document.getElementById('last-name');
const signupEmail = document.getElementById('email');
const signupPassword = document.getElementById('sign-in-password');
const signupError = document.getElementById('error');
const SB_SIGNUP_URL = "https://yisignzphxpjugshmhhp.supabase.co/auth/v1/signup";
const SB_SIGNUP_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";



signupForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    if (
        checkNotEmpty(signupFirstName, "enter first name required") &&
        checkNotEmpty(signupLastName, "last name required") &&
        checkNotEmpty(signupEmail, "email required") &&
        checkNotEmpty(signupPassword, "password required")
    ) {
        signup(signupEmail.value,signupPassword.value).then(data => {
            if(data.email !== undefined){
                window.location.replace('/dashboard.html')
            }
        })
        console.log("hello")
        // console.log(user)
    }

})





function checkNotEmpty(domInput, errorMessage) {
    if (domInput.value === "") {
        // signInError.innerHTML = "";
        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signupError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true
}

async function signup (email,password){

    const newUser = {
        email: email,
        password: password
    }

    const signUpUser = await fetch(`${SB_SIGNUP_URL}`, {
        method: "POST",
        headers: {
            "apikey": `${SB_SIGNUP_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)

    })
    const signedUser = await signUpUser.json()
    return signUpUser
}


