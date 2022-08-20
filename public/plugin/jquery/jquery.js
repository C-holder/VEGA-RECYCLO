// get Data

const firstname= document.querySelector("#firstname");
const lastname= document.querySelector("#lastname");
const email= document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");




// validate Data
function validateForm(){

	if (firstname.value.lenght < 1){
		errorNodes[0].innerText = "le nom ne peut être vide";
		firstname.classList.add("error-border");

	}
}