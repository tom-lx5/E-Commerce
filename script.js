// Gestion du panier
const cart = []; // Tableau pour stocker les produits du panier
const cartLink = document.getElementById('open-cart');

// Fonction pour mettre à jour l'affichage du panier
function updateCartDisplay() {
  cartLink.textContent = `🛒 Panier (${cart.length})`;
}

// Ajout au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const productName = this.dataset.name;
    const productPrice = parseFloat(this.dataset.price);

    // Ajout du produit au tableau cart
    cart.push({ name: productName, price: productPrice });

    // Mettre à jour le texte du lien panier
    updateCartDisplay();

    alert(`${productName} ajouté au panier !`);
  });
});
