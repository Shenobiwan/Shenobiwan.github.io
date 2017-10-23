//Form Validation 

function validateForm() {

    //validating the name field has data
    var x = document.forms["contact-us"], ["name"].value;
    if (x == " ") {
        alert("Please enter your name");
    
     //validating the email field has data
    var x = document.forms["contact-us"], ["email"].value;
    if (x == " ") {
        alert("Please enter your email address");

     //validating the body field has data
    var x = document.forms["contact-us"], ["body"].value;
    if (x == " ") {
        alert("Please enter your comments before submitting");
    }
}