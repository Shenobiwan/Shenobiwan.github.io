//Form Validation 

function validateForm() {
    var x =  document.forms["contact-us"];
    var missingValues = "";
    var i;
    for(i = 0; i < x.length; i++) {
        if(x.elements[i].value == " ") {
            missingValues += x.elements[i].name + "\n";    
        }
    }
    alert("Form values are missing, please enter your: \n" + missingValues);
}
