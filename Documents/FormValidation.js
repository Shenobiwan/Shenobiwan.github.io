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
    nameValidation();
}
function emailValidation() {
    
    var patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$");
    var emailField = document.forms["contact-us"] ["email address"].value;
    if (patt.test(emailField) == false) {
            alert("Your email is not formatted correctly. Please correct and resubmit the form.");
        }
    }
function nameValidation() {
    
    var patt = new RegExp ("/[A-Za-z\s]/+$");
    var nameField = document.forms["contact-us"] ["name"].value;
    if(patt.test(nameField) == false) {
           alert("Your name cannot contain numbers or symbols. Please correct and resubmit the form.");
        }
    }


