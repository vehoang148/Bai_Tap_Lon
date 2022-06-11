const ACCOUNT_ADMIN = [
    { email: "admin@gmail.com", password: "12345" },
    { email: "admin1@gmail.com", password: "12345" },
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
            location.href = "dashboard-donhang.html";
        } else {
            alert("Email hoặc mật khẩu không đúng - Xin hãy nhập lại :))")
        }
    }
});
