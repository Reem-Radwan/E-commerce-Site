

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let phone = document.querySelector("#phone");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند النقر على الزر
    if (username.value === "" || email.value === "" || password.value === "" || phone.value === "") {
        alert("Please fill all fields.");
    } else {
        // تخزين البيانات في localStorage
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("phone", phone.value);
        
        // تخزين تاريخ التسجيل في localStorage
        const registrationDate = new Date().toLocaleDateString();
        localStorage.setItem("registrationDate", registrationDate);
        
        // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
        setTimeout(() => {
            window.location = "login.html"; 
        }, 1500);
    }
});


let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click" , function(){
    localStorage.clear() ;
    setTimeout(() =>{
        window.location = "login.html"
    } , 1000)
})


let nav = document.querySelector("#navbar");
let bar = document.querySelector("#bar");
bar.addEventListener("click", () => {
    nav.classList.add("active");
});

let close = document.querySelector("#close");
close.addEventListener("click", () => {
    nav.classList.remove("active");
});







