var data=[];

//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var price = document.getElementById("form-price").value
    var desc = document.getElementById("form-desc").value
    var refer = document.getElementById("form-refer").value

    var item = {
        
        ID:id,
        NAME:name,
        PRICE:price,
        DESC:desc,
        REFER:refer
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
    <th>Mã</th>
    <th>Tên Sản Phẩm</th>
    <th>Giá tiền</th>
    <th>Số Lượng Nhập</th>
    <th>Số Lượng Tồn</th>
    <th>Sửa</th>
    <th>Xóa</th>
    </tr>`
    for(let i=0;i<data.length;i++)
    {
        table += `<tr>
          <td>${order++}</td>
          <td>${data[i].ID}</td>
          <td>${data[i].NAME}</td>
          <td>${data[i].PRICE}</td>
          <td>${data[i].DESC}</td>
          <td>${data[i].REFER}</td>
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
    var price = document.getElementById("form-price").value=""
    var desc = document.getElementById("form-desc").value=""
    var refer = document.getElementById("form-refer").value=""

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
            var price = document.getElementById("form-price").value=data[i].PRICE
            var desc = document.getElementById("form-desc").value=data[i].DESC
            var refer = document.getElementById("form-refer").value=data[i].REFER
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

