//Form Validation 

function validateForm() {
    var x =  document.forms["contact-us"];
    var missingValues = "";
    
    for(var i = 0; i < x.length; i++) {
        if(x.elements[i].value == " ") {
            missingValues += x.element.[i].id + "\n";    
        }
    alert("Form values are missing, please enter your: \n" + missingValues);
    }
}
