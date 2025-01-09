const cart = [];
const cartCount = document.getElementById('cart-count');
const cartSection = document.getElementById('cart-section');
const cartItems = document.getElementById('cart-items');
const viewCart = document.getElementById('view-cart');
const closeCart = document.getElementById('close-cart');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.closest('.product');
    const name = product.getAttribute('data-name');
    const price = product.getAttribute('data-price');

    cart.push({ name, price });
    cartCount.textContent = cart.length;

    alert(`${name} a été ajouté au panier.`);
  });
});

viewCart.addEventListener('click', () => {
  cartSection.style.display = 'block';
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price} €`;
    cartItems.appendChild(div);
  });
});

closeCart.addEventListener('click', () => {
  cartSection.style.display = 'none';
});