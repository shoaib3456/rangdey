// fetch search items from JSON
let searchItemsContainer = document.getElementById('search-items-container')
function FetchSearchItems() {
  // using fetch API..
  fetch('product.json')
    .then(response => response.json())
    // here we starting loop for fetching name of products for search filter
    .then(function (data) {
      data.forEach(element => {
        let searchItem = document.createElement('li')
        searchItem.setAttribute("onclick", "renderProduct(this)")
        searchItem.innerHTML = element.name
        searchItemsContainer.appendChild(searchItem)
      });
    })
}
FetchSearchItems()


// toggle search section

let searchCanvas = document.getElementById('search-canvas')
let faSearch = document.querySelector('.fa-search')
let crossBtn = document.getElementById('cross-btn')
faSearch.onclick = function () {
  searchCanvas.style = "clip-path:circle(200% at 90% 8%);"
}
crossBtn.onclick = function () {
  searchCanvas.style = "clip-path:circle(0% at 98% 8%);"
}


// toggel drop down menu
let faBars = document.querySelector('.fa-bars')
let dropDownMenu = document.getElementById('drop-down-menu')

faBars.onclick = function () {
  if (dropDownMenu.style.transform == "translateX(0%)") {
    dropDownMenu.style = "transform: translateX(-120%);"
  }
  else {
    dropDownMenu.style = "transform: translateX(0%);"
  }
}


// for filter search data 
let searchBar = document.getElementById('searchBar')
let searchDiv = document.getElementById('search-div')
let searchListItems = searchItemsContainer.getElementsByTagName('li')
let resultNotFound = document.getElementById('resualtNotFound')
let result = 0

// search filter code
searchBar.onkeyup = function (event) {
  result = 0
  searchItemsContainer.style.display = "flex"
  for (let i = 0; i < searchListItems.length; i++) {
    if (searchListItems[i].innerText.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
      searchListItems[i].style = "display:block; order:" + searchListItems[i].innerText.toUpperCase().indexOf(searchBar.value.toUpperCase()) + ";"
      result++
      searchItemsContainer.style.border = "1px solid rgba(179, 179, 179, 0.377)"
    }
    else {
      searchListItems[i].style.display = "none"
    }

    if (searchBar.value == "") {
      searchListItems[i].style.display = "none"
      searchItemsContainer.style.border = "none"
    }

    // for showing result not found 

  }
  if (result > 0) {
    resultNotFound.style.display = "none"
  }
  else {
    resultNotFound.style.display = "block"
    searchItemsContainer.style.border = "none"
  }

  if (event.keyCode === 13) {
    hiddenInput.value = searchBar.value
    hiddenForm.submit()
  }
}


// to show a search result and redirect to another page
let hiddenForm = document.getElementById('hiddenForm')
let hiddenInput = document.getElementById('hiddenInput')
function renderProduct(element) {
  hiddenInput.value = element.innerText
  hiddenForm.submit()
}


// working with footer input

document.getElementById('footerInput').onkeyup = (event) => {
  if (event.keyCode === 13) {
    document.getElementById('footerInput').value = ""
  }
}




// cart redircting 

document.getElementById('cart-div').onclick = () => {
  window.location = "cart.html"
}


// cart counter 
let checkoutCounter = 0;
let countCartItems = document.getElementById('count-cart-items');
countCartItems.innerText = 0;

function checkCount() {
  for (i = 0; i < localStorage.length; i++) {
    if (JSON.parse(localStorage.getItem(localStorage.key(i))).isCheckOut == false) {
      console.log(JSON.parse(localStorage.getItem(localStorage.key(i))).isCheckOut);
      checkoutCounter++;
    }
  }
}
checkCount()

countCartItems.innerText = checkoutCounter;

if (countCartItems.innerText == "0") {
  countCartItems.style.display = "none"
}
else {
  countCartItems.style.display = "flex"
}



if (localStorage.getItem('users') == null) {
  localStorage.setItem('users', '[]')
}
if (localStorage.getItem('checkLogin') == null) {
  localStorage.setItem('checkLogin', false)
}


// user redirection 

let userIcon = document.querySelector('.fa-user-circle')
userIcon.onclick = () => {
  window.location = "signup.html"
}