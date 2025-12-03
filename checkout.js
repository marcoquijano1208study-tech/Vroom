// LOAD saved data
document.addEventListener("DOMContentLoaded", () => {

  if (localStorage.getItem("name")) {
    document.getElementById("name").innerText = localStorage.getItem("name");
  }

  if (localStorage.getItem("address")) {
    document.getElementById("address").innerText = localStorage.getItem("address");
  }

  if (localStorage.getItem("number")) {
    document.getElementById("number").innerText = localStorage.getItem("number");
  }

});


// SAVE new data
function saveAddress() {

  localStorage.setItem("name", document.getElementById("newName").value);
  localStorage.setItem("address", document.getElementById("newAddress").value);
  localStorage.setItem("number", document.getElementById("newNumber").value);

  window.location.href = "checkout.html";
}
