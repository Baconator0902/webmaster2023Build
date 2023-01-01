function signUpShow() {

    signUpDiv = document.getElementById("signUpDiv");
    logInDiv = document.getElementById("logInDiv");

    signUpDiv.style.display = "block";
    logInDiv.style.display = "none";
}

function logInShow() {

    signUpDiv = document.getElementById("signUpDiv");
    logInDiv = document.getElementById("logInDiv");

    signUpDiv.style.display = "none";
    logInDiv.style.display = "block";
}