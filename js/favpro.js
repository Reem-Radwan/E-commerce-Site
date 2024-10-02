let favouritesContainer = document.getElementById("favourites-container");

        // Function to display favourite products
        function displayFavourites() {
            let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
            
            if (favouriteItems.length === 0) {
                favouritesContainer.innerHTML = `<p> You don't have any favorite products yet. <p>`;
                return;
            }

            let html = favouriteItems.map((item, index) => {
                return `
                    <div class="favourite-product">
                        <img src="${item.imageUrl}" alt="">
                        <div class="product-details">
                            <h5>${item.title}</h5>
                            <h4>${item.price}</h4>
                            <button class="remove-button" onclick="removeFavourite(${index})"> Remove  </button>
                        </div>
                    </div>
                `;
            }).join('');

            favouritesContainer.innerHTML = html;
        }

        // Function to remove a product from favourites
        function removeFavourite(index) {
            let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
            favouriteItems.splice(index, 1); // Remove the item at the specified index
            localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems)); // Update localStorage
            displayFavourites(); // Refresh the displayed favourites
        }

        // استدعاء وظيفة عرض المنتجات المفضلة
        displayFavourites();


        function updateBadgeCount() {
            let badge = document.querySelector(".badge"); 
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
            badge.innerHTML = totalCount > 0 ? totalCount : '';
            badge.style.display = totalCount > 0 ? 'block' : 'none';
        }
        updateBadgeCount();




        let nav = document.querySelector("#navbar")
let bar = document.querySelector("#bar")
bar.addEventListener("click" , () => {
    nav.classList.add("active")
})


let close = document.querySelector("#close")
close.addEventListener("click" , () => {
    nav.classList.remove("active")
})



let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})


