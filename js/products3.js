
let allProducts = document.querySelector(".parent-product ");
let allProducts2 = document.querySelector(".parent-product2 ");

let products = [
    { id: 1, title: "Classic Bag", title2: "Bag", imageUrl: "images/ba2.png", price: "$100" },
    { id: 2, title: "Classic Bag", title2: "Bag", imageUrl: "images/ba3.png", price: "$110" },
    { id: 3, title: "colorful Bag", title2: "Bag", imageUrl: "images/ba5.png", price: "$120" },
    { id: 4, title: "Brown Bag", title2: "Bag", imageUrl: "images/ba4.png", price: "$130" }
];

let products2 = [
    { id: 5, title: "Brown Bag", title2: "Shoes", imageUrl: "images/ba1.png", price: "$170" },
    { id: 6, title: "Black Bag", title2: "Shoes", imageUrl: "images/ba6.png", price: "$180" },
    { id: 7, title: "Colorful Bag", title2: "Boots", imageUrl: "images/ba7.png", price: "$190" },
    { id: 8, title: "Red Hand-Bag", title2: "Saint Laurent", imageUrl: "images/bag1.png", price: "$100" }
];

// Function to add product to cart
function addToCart(productId) {
    // Check if the user is logged in
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Please log in to add items to your cart.");
        window.location.href = "login.html"; // Redirect to login page
        return; // Exit the function
    }

    let selectedProduct = products.find(product => product.id === productId) || 
                          products2.find(product => product.id === productId);

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let existingProduct = cartItems.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        selectedProduct.quantity = 1;
        cartItems.push(selectedProduct);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateBadgeCount();
}

// Function to add product to favourites
function addToFavourites(productId) {
    // Check if the user is logged in
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Please log in to add items to your favourites.");
        window.location.href = "login.html"; // Redirect to login page
        return; // Exit the function
    }

    let selectedProduct = products.find(product => product.id === productId) || 
                          products2.find(product => product.id === productId);
    
    let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    let existingFavourite = favouriteItems.find(item => item.id === productId);

    if (!existingFavourite) {
        favouriteItems.push(selectedProduct);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
        alert(`${selectedProduct.title} has been added to your favourites!`);
    } else {
        alert(`${selectedProduct.title} is already in your favourites!`);
    }
}

function drawItems() {
    let html1 = products.map((item) => {
        return `
            <div id="product1" class="col-sm-6">
                <img src="${item.imageUrl}" alt="" onclick="openProductDetails(${item.id})">
                <div class="product-dsec">
                    <span>${item.title2}</span>
                    <h5>${item.title}</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h4>${item.price}</h4>
                </div>
                <i class="fa-solid fa-cart-shopping cart"></i>
                <i class="fa-regular fa-heart heart" data-id="${item.id}"></i>
            </div>
        `;
    }).join('');

    let html2 = products2.map((item) => {
        return `
            <div id="product1">
                <img src="${item.imageUrl}" alt="" onclick="openProductDetails(${item.id})">
                <div class="product-dsec">
                    <span>${item.title2}</span>
                    <h5>${item.title}</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h4>${item.price}</h4>
                </div>
                <i class="fa-solid fa-cart-shopping cart"></i>
                <i class="fa-regular fa-heart heart" data-id="${item.id}"></i>
            </div>
        `;
    }).join('');

    allProducts.innerHTML = html1;
    allProducts2.innerHTML = html2;
}

function openProductDetails(productId) {
    window.location.href = `productDetails3.html?id=${productId}`;
}

// Add click event to all cart and heart icons
function addEventListeners() {
    document.querySelectorAll('.cart').forEach((cartIcon, index) => {
        cartIcon.addEventListener('click', () => {
            if (index < products.length) {
                addToCart(products[index].id);
            } else {
                addToCart(products2[index - products.length].id);
            }
        });
    });

    document.querySelectorAll('.heart').forEach((heartIcon, index) => {
        heartIcon.addEventListener('click', () => {
            if (index < products.length) {
                addToFavourites(products[index].id);
            } else {
                addToFavourites(products2[index - products.length].id);
            }
        });
    });
}

// Function to update the badge count
function updateBadgeCount() {
    let badge = document.querySelector(".badge"); 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.innerHTML = totalCount > 0 ? totalCount : '';
    badge.style.display = totalCount > 0 ? 'block' : 'none';
}

// استدعاء رسم العناصر و إضافة الأحداث
drawItems();  
addEventListeners();
updateBadgeCount();


let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})







let nav = document.querySelector("#navbar")
let bar = document.querySelector("#bar")
bar.addEventListener("click" , () => {
    nav.classList.add("active")
})


let close = document.querySelector("#close")
close.addEventListener("click" , () => {
    nav.classList.remove("active")
})
