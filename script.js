var inputcheck = false;
var passcheck = false;
var datecheck = true;
var checkcheck = false;
function validateInput() {
    const input = document.getElementById('email').value.trim();
    const gumb = document.getElementById("gumb");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input === "") {
        gumb.disabled = true;
    } else if (!emailPattern.test(input)) {
        showAlert('Invalid input. Please enter a valid email');
        gumb.disabled = true;
    } else {
        inputcheck = true;
    }
}

function checkPassword() {
    const gumb = document.getElementById("gumb");
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
    } else {
        passcheck=true;
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

    // Create a date object using the selected values
    const date = new Date(year, month - 1, day);

    // Check if the date is valid
    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
        datecheck = true;
    } else {
        gumb.disabled=true;
        showAlert('Invalid date. Please enter a valid date');
        datecheck = false;
    }
}
setInterval(preveri, 100);
function preveri() {
    const gumb = document.getElementById("gumb");
    //showAlert(inputcheck + passcheck + datecheck + checkcheck, 'info'  );
    if(inputcheck == true && passcheck == true && datecheck == true && checkcheck == true){
        gumb.disabled=false;
    }
    else
        gumb.disabled=true;
}

function loginNumOrEmail() {
    const input = document.getElementById('in1').value.trim();
    const gumb = document.getElementById("gum");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\+?(\d[\d-.() ]{7,}\d$)/;

    if (input === "") {
        gumb.disabled = true;
    } else if (!emailPattern.test(input) && !phonePattern.test(input)) {
        showAlert('Invalid input. Please enter a valid email or phone number.');
        gumb.disabled = true;
    } else {
        gumb.disabled = false; // Input is valid
    }
}

function showAlert(message, icon = 'error') {
    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 6000
    });
}
