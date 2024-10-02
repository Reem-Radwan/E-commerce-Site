document.addEventListener("DOMContentLoaded", () => {
    // Load user information from localStorage
    document.getElementById("user-name").value = localStorage.getItem("username") || "";
    document.getElementById("user-email").value = localStorage.getItem("email") || "";
    document.getElementById("user-phone").value = localStorage.getItem("phone") || "";

    // Handle form submission
    document.getElementById("edit-profile-form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Get input values
        const updatedName = document.getElementById("user-name").value.trim();
        const updatedEmail = document.getElementById("user-email").value.trim();
        const updatedPhone = document.getElementById("user-phone").value.trim();
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if fields are filled
        if (!updatedName || !updatedEmail || !updatedPhone ) {
            alert("Please fill in all fields.");
            return;
        }

        // Check if the current password is correct (implement your logic here)
        const storedPassword = localStorage.getItem("password"); // Assuming you have stored the password
        if (currentPassword !== storedPassword) {
            alert("Current password is incorrect!");
            return;
        }

        // Check if new password and confirm password match
        if (newPassword && newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }

        // Save updated information to localStorage
        localStorage.setItem("username", updatedName);
        localStorage.setItem("email", updatedEmail);
        localStorage.setItem("phone", updatedPhone);
        
        // Only save new password if it is provided
        if (newPassword) {
            localStorage.setItem("password", newPassword);
        }

        alert("Profile updated successfully!");
        window.location.href = "userinfo.html"; // Redirect to user profile page
    });

    // Cancel button functionality
    document.getElementById("cancel-btn").addEventListener("click", () => {
        window.location.href = "userinfo.html"; // Redirect to user profile page
    });
});



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