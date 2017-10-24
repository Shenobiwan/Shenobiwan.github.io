//Form Validation 

var contactFields = [document.getElementById("contact-us").elements[0].value, document.getElementById("contact-us").elements[1].value, document.getElementById("contact-us").elements[2].value ];
var missingValues = "";

function validateForm() {

    for(var i = 0; i < contactFields.length; i++) {
        if(contactFields[i] == " ") {
            missingValues += contactFields[i] + "\n";    
        }
    alert("Form values are missing, please enter your: \n" + missingValues);
    }
}
