let products = [
    { id: 1, title: "Pink Blazer", title2: "Crop Blazer", imageUrl: "images/bla4.png", price: "$100" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 2, title: "Black Blazer", title2: "Crop Blazer", imageUrl: "images/bla3.png", price: "$110" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 3, title: "Of-White Suit", title2: " Suit", imageUrl: "images/bla5.png", price: "$120" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 4, title: "Black Suit", title2: " Suit", imageUrl: "images/bla6.png", price: "$130" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 5, title: "Set Of Blazers", title2: "Blazer", imageUrl: "images/bla7.png", price: "$170" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 6, title: "Set Of Blazers", title2: "Blazers", imageUrl: "images/bla8.png", price: "$180" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 7, title: "Black&Gray Blazer", title2: "Crop Blazer", imageUrl: "images/bla9.png", price: "$190" , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings" },
    { id: 8, title: "Ment-green Blazer", title2: "Blazer", imageUrl: "images/bla2.png", price: "$200"  , description : "Elevate your outfit with this tailored women's blazer, designed for a flattering fit and sophisticated style, perfect for both professional and casual settings"}
];

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"), 10); // Get product ID from URL

    const product = products.find(item => item.id === productId);
    if (product) {
        // Populate the product details
        document.getElementById("product-title").innerText = product.title;
        document.getElementById("product-price").innerText = product.price;
        document.getElementById("product-image").src = product.imageUrl;
        document.getElementById("product-description").innerText = ` ${product.description}` ;
    } else {
        console.error("Product not found");
    }

    // Add functionality to the buttons
    document.getElementById("add-to-cart-btn").addEventListener("click", () => handleAddToCartOrFavourite(productId, 'cart'));
    document.getElementById("add-to-favorites-btn").addEventListener("click", () => handleAddToCartOrFavourite(productId, 'favourite'));

    updateBadgeCount(); // Update badge count on page load
});

// Function to handle adding to cart or favourites based on user registration status
function handleAddToCartOrFavourite(productId, action) {
    if (isUserLoggedIn()) {
        if (action === 'cart') {
            addToCart(productId);
        } else {
            addToFavourites(productId);
        }
    } else {
        alert("Please register or log in to proceed.");
        window.location.href = "login.html";
    }
}

// Function to add product to cart
function addToCart(productId) {
    let selectedProduct = products.find(product => product.id === productId);
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let existingProduct = cartItems.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        selectedProduct.quantity = 1; // Initialize quantity
        cartItems.push(selectedProduct);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateBadgeCount();
}

// Function to add product to favourites
function addToFavourites(productId) {
    let selectedProduct = products.find(product => product.id === productId);

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

// Function to update the badge count
function updateBadgeCount() {
    let badge = document.querySelector(".badge"); 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.innerHTML = totalCount > 0 ? totalCount : '';
    badge.style.display = totalCount > 0 ? 'block' : 'none';
}

// Function to check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('loggedIn') !== null;
}

// Navbar functionality
let nav = document.querySelector("#navbar");
let bar = document.querySelector("#bar");
bar.addEventListener("click", () => {
    nav.classList.add("active");
});

let close = document.querySelector("#close");
close.addEventListener("click", () => {
    nav.classList.remove("active");
});

// Logout functionality
let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1000);
});
