//Form Validation 

var contactFields = [document.forms["contact-us"] ["name"].value, document.forms["contact-us"] ["email"].value, document.forms["contact-us"] ["body"].value ];
var missingValues = "";

function validateForm(contact) {

    for(var i = 0; i < contact.length; i++) {
        if(contact[i] == " ") {
            missingValues += contact[i] + "\n";    
        }
    alert("Form values are missing, please enter your: \n" + missingValues);
    }
}
