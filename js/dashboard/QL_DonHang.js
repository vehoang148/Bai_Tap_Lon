var data=[];

//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var buy = document.getElementById("form-buy").value
    var price = document.getElementById("form-price").value
    var phone = document.getElementById("form-phone").value
    var address = document.getElementById("form-address").value

    var item = {    
        ID:id,
        NAME:name,
        BUY:buy,
        PRICE:price,
        PHONE:phone,
        ADDRESS:address
    }

    let index = data.findIndex((c)=>c.ID==item.ID)
    if(index>=0)
    {
        data.splice(index,1,item)
    }
    else
    {
        data.push(item)
    }
    render();
    clear();
}

function render(){
    let order =1;
    table = `<tr>
    <th>STT</th>
    <th>MÃ</th>
    <th>TÊN</th>
    <th>MUA</th>
    <th>THÀNH TIỀN</th>
    <th>SỐ ĐIỆN THOẠI</th>
    <th>ĐỊA CHỈ</th>
    <th>SỬA</th>
    <th>XÓA</th>
    </tr>`
    for(let i=0;i<data.length;i++)
    {
        table += `<tr>
          <td>${order++}</td>
          <td>${data[i].ID}</td>
          <td>${data[i].NAME}</td>
          <td>${data[i].BUY}</td>
          <td>${data[i].PRICE}</td>
          <td>${data[i].PHONE}</td>
          <td>${data[i].ADDRESS}</td>
          <th><button onclick="editItem(${data[i].ID})">SỬA</button></th>
          <th><button onclick="deleteItem(${data[i].ID})">XÓA</button></th>
        </tr>`
    }
    document.getElementById("render").innerHTML = table;
}

function clear()
{
    var id = document.getElementById("form-id").value=""
    var name = document.getElementById("form-name").value=""
    var buy = document.getElementById("form-buy").value=""
    var price = document.getElementById("form-price").value=""
    var phone = document.getElementById("form-phone").value=""
    var address = document.getElementById("form-address").value=""
}

//edit
function editItem(x)
{
    for(let i=0;i<data.length;i++)
    {
        if(data[i].ID==x)
        {
            var id = document.getElementById("form-id").value=data[i].ID;
            var name = document.getElementById("form-name").value=data[i].NAME
            var buy = document.getElementById("form-buy").value=data[i].BUY
            var price = document.getElementById("form-price").value=data[i].PRICE
            var phone = document.getElementById("form-phone").value=data[i].PHONE
            var address = document.getElementById("form-address").value=data[i].ADDRESS
        }

    }
}
//delete
function deleteItem(x)
{
    for(let i=0;i<data.length;i++)
    {
        if(data[i].ID==x)
        {
            data.splice(i,1);
            confirm("Bạn muốn xóa không!")
            render();
        }
    }
}

