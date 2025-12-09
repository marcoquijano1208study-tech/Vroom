document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addCartBtn");
  const goCartBtn = document.getElementById("goCartBtn");

  if (addBtn) {
    addBtn.addEventListener("click", function () {
      if (addBtn.classList.contains("added")) return;

      addBtn.classList.add("added");
      addBtn.innerHTML = '<i class="fas fa-check-circle"></i><span class="btn-text">Added</span>';

      addBtn.blur();

      addBtn.setAttribute("aria-pressed", "true");
      addBtn.disabled = true;
    });
  }

  if (goCartBtn) {
    goCartBtn.addEventListener("click", function () {
      window.location.href = "stores.html";
    });
  }
});
