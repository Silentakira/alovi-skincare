// Add cart badge update to landing page
const script = document.createElement('script');
script.textContent = `
  let cart = JSON.parse(localStorage.getItem('aloviCart')) || [];

  function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
  }

  updateCartBadge();
`;
document.head.appendChild(script);
