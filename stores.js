function openStore(index) {
  const stores = JSON.parse(localStorage.getItem("stores")) || [];
  const store = stores[index];

  // Save the selected store details
  localStorage.setItem("selectedStore", JSON.stringify({
    name: store.name,
    location: store.location,
    desc: store.desc,
    phone: store.phone,
    price: store.price,     // starting price shown in store
    services: store.services
  }));

  window.location.href = "checkout.html";
}
