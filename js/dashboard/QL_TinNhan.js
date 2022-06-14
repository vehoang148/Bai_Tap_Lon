var data=[];

//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var phone = document.getElementById("form-phone").value
    var address = document.getElementById("form-address").value
    var content = document.getElementById("form-content").value

    var item = {
        ID:id,
        NAME:name,
        PHONE:phone,
        ADDRESS:address,
        CONTENT:content
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
    <th>SỐ ĐIỆN THOẠI</th>
    <th>ĐỊA CHỈ</th>
    <th>NỘI DUNG</th>
    <th>SỬA</th>
    <th>XÓA</th>
    </tr>`
    for(let i=0;i<data.length;i++)
    {
        table += `<tr>
        <td>${order++}</td>
          <td>${data[i].ID}</td>
          <td>${data[i].NAME}</td>
          <td>${data[i].PHONE}</td>
          <td>${data[i].ADDRESS}</td>
          <td>${data[i].CONTENT}</td>
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
    var phone = document.getElementById("form-phone").value=""
    var address = document.getElementById("form-address").value=""
    var content = document.getElementById("form-content").value=""
    
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
            var phone = document.getElementById("form-phone").value=data[i].PHONE
            var address = document.getElementById("form-address").value=data[i].ADDRESS
            var content = document.getElementById("form-content").value=data[i].CONTENT 
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

