const ACCOUNT_ADMIN = [
    { email: "admin@gmail.com", password: "123" },
    { email: "admin1@gmail.com", password: "123" },
    { email: "admin2@gmail.com", password: "123" }
]

window.addEventListener('DOMContentLoaded', (event) => {
    
    let loginBtn = document.getElementById("login-btn")
    let tbEmail = document.getElementById("tb-email-login")
    let tbPass = document.getElementById("tb-password-login")
    loginBtn.onclick = function(e) {
        e.preventDefault();
        let accept = false;

        for (let account of ACCOUNT_ADMIN) {
            if (tbEmail.value == account.email && tbPass.value == account.password) {
                accept = true;
                break;
            }
        } 
        if (accept) {
            location.href = "admin.html";
        } else {
            alert("Email hoặc mật khẩu không đúng - Xin hãy nhập lại :))")
        }
    }
});
