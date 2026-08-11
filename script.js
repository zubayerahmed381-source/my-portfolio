// Portfolio Website JavaScript

console.log("Portfolio website loaded successfully!");


// Welcome Message

window.addEventListener("load", function () {

    console.log("Welcome to my portfolio!");

});


// Current Year in Footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} SM Zubayer Ahmed | All Rights Reserved`;

}
function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

}