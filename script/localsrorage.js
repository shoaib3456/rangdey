let cartButton =document.getElementById('cart-button')

function addToCartBtn(){
    var a =
                    {
                        "name":storageData.name,
                        "disc":storageData.disc,
                        "price":parseInt(storageData.price)*parseInt(quantspan.innerText),
                        "src":storageData.picture,
                        "quantity":quantspan.innerText,
                        "brand":storageData.brand,
                        "isCheckOut":false,
                        "email":"",
                        "fname":"",
                        "lname":"",
                        "address":"",
                        "address2":"",
                        "city":"",
                        "postalCode":"",
                        "phone":""
                    }
    
                
    // a.push(JSON.parse(localStorage.getItem('data')));
    // localStorage.setItem('data', JSON.stringify(a));
    localStorage.setItem(storageData.name, JSON.stringify(a))
    console.log(localStorage.length)

// cart counter 
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