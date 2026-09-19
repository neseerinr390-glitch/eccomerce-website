const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smartwatch", price: 89.99, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Mechanical Keyboard", price: 69.99, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Gaming Mouse", price: 29.99, image: "https://via.placeholder.com/200" }
];

let cart = [];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(productId) {
  const item = products.find(p => p.id === productId);
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = cart.map(item => `
    <li>
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    </li>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cart-total").innerText = total.toFixed(2);
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your order!");
  cart = [];
  updateCart();
  toggleCart();
}

// Initial Render
renderProducts();
