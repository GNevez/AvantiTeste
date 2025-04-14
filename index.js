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

const input = document.getElementById("searchInput");
const resultDiv = document.getElementById("searchResult");
const labelText = document.getElementById("labelResult");

input.addEventListener("input", () => {
  const text = input.value.trim();
  if (text) {
    labelText.textContent = text ? text : "";
    resultDiv.classList.remove("hidden");
  } else {
    resultDiv.classList.add("hidden");
  }
});

document.getElementById("searchIcon").addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    labelText.textContent = text ? `Você buscou por: '${text}'` : "";
    resultDiv.classList.remove("hidden");
  } else {
    resultDiv.classList.add("hidden");
  }
});

document.addEventListener("click", function (event) {
  const isClickInside =
    input.contains(event.target) || resultDiv.contains(event.target);
  if (!isClickInside) {
    input.value = "";
    labelText.textContent = "";
    resultDiv.classList.add("hidden");
  }
});

const input2 = document.getElementById("searchInputMobile");
const resultDiv2 = document.getElementById("searchResultMobile");
const labelText2 = document.getElementById("labelResultMobile");

input2.addEventListener("input", () => {
  const text = input2.value.trim();
  if (text) {
    labelText2.textContent = text ? text : "";
    resultDiv2.classList.remove("hidden");
  } else {
    resultDiv2.classList.add("hidden");
  }
});

document.getElementById("searchIconMobile").addEventListener("click", () => {
  const text = input2.value.trim();
  if (text) {
    labelText2.textContent = text ? `Você buscou por: '${text}'` : "";
    resultDiv2.classList.remove("hidden");
  } else {
    resultDiv2.classList.add("hidden");
  }
});

document.addEventListener("click", function (event) {
  const isClickInside =
    input.contains(event.target) || resultDiv.contains(event.target);
  if (!isClickInside) {
    input2.value = "";
    labelText2.textContent = "";
    resultDiv2.classList.add("hidden");
  }
});