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
    if(missingValues == null || missingValues == "") {
    } else { alert("Form values are missing, please enter your: \n" + missingValues);
    }
    emailValidation();
}
function emailValidation() {
    var patt = new RegExp("@");
    var emailField = document.forms["contact-us"] ["email address"].value;
    if(patt.test(emailField) == false && emailField !== "") {
            alert("Your email is missing the \"@\" symbol. Please correct and resubmit the form.")
        }
    }
function nameValidation() {
    var patt = new RegExp("@");
    var nameField = document.forms["contact-us"] ["name"].value;
    if(isNaN(nameField)) {
    } else { 
        alert("Your name cannot contain numbers. Please correct and resubmit the form.")
        }
    }

