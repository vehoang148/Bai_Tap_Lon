window.addEventListener('DOMContentLoaded', (event) => {
  let form = document.getElementById("form-car");
  let id = document.getElementById("form-id");
  let name = document.getElementById("form-name");
  let image = document.getElementById("form-image");
  let price = document.getElementById("form-price");
  let desc = document.getElementById("form-desc");
  let refer = document.getElementById("form-refer");

  let tableBody = document.getElementById("table-body");

  let counter = 1;

  form.onsubmit = function(e) {
    e.preventDefault();
    
    let str = `
      <tr>
        <td>${counter++}</td>
        <td>${id.value}</td>
        <td><img src="${image.value}" width="100"/></td>
        <td>${name.value}</td>
        <td>${price.value}</td>
        <td>${desc.value}</td>
        <td>${refer.value}</td>
      </tr>
    `
    tableBody.innerHTML += str;

  };
});

