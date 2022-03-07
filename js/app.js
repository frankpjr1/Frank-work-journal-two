//code for dashboard page


//set and get variables for dashboard page

const getForm = document.querySelector('#sign-in-form');
const signInError = document.getElementById('error');



//set and get error message for page (name)
const sburl = "https://yisignzphxpjugshmhhp.supabase.co"
const sbkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";





//set up event listener for sign-in page


getForm.addEventListener('submit',(evt)=> {
    signInError.innerHTML = "";
    evt.preventDefault();
    const sbkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2lnbnpwaHhwanVnc2htaGhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTc0MTM3OCwiZXhwIjoxOTYxMzE3Mzc4fQ.QTzLb6v9bcJjJHgidwExKh0jZHJrfAeOh8rolBB2xEM";
    const sburl = "https://yisignzphxpjugshmhhp.supabase.co"
    console.log(evt);
    const emailValue = evt.target[0];
    const pwValue = evt.target[1];
    console.log(emailValue.value);
    console.log(pwValue.value)

    if (
        checkNotEmpty(emailValue, "you must enter a email") &&
        checkNotEmpty(pwValue, "you must enter a password")

    )
    {
        login(emailValue,pwValue)
    }

    let returnValue;
    if(emailValue.returnValue === false){
           console.log("please sign up for new password")
       } window.location.replace('dashboard.html')

        });





async function login (email,password){
    let user = {
        email:email.value,
        password:password.value
    }
   const response = await fetch(`${sburl}/auth/v1/token?grant_type=password`,{
        method: "POST",
        headers: {
            "apikey": `${sbkey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        document.getElementById('email').value=""
        document.getElementById('password').value=""
   }).then(items =>{
        console.log(items);

   })
return user
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