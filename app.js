

const sections = document.querySelectorAll("section");
const closeSignUpBtn = document.querySelector(".close__signup__btn");
const closeSignInBtn = document.querySelector(".close__signin__btn");

const signUpPage = document.getElementById("sign-up");
const signInPage = document.getElementById("sign-in");

let container = document.querySelector(".container");

const loginPage = document.querySelector(".have__an__account a");
const signUpLoginPage = document.querySelector(".dont__have__an__account a");

closeSignUpBtn.addEventListener("click", ()=> {

        signUpPage.style.display = "none";

})

closeSignInBtn.addEventListener("click", ()=> {

        signInPage.style.display = "none";

})



function signUpFunction(){
        
        signUpPage.style.display = "none";
        signInPage.style.display = "flex";
    
}

function loginFunction(){
        
        signUpPage.style.display = "flex";
        signInPage.style.display = "none";

}


loginPage.addEventListener("click", signUpFunction)

signUpLoginPage.addEventListener("click", loginFunction)