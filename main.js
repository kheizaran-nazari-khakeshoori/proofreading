document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const specialTexts = [
    {
      label: "01",
      body: "Good writing is clear. Great writing is also kind to the reader.",
    },
    {
      label: "02",
      body: "Every edit is a small promise: this line will be easier to understand.",
    },
    {
      label: "03",
      body: "Remove what you can, highlight what matters, and the message will shine.",
    },
    {
      label: "04",
      body: "Typos are loud; precision is quiet but unforgettable.",
    },
    {
      label: "05",
      body: "Read it once for meaning, twice for rhythm, and once more for kindness.",
    },
  ];

  const list = document.getElementById("texts");
  if (!list) return;

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
    list.appendChild(card);
  });
});
