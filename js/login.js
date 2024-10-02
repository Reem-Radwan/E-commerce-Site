
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

// استرجاع بيانات المستخدم من localStorage
let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند النقر على الزر
    if (username.value === "" || password.value === "") {
        alert("Please fill all fields.");
    } else {
        // التحقق من صحة بيانات تسجيل الدخول
        if ((getUsername && getUsername.trim() === username.value.trim()) && 
            (getPassword && getPassword.trim() === password.value)) {
            localStorage.setItem("loggedIn", "true"); // تخزين حالة تسجيل الدخول
            setTimeout(() => {
                window.location = "index.html"; // إعادة توجيه المستخدم
            }, 1000);
        } else {
            alert("Wrong credentials."); // رسالة خطأ
        }
    }
});

// كود التنقل (navbar)
let nav = document.querySelector("#navbar");
let bar = document.querySelector("#bar");
bar.addEventListener("click", () => {
    nav.classList.add("active");
});

// إغلاق navbar
let close = document.querySelector("#close");
close.addEventListener("click", () => {
    nav.classList.remove("active");
});



let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})
