const submitBtn = document.querySelector(".submit");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const tbody = document.querySelector("#tbody");

const data = [];

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  const obj = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    address: address.value,
  };
  data.push(obj);
  fname.value = "";
  lname.value = "";
  email.value = "";
  address.value = "";

  const tr = document.createElement("tr");
  tr.innerHTML = `  
  <td>${obj.fname}</td>
  <td>${obj.lname}</td>
  <td>${obj.email}</td>
  <td>${obj.address}</td>
  <td>
  <div claas="btn">
  <button class="editBtn"  onClick="onEdit(this)"> Edit</button>
  <button class="deleteBtn" onClick="onDelete(this)">Delete</button></td>
  </div>
  `;
  tbody.appendChild(tr);
  
});

function onEdit(e) {
  const tr = e.parentNode.parentNode;
  console.log(e);
  console.log(tr);
  fname.value = tr.children[0].innerText;
  lname.value = tr.children[1].innerText;
  email.value = tr.children[2].innerText;
  address.value = tr.children[3].innerText;
  tr.remove();
}

function onDelete(e) {
  const tr = e.parentNode.parentNode;
  tr.remove();
}
