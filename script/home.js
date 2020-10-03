// timer script Here

// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('.day').innerHTML=days
    document.querySelector('.hour').innerHTML=hours
    document.querySelector('.min').innerHTML=minutes
    document.querySelector('.sec').innerHTML=seconds

}, 1000);


// Timer script End here

// sale items scrolling code

let saleContiner = document.querySelector('.sale-continer')

document.getElementById('sale-slide-right-btn').onclick=()=>{
    saleContiner.scrollLeft=saleContiner.scrollLeft+100
}
document.getElementById('sale-slide-left-btn').onclick=()=>{
    saleContiner.scrollLeft=saleContiner.scrollLeft-100
}



let counter =0
let counter2 =0

fetch('product.json')
  .then(response => response.json())
  .then(function(data){
      data.forEach(element => {
         if(element.sale==true){
             if(element.rating==""){element.rating=3.6}
            saleContiner.innerHTML=saleContiner.innerHTML+`
            <div class="sale-box" onclick="redirectProductInfo(this)">
                            <img src="${element.picture}" class="sale-image">
                            <span class="sale-name">${element.name}</span>
                        <div>
                            <span class="sale-price">RS. ${element.price}</span>
                            <span class="sale-rating">${element.rating}☆</span>
                            </div>
                            <span class="sale-brand">${element.brand}</span>
              </div> `
         }
         saleContiner.scrollLeft = 0
      });
      })

window.ontouchstart= () =>{
    document.getElementById('sale-slide-right-btn').style.display="none"
    document.getElementById('sale-slide-left-btn').style.display="none"
}



// render product info

let hiddenFormInfo = document.getElementById('hiddenFormInfo')
let hiddenInputInfo = document.getElementById('hiddenInputInfo')
function redirectProductInfo(element){
    // console.log(element.children[1].innerHTML)
    hiddenInputInfo.value=element.children[1].innerHTML
    hiddenFormInfo.submit()
}


if(localStorage.getItem('checkLogin') == null){
    localStorage.setItem('checkLogin',false)
}