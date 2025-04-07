document.addEventListener("DOMContentLoaded", function () {
  function setupDropdown(buttonId, dropdownId) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    button.addEventListener("mouseenter", function () {
      dropdown.classList.remove("hidden");
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdown.classList.add("hidden");
    });

    button.addEventListener("mouseleave", function (event) {
      // Se o mouse não entrou no dropdown, escondemos o menu
      setTimeout(() => {
        if (!dropdown.matches(":hover")) {
          dropdown.classList.add("hidden");
        }
      }, 100);
    });
  }

  setupDropdown("departamentoBtn", "dropdown");
  setupDropdown("departamentoBtn2", "dropdown2");
});