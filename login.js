let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let errorpass = document.getElementById("errorpass");
let erroremail = document.getElementById("erroremail");
function validate() {
  

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    if (mailformat.test(email.value)==false) {
        erroremail.innerHTML = "Invalid email";
        erroremail.style.color = "red";
        email.style.border = "3px solid red";
        // document.email.focus();
       flag=0
    }
    else if (mailformat.test(email.value) == true) {
        erroremail.innerHTML = "";
        erroremail.style.color = "";
        email.style.border = "3px solid green";
        flag=1;
    }
     if(enoughRegex.test(password.value)==false){
        errorpass.innerHTML = "Invalid password";
        errorpass.style.color = "red";
        password.style.border = "3px solid red";
        
        return false

    }    
    // else {
       
    //     // document.form1.text1.focus();
    //     return true
    // }
    

    if (flag==1)
    {return true}
else if (flag==0){
return false
}
}