const store = JSON.parse(localStorage.getItem("selectedStore"));
const service = localStorage.getItem("selectedService");
const servicePrice = parseFloat(localStorage.getItem("selectedServicePrice"));
const storePrice = parseFloat(store.price);

// auto date
const today = new Date();
document.getElementById("dateNow").textContent =
  today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

// fill receipt
document.getElementById("storeName").textContent = store.name;
document.getElementById("storeLocation").textContent = store.location;

document.getElementById("storeStarting").textContent = "₱" + storePrice;
document.getElementById("serviceName").textContent = service;
document.getElementById("servicePrice").textContent = "₱" + servicePrice;

// total
document.getElementById("totalPrice").textContent = "₱" + (storePrice + servicePrice);
