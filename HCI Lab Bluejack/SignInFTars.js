function validate(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const agreement = document.getElementById("agreement")
    // const select = document.getElementById("select");

    console.log(username)

    if(username.length < 5){
        alert("Username length must be at least 5 letters")
    }
    else if (valueSelect() == false) {
        alert("You must select a country")
    }
    
    else if (!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }

    else if(isAlphaNum(password) == false){
        alert("Password must contain 1 number and 1 alphabet")
    }
    else if (!agreement.checked){
        alert("You must agree with our terms and conditions")
    }
        
    else{
        // document.getElementById("error_msg").innerHTML = ""
        window.location.href = "HomeFTars.html"
    } 

}

function isAlphaNum(password){
    var isAlpha = false
    var isNum = false
    for(let i = 0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else isNum = true
    }

    if(isAlpha == false || isNum == false){
        return false
    } 
    else{
        return true
    } 
}

function valueSelect(){
    const select = document.getElementById("country");
    if (select.value) {
        return true;
    }
    return false;
}