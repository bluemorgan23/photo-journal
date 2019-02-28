// Function submit logs the input text and the textarea text values to the console when the submit button is clicked. Then the input fields are both reset.

const contactName = document.querySelector("#contactName");
const askQuestion = document.querySelector("#askQuestion");
const submitButton = document.querySelector("#submitButton");

function submit() {
    console.log(contactName.value + " wants to know " + askQuestion.value);
    contactName.value = "";
    askQuestion.value = "";
}

submitButton.addEventListener("click", submit);

// let imageVAR =  document.querySelector("#img1")
// imageVAR.addEventListener("click", function() {
//     let myImage = document.querySelector("#myImg");
// myImage.setAttribute("src" , `${imageVAR}`)
// })