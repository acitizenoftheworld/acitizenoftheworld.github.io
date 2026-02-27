const items = [
  {
    name: "Stone Double Chest",
    price: "18g",
    stock: "stock available upon request",
    image: "images/sword.png"
  },
  {
    name: "Cobblestone Double Chest",
    price: "18g",
    stock: "stock available upon request",
    image: "images/cobblestone.png"
  }
];

const shop = document.getElementById("shop");

items.forEach(item => {
  shop.innerHTML += `
    <div class="item">
      <img src="${item.image}">
      <h2>${item.name}</h2>
      <p>${item.stock}</p>
      <div class="price">${item.price}</div>
    </div>
  `;
});
