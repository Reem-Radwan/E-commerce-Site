let nav = document.querySelector("#navbar")
let bar = document.querySelector("#bar")
bar.addEventListener("click" , () => {
    nav.classList.add("active")
})


let close = document.querySelector("#close")
close.addEventListener("click" , () => {
    nav.classList.remove("active")
})


document.addEventListener("DOMContentLoaded", function() {
    // هنا يمكنك نسخ وظيفة updateBadgeCount
    function updateBadgeCount() {
        let badge = document.querySelector(".badge");
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
        badge.innerHTML = totalCount > 0 ? totalCount : '';
        badge.style.display = totalCount > 0 ? 'block' : 'none';
    }

    updateBadgeCount(); // تحديث العداد عند تحميل الصفحة
});


let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})