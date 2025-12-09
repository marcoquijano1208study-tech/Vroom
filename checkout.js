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

// Load store data
const store = JSON.parse(localStorage.getItem("selectedStore"));

// Display store name + starting price
document.getElementById("storeName").textContent = store.name;
document.getElementById("storePrice").textContent = "₱" + store.price;

// Display service list dynamically
const serviceList = document.getElementById("serviceList");
store.services.forEach(s => {
  serviceList.innerHTML += `
    <label class="radio-option">
      <input type="radio" name="service" data-name="${s.name}" data-price="${s.price}">
      <span>${s.name} — ₱${s.price}</span>
    </label>
  `;
});

// Proceed button
function goLocation() {
  const selected = document.querySelector("input[name='service']:checked");
  if (!selected) {
    alert("Please choose a service.");
    return;
  }

  localStorage.setItem("selectedService", selected.getAttribute("data-name"));
  localStorage.setItem("selectedServicePrice", selected.getAttribute("data-price"));

  window.location.href = "location.html";
}
