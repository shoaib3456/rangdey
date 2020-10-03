
let imageSrc
// fetch product code

let headercontent  = window.location.href.split('=')[1].split('+').join(" ")
headercontent = headercontent.split('%2F').join("/")
console.log(headercontent)

let quantspan
let productPrice

let content = document.querySelector('.content')
let storageData 
fetch('product.json')
  .then(response => response.json())
  .then(function(data){
      data.forEach(element => {
          if(element.name==headercontent){
              imageSrc =element.picture
               storageData = element
            content.innerHTML=`
            
            <div class="img">
            <div class="img-prew">
                <div class="main-prew">
                    <img src="${element.picture}" class="main">
                    <section class="hover"><i class="far fa-dot-circle"></i> Hover to zoom</section>
                    <section class="click"><i class="fas fa-mouse"></i> Click to expand</section>
                </div>
                <div id="small">
                    <div class="small">
                        <img src="${element.picture}" class="selected" onclick="select(1)">
                        <img src="${element.picture}" onclick="select(2)">
                        <img src="${element.picture}" onclick="select(3)">
                    </div>
                </div>
            </div>
        </div>
        <div class="name-of-suit">
                <h1>${element.name}</h1>
                <h3>pkr 
                    <span id="productPrice">${element.price}</span>
                </h3>
                <h4 id="stock">${element.brand}
                    <span class="stock">in stock</span>
                </h4>
                <hr>
                <h4 class="itemsLeft">
                    Limited Stock
                </h4>
                <div class="cartQty">
                    <div class="qty">
                        <button onclick="plusBtn()">+</button>
                        <span id="quantspan">1</span>
                        <button onclick="minusBtn()">-</button>
                    </div>
                    <button class="cart" onclick = "addToCartBtn()">add to cart 
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
                <div class="share">
                    <h3>Share: 
                        <i class="fab fa-facebook-f facebook"></i>
                        <i class="fab fa-twitter twitter"></i>
                        <i class="fab fa-pinterest-p pintrest"></i>
                        <i class="fab fa-google-plus-g googlePlus"></i>
                    </h3>
                </div>
                <div class="desc">
                    <h3>
                        <span>prouduct description</span>
                        additional information
                    </h3>
                    <h4>
                    ${element.disc}
                    </h4>
                </div>
        </div>
            `
            
            quantspan = document.querySelector('#quantspan')
            productPrice = document.querySelector('#productPrice')
        }
    });
  })





  // img select
  function select(i) {
      let imgPrew = document.querySelector('.main');
      let sImg = document.querySelectorAll('.small img');
      if (i == 1) {
          imgPrew.setAttribute('src', imageSrc);
          sImg[0].className = 'selected';
          sImg[1].className = '';
          sImg[2].className = '';
      }
      if (i == 2) {
          imgPrew.setAttribute('src', imageSrc);
          sImg[0].className = '';
          sImg[1].className = 'selected';
          sImg[2].className = '';
      }
      if (i == 3) {
          imgPrew.setAttribute('src', imageSrc);
          sImg[0].className = '';
          sImg[1].className = '';
          sImg[2].className = 'selected';
      }
  }


function plusBtn(){
    if(quantspan.innerText!="9"){
    quantspan.innerText=parseInt(quantspan.innerText)+1
    }
    productPrice.innerText = parseInt( storageData.price)*parseInt(quantspan.innerText)
}
function minusBtn(){
    if(quantspan.innerText!="1"){
        quantspan.innerText=parseInt(quantspan.innerText)-1
    }
    productPrice.innerText = parseInt(storageData.price)*parseInt(quantspan.innerText)
}


