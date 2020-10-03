let headercontent  = window.location.href.split('=')[1].split('+').join(" ")
headercontent = headercontent.split('%2F').join("/")
console.log(headercontent)
// %2F

let searchContentContainer = document.getElementById('searchContentContainer')

let categoryOfProduct 
let genderOfProduct 

let falseCheck = 0

fetch('product.json')
  .then(response => response.json())
  .then(function(data){
      data.forEach(element => {
         if(element.name==headercontent){
             falseCheck++
             if(element.rating==""){element.rating=3.6}
             categoryOfProduct = element.subCategory
             genderOfProduct = element.category
            searchContentContainer.innerHTML=searchContentContainer.innerHTML+`
            <div class="product-box" onclick="redirectProductInfo(this)">
                            <img src="${element.picture}" class="product-image">
                            <span class="product-name">${element.name}</span>
                        <div>
                            <span class="product-price">RS. ${element.price}</span>
                            <span class="product-rating">${parseInt(element.rating)}☆</span>
                            </div>
                            <span class="product-brand">${element.brand}</span>
              </div> `
         }
      });
      if(falseCheck==0){
        searchContentContainer.innerHTML="Result Not Found"
        }
      })


fetch('product.json')
      .then(response => response.json())
      .then(function(data){
          data.forEach(element => {
             if(element.subCategory==categoryOfProduct && element.category == genderOfProduct){
                 if(element.rating==""){element.rating=3.6}
                searchContentContainer.innerHTML=searchContentContainer.innerHTML+`
                <div class="product-box" onclick="redirectProductInfo(this)" style="display:none;">
                                <img src="${element.picture}" class="product-image">
                                <span class="product-name">${element.name}</span>
                            <div>
                                <span class="product-price">RS. ${element.price}</span>
                                <span class="product-rating">${parseInt(element.rating)}☆</span>
                                </div>
                                <span class="product-brand">${element.brand}</span>
                  </div> `
             }
          });

          let productImage  =document.querySelectorAll('.product-image')
          productImage.forEach(element => {
            element.onload  = ()=>{
                element.parentElement.style.display="flex"
            }
          });
})



// render product info

let hiddenFormInfo = document.getElementById('hiddenFormInfo')
let hiddenInputInfo = document.getElementById('hiddenInputInfo')
function redirectProductInfo(element){
    // console.log(element.children[1].innerHTML)
    hiddenInputInfo.value=element.children[1].innerHTML
    hiddenFormInfo.submit()
}
