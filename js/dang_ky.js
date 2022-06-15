function signUp(e){
    event.preventDefault();
    var email = document.getElementById("Email-SignUp").value;
    var password = document.getElementById("Password-SignUp").value;

    var user = {
        email:email,
        password:password
    };

    var json = JSON.stringify(user)
    localStorage.setItem(email, json);
    alert("Đăng ký thành công");
}

function signIn(e)
{
    event.preventDefault();
    var email = document.getElementById("Email-SignUp").value;
    var password = document.getElementById("Password-SignUp").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user==null)
    {
        alert("Vui long nhap email");
    }
    else if(email == data.email && password == data.password)
    {
        alert("dang nhap thanh cong");
        window.location.href = "index.html"
    }
}