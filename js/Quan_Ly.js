function valiadteInput(){
    let formElement = document.querySelector(".form");
    let inputElement = formElement.querySelectorAll(".form-input");

    for(let i=0;i<inputElement.length; i++){
        if(inputElement[i].value ===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText = 'Please enter your ${inputElement[i].id}';
        }
        else{
            inputElement[i].parentElement.querySelector(".error-message").innerText = "";
        }
    }
    //them
 function addNew(){
    valiadteInput();
    let fromElement = document.querySelector(".form");
    let errorElement = formElement.querySelectorAll(".error-message");
    let arrErrorElement = [];
    for(let i = 0 ; i<errorElement.length;i++){
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement = arrErrorElement.every(value => value === "");
    if(checkErrorElement){

    }
}
//bang
    function renderKhachHang(){
        let listKhachHang = localStorage.getItem("list-KhachHang") ? JSON.parse(localStorage.getItem("list-KhachHang"));
        let KhachHang = <tr>
            <th>Mã</th>
            <th>Tên</th>
            <th>Số Lượng</th>
        </tr>

        listKhachHang.map((value ,index)=>{
            KhachHang += <tr>
                <td>${index +1}</td>
                <td>${value.ma}</td>
                <td>${value.ten}</td>
                <td>${value.sl}</td>
                <td>${value.t-tien}</td>
                <td>${value.sdt}</td>
            </tr>
        })
        document.getElementById("table-dh").innerHTML = KhachHang;
    }
 
}