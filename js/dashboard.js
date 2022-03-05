 const dashForm = document.getElementById('dashboard-form');
 const dashName = document.getElementById('name');
 const dashContent = document.getElementById('journal-entries');
 const dashError = document.getElementById('error');

 dashForm.addEventListener('submit',(event)=>{

     event.preventDefault();
// console.log(dashContent)

     if (
        checkNotEmpty(dashName.value.trim(),"enter your name")&&checkNotEmpty(dashContent.value.trim(),"enter story")
     ){

     }

 })









 function checkNotEmpty(domInput,errorMessage){
     dashError.innerHTML = "";
     // console.log(domInput.value)
     if(domInput === ""){
         // console.log(domInput.value)
         // console.log("i am empty")
         const div = document.createElement('div');

         div.innerHTML =`<p class="bg-blue-200 p-3 w-full rounded-lg 
                        text-center text-blue-900 font-bold">${errorMessage}</p>`;
         console.log(div)
         dashError.appendChild(div);
         return false; //ends block of code in if statement
     }

     return true}