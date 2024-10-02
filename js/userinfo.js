document.addEventListener("DOMContentLoaded", function() {
    // استرجاع بيانات المستخدم من localStorage
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");

    // افتراضيًا، يظهر التاريخ الحالي كتاريخ التسجيل
    let registrationDate = localStorage.getItem("registrationDate") || new Date().toLocaleDateString();

    // عرض البيانات في الصفحة
    document.getElementById("user-name").textContent = username || "User";
    document.getElementById("user-email").textContent = email || "Not provided";
    document.getElementById("user-phone").textContent = phone || "Not provided";
    document.getElementById("registration-date").textContent = registrationDate;

    // التعامل مع تعديل الحساب (سيتم توجيه المستخدم إلى صفحة تحرير المعلومات)
    document.getElementById("edit-profile").addEventListener("click", function() {
        alert("Redirecting to the Edit Profile page...");
        // يمكنك تعديل الرابط حسب الحاجة لتوجيه المستخدم إلى صفحة التعديل
        window.location.href = "edit-profile.html";
    });
});



let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})







document.addEventListener("DOMContentLoaded", () => {

    let username = localStorage.getItem("username") || "User";
    let email = localStorage.getItem("email") || "user@example.com"
    let phone = localStorage.getItem("phone") || "N/A";



    document.getElementById("user-name").innerText = username;
    document.getElementById("user-email").innerText = email;
    document.getElementById("user-phone").innerText = phone;

    document.getElementById("edit-profile-btn").addEventListener("click", () => {
        window.location.href = "editProfile.html"; 
    });

    document.getElementById("change-password-btn").addEventListener("click", () => {
        window.location.href = "changePassword.html"; 
    });
});

function updateBadgeCount() {
    let badge = document.querySelector(".badge"); 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.innerHTML = totalCount > 0 ? totalCount : '';
    badge.style.display = totalCount > 0 ? 'block' : 'none';
}
updateBadgeCount()


let nav = document.querySelector("#navbar")
let bar = document.querySelector("#bar")
bar.addEventListener("click" , () => {
    nav.classList.add("active")
})


let close = document.querySelector("#close")
close.addEventListener("click" , () => {
    nav.classList.remove("active")
})