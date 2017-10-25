//Form Validation 
var missingValues = "";

function validateForm() {
    var x =  document.forms["contact-us"];
    var i;
    for(i = 0; i < x.length; i++) {
        if(x.elements[i].value == "") {
            missingValues += x.elements[i].name + "\n";    
        }
    }
    if(missingValues == null) {
    alert("Form values are missing, please enter your: \n" + missingValues);
    }
    emailValidation();
}
function emailValidation() {
    var patt = new etest("@");
    if(patt.test(document.forms["contact-us"] ["email"].value)) {
        else {
            alert("Your email is missing the "@" symbol. Please correct and resubmit the form.")
        }
    }
}
