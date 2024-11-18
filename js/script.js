var inputcheck = false;
var passcheck = false;
var datecheck = true;
var checkcheck = false;
function validateInput() {
    const input = document.getElementById('email').value.trim();
    const emailtext = document.getElementById('emailtext');
    const gumb = document.getElementById("gumb");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input === "") {
        gumb.disabled = true;
        emailtext.style.color = "red";
    } else if (!emailPattern.test(input)) {
        showAlert('Invalid input. Please enter a valid email');
        gumb.disabled = true;
        emailtext.style.color = "red";
    } else {
        inputcheck = true;
        emailtext.style.color = "lightgray";
    }
}

function checkPassword() {
    const gumb = document.getElementById("gumb");
    const passtext = document.getElementById("passtext");
    const password = document.getElementById("pass").value;
    const criteria = {
        length: /.{8,}/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        specialChar: /[!@#$%^&*]/,
    };

    let messages = [];
    if (!criteria.length.test(password)) messages.push("Password must be at least 8 characters long.");
    if (!criteria.uppercase.test(password)) messages.push("Password must contain at least one uppercase letter.");
    if (!criteria.lowercase.test(password)) messages.push("Password must contain at least one lowercase letter.");
    if (!criteria.number.test(password)) messages.push("Password must contain at least one number.");
    if (!criteria.specialChar.test(password)) messages.push("Password must contain at least one special character (e.g., !@#$%^&*).");

    if (messages.length > 0) {
        showAlert(messages.join(" "), "error");
        passtext.style.color = "red";
    } else {
        passcheck=true;
        passtext.style.color = "lightgray";
    }
}
function checboxcheck(){
    if(document.getElementById("checkic").checked)
        checkcheck=true;
    else
        checkcheck=false;
}

function validateDate() {
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const year = parseInt(document.getElementById('year').value);

    const textdate = document.getElementById("textdate");
    const date = new Date(year, month - 1, day);

    // Check if the date is valid
    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
        datecheck = true;
        textdate.style.color = "lightgray";
    } else {
        gumb.disabled=true;
        showAlert('Invalid date. Please enter a valid date');
        textdate.style.color = "red";
        datecheck = false;
    }
}
setInterval(preveri, 100);
function preveri() {
    const gumb = document.getElementById("gumb");
    const conttext = document.getElementById("conttex");
    //showAlert(inputcheck + passcheck + datecheck + checkcheck, 'info'  );
    if(checkcheck){
        gumb.disabled=false;
        conttext.style.color="white";
    }
    else{
        gumb.disabled=true; 
        conttext.style.color="gray";
    }
        
}
function showAlert(message, icon = 'error') {
    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: icon,
        title: message,
        confirmButtonText: "Ok",
        showConfirmButton: true,
        confirmButtonColor: "rgb(98,103,250)"
      }).then((result) => {
        if (result.isConfirmed) {
            
        }
      });
}
