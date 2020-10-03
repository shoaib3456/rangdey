// Toggling
let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");

        document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
    });
}
// Toggling end



const userData = [
    {
        myName: 'maha',
        myEmail: 'maha@gmail.com',
        myPass: '00000'
    },
    {
        myName: 'noor',
        myEmail: 'noor@gmail.com',
        myPass: '11111'
    }
];
let newData = {
    myName: 'wani',
    myEmail: 'wani@gmail.com',
    myPass: '12345'
}
userData.push(newData);
console.log(userData);

// let newData = {};

// for (let i = 0; i < localStorage.length; i++) {
//     if (window.localStorage.key(i) === 'username' && window.localStorage.key(i) === 'email') {
//         newData = {
//             myName: window.localStorage.getItem('username'),
//             myEmail: window.localStorage.getItem('email')
//         }
//         userData.push(newData);
//         console.log(userData);
//     }
// }

// Get from Html
const form = document.getElementById('form');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const user_email = document.getElementById('user-email');
const user_password = document.getElementById('user-password');
const username = document.getElementById('username');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// SignUp Functionality
//add Event
signup.addEventListener('click', (event) => {
    event.preventDefault();
    validate();
});

// Local Storage Fn
const setInLocalStorage = (usernameValue, emailValue, contactValue, passwordValue, cpasswordValue) => {
    window.localStorage.setItem('username', usernameValue);
    window.localStorage.setItem('email', emailValue);
    window.localStorage.setItem('contact', contactValue);
    window.localStorage.setItem('password', passwordValue);
    window.localStorage.setItem('confirm-password', cpasswordValue);

    // for (let i = 0; i < localStorage.length; i++) {
    //     if (window.localStorage.key(i) !== 'username' && window.localStorage.key(i) !== 'username' && window.localStorage.key(i) !== 'username' && window.localStorage.key(i) !== 'username' && window.localStorage.key(i) !== 'username')
    // }
    // window.localStorage.clear();
}

const sendData = (usernameValue, submitRate, count) => {
    if (submitRate === count) {
        alert('Registered Successful');
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

    // Calling Local Storage Fn
    setInLocalStorage(usernameValue, emailValue, contactValue, passwordValue, cpasswordValue);
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



// LogIn Fubctionality:

// Get Item from Local Storage
let userEmail = localStorage.getItem('email');
let userPassword = localStorage.getItem('password');
let userUsername = localStorage.getItem('username');;

// let userEmail = 'abc@gmail.com'
// let userPassword = '12345';
// let userUsername = 'Maha';


//add Event
login.addEventListener('click', (event) => {
    event.preventDefault();
    loginValidation();
});

const loginDataSend = (userUsername, submitRate, count) => {
    if (submitRate === count) {
        alert('Logged In Successfully');
        swal("Welcome! " + userUsername, "You Are Successfully Logged In", "success");
        location.href=`index.html?username=${usernameValue}`;
    }
}

// Through Successful Validation alert
const loginSuccessMsg = (userUsername) => {
    
    let formCon = document.getElementsByClassName('f-c');
    console.log(formCon)
    var count = formCon.length - 1;

    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-control success') {
            var submitRate = 0 + i;
            console.log(submitRate);
            console.log('succ msg')
            loginDataSend(userUsername, submitRate, count);
        } else {
            return false;
        }
    }
}

// // function check Email
// const isUserEmail = (userEmailVal) => {
//     let isEmail = userData.map(user => {
//         console.log(user.myEmail);
//         return user.myEmail;
//     })
//     if (userEmailVal !== isEmail) {
//         return false;
//         console.log(isEmail);
//     }

// }

// define the validate fn
const loginValidation = () => {
    const userEmailVal = user_email.value.trim();
    const userPassVal = user_password.value.trim();

    //validate email
    if (userEmailVal === "") {
        setErrorMsg(user_email, 'Please Enter Your Email');
    } else if (userEmailVal !== userEmail) {
        // console.log(userEmailVal+' '+emailFromObj)
        setErrorMsg(user_email, 'Incorrect Email');
    } else {
        setSuccessMsg(user_email);
    }

    //validate Password
    if (userPassVal === "") {
        setErrorMsg(user_password, 'Please Enter Your Password');
    } else if (userPassVal !== userPassword) {
        setErrorMsg(user_password, 'Incorrect Password');
    } else {
        setSuccessMsg(user_password);
    }

    loginSuccessMsg(userUsername);
}
