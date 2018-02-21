window.addEventListener("load", init);

function init(){
    username = document.querySelector("#username");
    usermail = document.querySelector("#usermail");
    userpwd = document.querySelector("#userpwd");
    confpwd = document.querySelector("#confpwd");
    span = document.getElementsByTagName("span");
    file = document.querySelector("#file");
    username.addEventListener("blur", blankCheck);
    userpwd.addEventListener("keyup", passwordStrength);
    file.addEventListener("change",uploadImage);
    usermail.addEventListener("change", validateEmail);
}

function blankCheck(){
    if(username.value == "") {
        span[0].innerHTML = "Cannot leave this field blank";
    }
    else {
        span[0].innerHTML = "";
    }
}

function uploadImage(){
    img = document.querySelector("#image");
    imageName = file.files[0].name;
    img.src = 'images/'+imageName;
}

function passwordStrength(){
    if(userpwd.value.length == 0) {
        span[2].innerHTML = "Please fill this field";
        span[3].className = '';
    }
    else if(userpwd.value.length > 0 && userpwd.value.length < 5){
        span[2].innerHTML = "Weak Password";
        span[2].style.color = "red";
        // span[3].style.width = '50px';
        span[3].className = 'red';
    }
    else if(userpwd.value.length >= 5 && userpwd.value.length < 8){
        span[2].innerHTML = "Average Password";
        span[2].style.color = "yellow";
        // span[3].style.width = '100px';
        span[3].className = 'yellow';
    }
    else if(userpwd.value.length >= 8){
        span[2].innerHTML = "Strong";
        span[2].style.color = "green";
        // span[3].style.width = '150px';
        span[3].className = 'green';
    }
    else {
        span[2].innerHTML = "";
    }
}

function redirect(){
    event.preventDefault();
}

function validateEmail(){
    var str = usermail.value;
    // console.log(isBlank(str));
    if(isBlank(str)){
        span[1].innerHTML = "";
    }
    else {
        span[1].innerHTML = "Please fill something";
    }
}

function isBlank(str){
    return (/[^\s]/.test(str))
}

// function pwdValid(){
//     return (/[A-Z]{1}\w+/.test())
// }

function checkEmail(str){
    return (/\w+([@]{1})+\w+[.]+\w+/.test(str))
}