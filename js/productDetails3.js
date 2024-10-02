
let products = [
    { id: 1, title: "Classic Bag", title2: "Bag", imageUrl: "images/ba2.png", price: "$100" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."},
    { id: 2, title: "Classic Bag", title2: "Bag", imageUrl: "images/ba3.png", price: "$110" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style." },
    { id: 3, title: "colorful Bag", title2: "Bag", imageUrl: "images/ba5.png", price: "$120", description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."  },
    { id: 4, title: "Brown Bag", title2: "Bag", imageUrl: "images/ba4.png", price: "$130",  description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."  },
    { id: 5, title: "Brown Bag", title2: "Shoes", imageUrl: "images/ba1.png", price: "$170" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."  },
    { id: 6, title: "Black Bag", title2: "Shoes", imageUrl: "images/ba6.png", price: "$180" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."  },
    { id: 7, title: "Colorful Bag", title2: "Boots", imageUrl: "images/ba7.png", price: "$190" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style." },
    { id: 8, title: "Red Hand-Bag", title2: "Saint Laurent", imageUrl: "images/bag1.png", price: "$100" , description: "A timeless and elegant design, perfect for any occasion. The Classic Bag combines functionality with style."  },
];


document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"), 10); 

    const product = products.find(item => item.id === productId);
    if (product) {
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
