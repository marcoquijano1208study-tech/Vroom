// ADD SERVICE ROW
document.getElementById("add-services").addEventListener("click", () => {
  const list = document.getElementById("service-list");
  const div = document.createElement("div");
  div.classList.add("service-item");

  div.innerHTML = `
    <input class="serviceName" type="text" placeholder="Service Name" required>
    <input class="servicePrice" type="text" placeholder="Price (₱)" required>
  `;

  list.appendChild(div);
});


// SAVE STORE
document.getElementById("storeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("shopName").value.trim();
  const desc = document.getElementById("shopDesc").value.trim();
  const location = document.getElementById("shopLocation").value.trim();
  const phone = document.getElementById("shopPhone").value.trim();

  const serviceNameInputs = [...document.querySelectorAll(".serviceName")];
  const servicePriceInputs = [...document.querySelectorAll(".servicePrice")];

  // VALIDATION: Check empty
  for (let i = 0; i < serviceNameInputs.length; i++) {
    if (serviceNameInputs[i].value.trim() === "" || servicePriceInputs[i].value.trim() === "") {
      alert("Please fill out all service names and prices.");
      return;
    }
  }

  // CREATE SERVICES ARRAY
  const services = serviceNameInputs.map((input, i) => ({
    name: input.value.trim(),
    price: parseFloat(servicePriceInputs[i].value.replace(/,/g, "")) // FIXED
  }));

  // LOWEST PRICE
  const minPrice = Math.min(...services.map(s => s.price));

  // SAVE TO LOCAL STORAGE
  const stores = JSON.parse(localStorage.getItem("stores")) || [];

  stores.push({
    name,
    desc,
    location,
    phone,
    price: minPrice,
    services
  });

  localStorage.setItem("stores", JSON.stringify(stores));

  alert("Store created successfully!");
  window.location.href = "stores.html";
});
