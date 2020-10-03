let scriptElement = document.querySelector('html')
let hiddenform = `<form  id="hiddenFormInfo"  action="redirectProductInfo.html" method="GET">
<input type="hidden" id ="hiddenInputInfo" name="product">
</form>
</section>`
scriptElement.innerHTML=scriptElement.innerHTML+hiddenform

let headerval =  window.location.href.split("/")[window.location.href.split("/").length-1].split('.')[0].replace('%20',' ')
console.log(headerval)

fetch('product.json')
  .then(response => response.json())
  .then(function(data){
      data.forEach(element => {
          if(element.rating ==""){
              element.rating = "3.5"
          }
         if(element.category== "Man" && element.subCategory.toLowerCase() ==headerval.toLowerCase()){
             searchContentContainer.innerHTML=searchContentContainer.innerHTML + `
             <div class="product-box" onclick="redirectProductInfo(this)" style="display: flex;">
             <img src="${element.picture}" class="product-image">
             <span class="product-name">${element.name}</span>
             <div>
                 <span class="product-price">Rs. ${element.price}</span>
                 <span class="product-rating">${element.rating} ☆</span>
             </div>
             <span class="product-brand">${element.brand}</span>
         </div>
             `
         }
      });})



    //   render products info

let hiddenFormInfo = document.getElementById('hiddenFormInfo')
let hiddenInputInfo = document.getElementById('hiddenInputInfo')
function redirectProductInfo(element){
    // console.log(element.children[1].innerHTML)
    hiddenInputInfo.value=element.children[1].innerHTML
    hiddenFormInfo.submit()
}


document.getElementById('cart-div').onclick = () =>{
  window.location="cart.html"
}

document.getElementById('cart-div').onclick = () =>{
  window.location="cart.html"
}

let countCartItems = document.getElementById('count-cart-items')

countCartItems.innerText=localStorage.length

if(countCartItems.innerText=="0"){
  countCartItems.style.display="none"
}
else{
  countCartItems.style.display="flex"
}
  



// header code

// fetch search items from JSON
let searchItemsContainer =document.getElementById('search-items-container')
function FetchSearchItems (){
 // using fetch API..
 fetch('product.json')
 .then(response => response.json())
 // here we starting loop for fetching name of products for search filter
 .then (function(data){
   data.forEach(element => {
     let searchItem = document.createElement('li')
     searchItem.setAttribute("onclick","renderProduct(this)")
     searchItem.innerHTML=element.name
     searchItemsContainer.appendChild(searchItem)
   });
 })
}
FetchSearchItems()


// toggle search section

let searchCanvas = document.getElementById('search-canvas')
let faSearch = document.querySelector('.fa-search')
let crossBtn = document.getElementById('cross-btn')
faSearch.onclick = function(){
 searchCanvas.style="clip-path:circle(200% at 90% 8%);"
}
crossBtn.onclick = function(){
 searchCanvas.style="clip-path:circle(0% at 98% 8%);"
}


// toggel drop down menu
let faBars = document.querySelector('.fa-bars')
let dropDownMenu = document.getElementById('drop-down-menu')

faBars.onclick=function(){
   if(dropDownMenu.style.transform=="translateX(0%)"){
       dropDownMenu.style="transform: translateX(-120%);"
     }
 else{
   dropDownMenu.style="transform: translateX(0%);"
       }
}


// for filter search data 
let searchBar = document.getElementById('searchBar')
let searchDiv = document.getElementById('search-div')
let searchListItems   = searchItemsContainer.getElementsByTagName('li')
let resultNotFound = document.getElementById('resualtNotFound')
let result = 0

// search filter code
searchBar.onkeyup = function(event){
 result=0
 searchItemsContainer.style.display="flex"
 for(let i=0;i<searchListItems.length;i++){
   if(searchListItems[i].innerText.toUpperCase().indexOf(searchBar.value.toUpperCase()) >-1 ){
            searchListItems[i].style="display:block; order:"+searchListItems[i].innerText.toUpperCase().indexOf(searchBar.value.toUpperCase())+";"
             result++
             searchItemsContainer.style.border="1px solid rgba(179, 179, 179, 0.377)"
     }
   else{
           searchListItems[i].style.display="none"
         }

     if(searchBar.value==""){
           searchListItems[i].style.display="none"
           searchItemsContainer.style.border="none"
       }

       // for showing result not found 
       
     }
     if(result>0){
       resultNotFound.style.display="none"
       }
   else{
     resultNotFound.style.display="block"
     searchItemsContainer.style.border="none"
       }

     if (event.keyCode ===13){
       hiddenInput.value=searchBar.value
       hiddenForm.submit()
     }
 }


// to show a search result and redirect to another page
let hiddenForm =document.getElementById('hiddenForm')
let hiddenInput=document.getElementById('hiddenInput')
function  renderProduct(element){
 hiddenInput.value=element.innerText
 hiddenForm.submit()
}


// working with footer input

document.getElementById('footerInput').onkeyup =(event)=>{
 if(event.keyCode===13){
   document.getElementById('footerInput').value=""
 }
}
