let email = document.getElementById("inputEmail");
let password = document.getElementById("password");
let name1 = document.getElementById("inputname");
let pwd = document.getElementById("inputPassword1");
let phoneno = document.getElementById("phoneno");
let erroremail = document.getElementById("erroremail");
let errorpwd = document.getElementById("errorpwd");
let errorrepwd = document.getElementById("errorrepwd");
let errorphoneno = document.getElementById("errorphone");
let errorname = document.getElementById("errorname");

function validate1() {
    
    var flag= 0;
    let phoneregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var mailformat = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (name1.value.trim() == "") {
        errorname.innerHTML = "Name cannot be empty";
        errorname.style.color = "red";
        name1.style.border = "3px solid red";
        flag=0;
    }
    else if(name1.value.trim() != ""){
        errorname.innerHTML = "";
        errorname.style.color = "";
        name1.style.border = "3px solid green";
        flag=1;
    }
    if (phoneregex.test(phoneno.value) == false) {
        errorphoneno.innerHTML = "Invalid Phone Number";
        errorphoneno.style.color = "red";
        phoneno.style.border = "3px solid red";
        flag=0;
    }
    else if (phoneregex.test(phoneno.value) == true) {
        errorphoneno.innerHTML = "";
        errorphoneno.style.color = "";
        phoneno.style.border = "3px solid green";
        flag=1;
        
    }
    if (mailformat.test(email.value) == false) {
        erroremail.innerHTML = "Invalid email";
        erroremail.style.color = "red";
        email.style.border = "3px solid red";
        flag=0;
    }
    else if (mailformat.test(email.value) == true) {
        erroremail.innerHTML = "";
        erroremail.style.color = "";
        email.style.border = "3px solid green";
        flag=1;
    }
    if (password.value.trim() == "") {
        errorpwd.innerHTML = "Invalid password";
        errorpwd.style.color = "red";
        password.style.border = "3px solid red";
        flag=0;
    } 
    else if (password.value.trim() != "") {
        errorpwd.innerHTML = "";
        errorpwd.style.color = "";
        password.style.border = "3px solid green";
        flag=1;
    } 
    if (pwd.value.trim() == ""||password.value != pwd.value) {
        errorrepwd.innerHTML = "Invalid password or Password does not match";
        errorrepwd.style.color = "red";
        pwd.style.border = "3px solid red";
        flag=0;
    } 
     else if (pwd.value.trim() != "") {
        errorrepwd.innerHTML = "";
        errorrepwd.style.color = "";
        pwd.style.border = "3px solid green";
        flag=1;
    } 
    // else  if (password.value != pwd.value) {
    //     errorrepwd.innerHTML = "Password does not match";
    //     errorrepwd.style.color = "red";
    //     pwd.style.border = "3px solid red";
    //     flag=0
        
    // } 

    
    
    
    
    if (flag==1)
        {return true}
    else if (flag==0){
return false
    }





 
    // else {
    //     alert("Valid Credentials");
    //     // document.form1.text1.focus();
    //     return true
    // }

  

}

function passwordChanged() {
   
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
        pwd.style.border = "2px solid red";
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:darkgreen">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}