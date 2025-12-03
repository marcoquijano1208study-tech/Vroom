document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addCartBtn");
  const goCartBtn = document.getElementById("goCartBtn");

  if (addBtn) {
    addBtn.addEventListener("click", function () {
      // prevent repeated clicks
      if (addBtn.classList.contains("added")) return;

      // update UI to "Added"
      addBtn.classList.add("added");
      addBtn.innerHTML = '<i class="fas fa-check-circle"></i><span class="btn-text">Added</span>';

      // remove focus so browser doesn't show blue ring
      addBtn.blur();

      // disable pointer interactions (optional)
      addBtn.setAttribute("aria-pressed", "true");
      addBtn.disabled = true;
    });
  }

  if (goCartBtn) {
    goCartBtn.addEventListener("click", function () {
      // go to checkout page (adjust filename if different)
      window.location.href = "checkout.html";
    });
  }
});
