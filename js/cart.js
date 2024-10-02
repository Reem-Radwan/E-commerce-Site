
// Function to display cart items in cart.html
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartContainer = document.querySelector('.cart-container');
    let totalProductsElement = document.getElementById('total-products');
    let totalPriceElement = document.getElementById('total-price');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalProductsElement.textContent = 0;
        totalPriceElement.textContent = "$0";
    } else {
        let cartHTML = cartItems.map(item => {
            return `
                <div class="cart-item">
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <div class="cart-item-details">
                        <h5>${item.title}</h5>
                        <span>${item.title2}</span>
                    </div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="btnnn" onclick="decreaseQuantity(${item.id})">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button class="btnnnn" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
        }).join('');

        cartContainer.innerHTML = cartHTML;

        // حساب عدد المنتجات الإجمالي والسعر الإجمالي
        let totalProducts = cartItems.reduce((total, item) => total + item.quantity, 0);
        let totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

        // تحديث عدد المنتجات الإجمالي والسعر الإجمالي
        totalProductsElement.textContent = totalProducts;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

        // عرض السعر الإجمالي في أسفل صفحة المنتجات
        cartContainer.innerHTML += `<div class="total-price">Total: $${totalPrice.toFixed(2)}</div>`;
        cartContainer.innerHTML += `<button class="checkout-button">Checkout</button>`;
    }

    // تحديث العداد بعد عرض العناصر
    updateBadgeCount();
}

// Function to increase quantity of product
function increaseQuantity(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let product = cartItems.find(item => item.id === productId);
    product.quantity++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

// Function to decrease quantity of product
function decreaseQuantity(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let product = cartItems.find(item => item.id === productId);
    if (product.quantity > 1) {
        product.quantity--;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
    } else {
        // إذا كانت الكمية 1، يمكننا إزالته من السلة
        removeFromCart(productId);
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

// Function to update badge count
function updateBadgeCount() {
    let badge = document.querySelector(".badge");
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.innerHTML = totalCount > 0 ? totalCount : '';
    badge.style.display = totalCount > 0 ? 'block' : 'none';
}

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let totalProducts = document.getElementById('total-products').textContent;
    let totalPrice = document.getElementById('total-price').textContent;

    if (name && email && address) {
        alert(`Order Confirmed!\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nTotal Products: ${totalProducts}\nTotal Price: ${totalPrice}`);
        

        
        localStorage.removeItem('cartItems');
        window.location.reload();
    } else {
        alert('Please fill all the fields.');
    }
});

// Call function to display cart items on page load
document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

// Handle "Continue Shopping" button click
document.getElementById('continue-shopping').addEventListener('click', function() {
    
    window.location.href = 'index.html'; 
});






let nav = document.querySelector("#navbar")
let bar = document.querySelector("#bar")
bar.addEventListener("click" , () => {
    nav.classList.add("active")
})


let close = document.querySelector("#close")
close.addEventListener("click" , () => {
    nav.classList.remove("active")
})


function updateBadgeCount() {
    let badge = document.querySelector(".badge"); 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.innerHTML = totalCount > 0 ? totalCount : '';
    badge.style.display = totalCount > 0 ? 'block' : 'none';
}




let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})