function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check kung existing na sa cart
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1; // dagdagan lang quantity
  } else {
    cart.push({ name: name, price: price, image: image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

