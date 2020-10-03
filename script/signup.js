const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add Event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const sendData = (usernameValue, submitRate, count) => {
    if (submitRate === count) {
        swal("Welcome! " + usernameValue, "Registered Successful", "success");
        // location.href=`demo.html?username=${usernameValue}`;
    }
}

// Through Successful Validation alert
const successValidationMsg = (usernameValue) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;

    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-control success') {
            var submitRate = 0 + i;
            console.log(submitRate);
            sendData(usernameValue, submitRate, count);
        } else {
            return false;
        }
    }
    window.location = "login.html"

}
// More Email Validation
const isEmail = (emailValue) => {
    var atSymbol = emailValue.indexOf('@');
    if (atSymbol < 1) return false;

    var dot = emailValue.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailValue.length - 1) return false;
    return true;
}

// define the validate fn
const validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();


    //validate username
    if (usernameValue === "") {
        setErrorMsg(username, 'Username can not be blank');
    } else if (usernameValue.length <= 2) {
        setErrorMsg(username, 'Username min 3 character');
    } else {
        setSuccessMsg(username);
    }

    //validate email
    if (emailValue === "") {
        setErrorMsg(email, 'Email can not be blank');
    } else if (!isEmail(emailValue)) {
        setErrorMsg(email, ' Not a valid Email');
    } else {
        setSuccessMsg(email);
    }

    //validate Contact
    if (contactValue === "") {
        setErrorMsg(contact, 'Contact Number can not be blank');
    } else if (contactValue.length < 11 || contactValue.length > 11) {
        setErrorMsg(contact, 'Invalid Number');
    } else {
        setSuccessMsg(contact);
    }

    //validate Password
    if (passwordValue === "") {
        setErrorMsg(password, 'Password can not be blank');
    } else if (passwordValue.length <= 4) {
        setErrorMsg(password, 'Atleast 5 Character');
    } else {
        setSuccessMsg(password);
    }

    //validate Confirm Pass
    if (cpasswordValue === "") {
        setErrorMsg(cpassword, 'Confirm Password can not be blank');
    } else if (passwordValue !== cpasswordValue) {
        setErrorMsg(cpassword, 'Not Matched');
    } else {
        setSuccessMsg(cpassword);
    }

    successValidationMsg(usernameValue);
}
function setErrorMsg(input, errorMsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}