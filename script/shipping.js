function displayNoneCart() {
    document.querySelectorAll('.cart-info')[0].style.display = 'none';
    document.getElementsByClassName('left')[0].style.display = 'none';
    document.getElementsByClassName('left')[1].style.display = 'flex';
}
window.onresize = () =>{
    if(window.innerWidth < 951){
    document.querySelectorAll('.cart-info')[0].style.display = 'block';
    document.getElementsByClassName('left')[0].style.display = 'flex';
    document.getElementsByClassName('left')[1].style.display = 'none';
}}

function displayBlockCart() {
    document.querySelectorAll('.cart-info')[0].style.display = 'block';
    document.getElementsByClassName('left')[0].style.display = 'flex';
    document.getElementsByClassName('left')[1].style.display = 'none';
}

function inputFocus(indexlabel, indexInput) {
    document.querySelectorAll('label')[indexlabel].style.marginTop = '-19px';
    document.querySelectorAll('label')[indexlabel].style.fontSize = '11px';
    document.querySelectorAll('input')[indexInput].style.boxShadow = '0 0 0 2px #FFC43D';
    document.querySelectorAll('input')[indexInput].style.border = 'none';
}

let  address=  document.shippinginfoinputs.address;
let  email=document.getElementById('email-phone-no');
let  firstname=document.shippinginfoinputs.firstname;
let  lastname=document.getElementById('last-name');
let  postalcode=document.shippinginfoinputs.postalcode;
let  phone=document.shippinginfoinputs.phone;


let validCount = 0
function validation() {
    validCount = 0

    if(email.value==null || email.value=="" || email.value==undefined || email.value.indexOf('@') == -1){
        document.querySelectorAll('input')[0].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[0].style.border = 'none';
    }
    else{
        validCount++
    }

    if(firstname.value==null || firstname.value=="" || firstname.value==undefined){
        document.querySelectorAll('input')[2].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[2].style.border = 'none';
    }
    else{
        validCount++
    }
    if(lastname.value==null || lastname.value=="" || lastname.value==undefined){
        document.querySelectorAll('input')[3].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[3].style.border = 'none';
    }
    else{
        validCount++
    }
     if(address.value==null || address.value=="" || address.value==undefined || address.value.length <4){
        document.querySelectorAll('input')[4].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[4].style.border = 'none';
    } 
    else{
        validCount++
    }
    if(postalcode.value==null || postalcode.value=="" || postalcode.value==undefined  || /^\d*$/.test(postalcode.value) == false || postalcode.value.length <6){
        document.querySelectorAll('input')[6].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[6].style.border = 'none';
    } 
    else{
        validCount++
    }
    if(phone.value==null || phone.value=="" || phone.value==undefined  || phone.value.length <11 ||  typeof phone.value == "number" || /^\d*$/.test(phone.value) == false){
        document.querySelectorAll('input')[7].style.boxShadow = '0 0 0 2px #EF476F';
        document.querySelectorAll('input')[7].style.border = 'none';
    }
    else{
        validCount++
    }
    addShippinInfo()
    // window.location ='index.html'

}


let city = document.querySelector('.value')
function select() {
    document.querySelector('.value').innerHTML = document.querySelector('select').value;
}



// localstorage Data fetching

let headValue = window.location.search.split('?product=').join('').split('+').join(' ').split('%2F').join('/')
let localData = JSON.parse(localStorage.getItem(headValue))
let nameSuit = document.querySelector('.name-suit')
let prodImage = document.querySelector('#prodImage')
let prodPrice = document.querySelector('#prodPrice')
let prodQuan = document.querySelector('#prodQuan')
let prodTot = document.querySelector('#prodTot')

function fetchLocalStorage(){
    nameSuit.innerText = localData.name
    prodImage.src = localData.src
    prodPrice.innerText ="Rs." +localData.price
    prodQuan.innerText =localData.quantity
}
fetchLocalStorage()


function calprodTot(){
    prodTot.innerText=localData.price+100
}
calprodTot()

countCoupon = 0
let discountInput  =document.getElementById('discount-input')
function couponBtn(){
    if(discountInput.value.toUpperCase() == "K2-TEAM-A" && countCoupon == 0){
        let oldtotPrice  = prodTot.innerText
        prodTot.innerText = prodTot.innerText*10/100-oldtotPrice
        prodTot.innerText = prodTot.innerText.split("-").join('')
        countCoupon = 1
    }
}


// update localStorage

function addShippinInfo(){
    if(validCount == 6){
    let oldprodData =  JSON.parse(localStorage.getItem(headValue))
    oldprodData.email = email.value
    oldprodData.fname = firstname.value
    oldprodData.lname = lastname.value
    oldprodData.address = address.value
    oldprodData.city = city.innerText
    oldprodData.postalCode = postalcode.value
    oldprodData.phone = phone.value
    oldprodData.price = prodTot.innerText
    oldprodData.isCheckOut = true
    localStorage.setItem(headValue,JSON.stringify(oldprodData))
    swal("Thank You " + oldprodData.fname, "Your order is successfully done", "success");
    
    }
    window.location = "cart.html"

}