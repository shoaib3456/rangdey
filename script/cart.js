let mainCart = document.querySelector('.main_cart') 
let emptyCart = document.querySelector('#emptyCart') 
function fetchCartItems(boolean){
    mainCart.innerHTML=""
    let displayVar = "block"
    let displayVar2 = "none"
    if(boolean == false){
        displayVar = "none"
        displayVar2 = "block"
    }
for(let i =0; i<localStorage.length;i++){
    if(localStorage.key(i) != 'users' && localStorage.key(i) != 'checkLogin'){
      
        if(JSON.parse(localStorage.getItem(localStorage.key(i))).isCheckOut !=boolean){
    let jsonData =JSON.parse(localStorage.getItem(localStorage.key(i)))
    mainCart.innerHTML= mainCart.innerHTML+`
    <div class="card p-4">
    <div class="row">
        <!-- Card Image -->
        <div
            class=product_img">
            <img src="${jsonData.src}" alt="" class="prod_image">
        </div>
        <!-- Cart Product Detail  -->
        <div class="col-md-8 col-11 mx-auto px-4 mt-2">
            <div class="row">
                <!-- Product Name -->
                <div class="col-md-6 col-11 card-title">
                    <h1 class="mb-4 product-name">${jsonData.name}</h1>
                    <p class="mb-2"> ${jsonData.disc.slice(0, 100)}</p>
                    <p class="mb-2" style="color:#34bdeb;"> ${jsonData.brand}</p>
                </div>
                <!-- Product Quantity -->
                <div class="col-md-6 col-11 " style="display:${displayVar};">
                    <ul class="pagination justify-content-end set_quantity">
                        <li class="page-item">
                            <button class="page-link"
                                onclick="decItemQuantity(this)"><i
                                    class="fas fa-minus"></i></button>
                        </li>
                        <li class="page-item">
                            <span id="quantity_textbox1" 
                                class="page-link">${jsonData.quantity}</span>
                        </li>
                        <li class="page-item">
                            <button class="page-link"
                                onclick="incItemQuantity(this)"><i
                                    class="fas fa-plus"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Remove Item and WishList -->
            <div class="row center-dive">
                <div class="col-md-8 col-11  d-flex justify-content-between remove_item">
                    <p style="display:${displayVar};"> <i class="fas fa-trash-alt del_btn" onclick="removeThisItem(this)"></i> Remove Item</p>
                    <button id="addToCartButton" style="display:${displayVar};" onclick="checkoutBtn(this)"> CHECKOUT<i class="fas fa-check mb-2 mb-lg-0 butn"></i></button>
                </div>
                <div class="col-md-4 col-11  d-flex justify-content-end product_price font-weight-bold">
                    <p>Rs. <span id="item_price1">${jsonData.price}</span></p>
                </div>
            </div>
            
            <div style="display:${displayVar2};">
            <span>Shipping Information</span>
            <div class="shipping"><span class="shipping-span">Name</span> ${jsonData.fname}</div>
            <div class="shipping"><span class="shipping-span">Address</span> ${jsonData.address}</div>
            <div class="shipping"><span class="shipping-span">City</span> ${jsonData.city}</div>
            <div class="shipping"><span class="shipping-span">Postal Code</span> ${jsonData.postalCode}</div>
            <div class="shipping"><span class="shipping-span">Phone</span> ${jsonData.phone}</div>
            <div class="shipping"><span class="shipping-span">Email</span> ${jsonData.email}</div>
            </div>
            
        </div>
    </div>
    </div><hr> `
    
emptyCartfunc()
}}
}}
fetchCartItems(true)


function emptyCartfunc(){
    let controls = document.getElementById('controls')
    if(localStorage.length>2){
        emptyCart.style.display="none"
        controls.style.display="flex"
    }
    else{
    emptyCart.style.display="flex"
    controls.style.display="none"
    }
}
emptyCartfunc()


// Del Items
function removeThisItem(element){
    localStorage.removeItem(element.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerText)
    mainCart.innerHTML=""
    fetchCartItems(true)
    emptyCartfunc()
    let checkoutCounter = 0
    let countCartItems = document.getElementById('count-cart-items')

    function checkCount(){
    for(i=0;i<localStorage.length;i++){
    if(JSON.parse(localStorage.getItem(localStorage.key(i))).isCheckOut ==false){
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))).isCheckOut)
        checkoutCounter++
    }
    }}
    checkCount()

    countCartItems.innerText=checkoutCounter

    if(countCartItems.innerText=="0"){
    countCartItems.style.display="none"
    }
    else{
    countCartItems.style.display="flex"
    }
}

// Inc & Dec Quantity 
const decItemQuantity = (button) => {
   let totPrice = button.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0]
   let quan  = button.parentElement.parentElement.children[1].children[0]

   let oldquan =parseInt(quan.innerText)
   if(quan.innerText!="1"){
    quan.innerText =parseInt(quan.innerText)-1
    let totcal =parseInt(totPrice.innerText)/oldquan
    totPrice.innerText = totcal*parseInt(quan.innerText)
   }
//    for update josn data 
   let prodName = button.parentElement.parentElement.parentElement.parentElement.children[0].children[0]
   let getJsonData = JSON.parse(localStorage.getItem(prodName.innerText))
   getJsonData.quantity = parseInt(quan.innerText)
   getJsonData.price = parseInt(totPrice.innerText)
   localStorage.setItem(prodName.innerText,JSON.stringify(getJsonData))
}

const incItemQuantity = (button) => {
    let totPrice = button.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0]
    let quan  = button.parentElement.parentElement.children[1].children[0]
 
    let oldquan =parseInt(quan.innerText)
    if(quan.innerText!="9"){
     quan.innerText =parseInt(quan.innerText)+1
     let totcal =parseInt(totPrice.innerText)/oldquan
     totPrice.innerText = totcal*parseInt(quan.innerText)
    }
//    for update josn data 

    let prodName = button.parentElement.parentElement.parentElement.parentElement.children[0].children[0]
    let getJsonData = JSON.parse(localStorage.getItem(prodName.innerText))
    getJsonData.quantity = parseInt(quan.innerText)
    getJsonData.price = parseInt(totPrice.innerText)
    localStorage.setItem(prodName.innerText,JSON.stringify(getJsonData))

}

// click on checkout button 


 

function checkoutBtn(button){
    if(localStorage.getItem('checkLogin') == "false"){
        window.location = "login.html"
    }
    else{
        let checkOutName =  button.parentElement.parentElement.parentElement.children[0].children[0].children[0]
        let checkoutInput = document.getElementById('checkoutInput')
        let checkoutForm = document.getElementById('checkoutForm')
        checkoutInput.value = checkOutName.innerText
        checkoutForm.submit()
    }
}


// Cart controls 

let cartCon = document.getElementById('cartCon')
let checkCon = document.getElementById('checkCon')


cartCon.onclick = ()=>{
    fetchCartItems(true)
    cartCon.style.color = "#EF476F"
    checkCon.style.color = "#000"
}
checkCon.onclick = ()=>{
    fetchCartItems(false)
    cartCon.style.color = "#000"
    checkCon.style.color = "#EF476F"
}
