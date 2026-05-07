document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.body.dataset.theme = currentTheme;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      document.body.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
    });
  }

  const list = document.getElementById("texts");
  if (!list || typeof specialTexts === "undefined") return;

  const fragment = document.createDocumentFragment();

  specialTexts.forEach((item) => {
    const card = document.createElement("article");
    card.className = item.featured ? "text-card featured" : "text-card";

    const label = document.createElement("div");
    label.className = "text-label";
    label.textContent = item.label;

    const body = document.createElement("p");
    body.className = "text-body";
    body.textContent = item.body;

    card.appendChild(label);
    card.appendChild(body);
    fragment.appendChild(card);
  });

  list.appendChild(fragment);

});
