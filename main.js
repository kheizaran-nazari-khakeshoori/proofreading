document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const list = document.getElementById("texts");
  if (!list || typeof specialTexts === "undefined") return;

  const fragment = document.createDocumentFragment();

  specialTexts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "text-card";

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
