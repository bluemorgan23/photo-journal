function submit() {
    console.log(document.getElementById("contactName").value + " wants to know " + document.getElementById("askQuestion").value);
    document.getElementById("contactName").value = "";
    document.getElementById("askQuestion").value = "";
}

document.getElementById("submitButton").addEventListener("click", submit);