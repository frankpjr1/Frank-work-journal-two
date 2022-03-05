//code for dashboard page


//set and get variables for dashboard page

const getForm = document.querySelector('#sign-in-form');
const emailInputValue = document.querySelector('#email').value;
const passwordInputValue = document.querySelector('#password').value;
const signInError = document.getElementById('error');
const SB_SI_URL = "https://yisignzphxpjugshmhhp.supabase.co/auth/v1/token?grant_type=password";
const SB_SI_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";


const SUPABASE_URL = "https://yisignzphxpjugshmhhp.supabase.co"
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM"


//set and get error message for page (name)




//set up event listener for sign-in page


getForm.addEventListener('submit',(evt)=> {
    signInError.innerHTML = "";
    evt.preventDefault();
    const sbkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";
    const sburl = "https://yisignzphxpjugshmhhp.supabase.co/auth/v1/signup"
    const emailValue = evt.target[0];
    const pwValue = evt.target[1];
    console.log(emailValue.value);
    console.log(pwValue.value)

    if (
        checkNotEmpty(emailValue, "you must enter a email") &&
        checkNotEmpty(pwValue, "you must enter a password")

    ){
        fetch(sburl,{
            method: "POST",
            headers: {
                "apikey": `${sbkey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": emailValue.value,
                "password": pwValue.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
        });

//created function to validate inputs, create div,set inner html to create div, and append to element on index page.
// const login = async (email,password) => {
//     const existingUser = {
//         email: email,
//         password: password
//     }
//
// }




function signIn(email,password){
    fetch(`${sburl}/auth/v1/signup`,{
        method: "POST",
        headers: {
            "apikey": `${sbkey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email.value,
            "password": password.value
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}






//
// async function login (email,password){
//    await fetch(`${SUPABASE_URL}/auth/v1/signup`,{
//         method: "POST",
//         headers: {
//             "apikey": `${SUPABASE_API_KEY}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "email": emailInputValue.value,
//             "password": passwordInputValue.value
//         })
//     }).then(res => res.json())
//        .then(data => console.log(data))
// return true
// }


function checkNotEmpty(domInput,errorMessage){
    if(domInput.value === ""){
        const div = document.createElement('div');
        div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
        signInError.appendChild(div);
        return false; //ends block of code in if statement
    }

    return true}