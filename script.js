import products from "./products.js";

const grid = document.getElementById("product-grid");

products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <span>₱${p.price}</span>
  `;
  grid.appendChild(card);
});
