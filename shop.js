const items = [
  {
    name: "Stone Double Chest",
    price: "18g",
    stock: "As many as you need",
    image: "images/stone.png"
  },
  {
    name: "Cobblestone Double Chest",
    price: "18g",
    stock: "As many as you need",
    image: "images/cobblestone.png"
  },
  {
    name: "Sand Double Chest",
    price: "18g",
    stock: "As many as you need",
    image: "images/sand.png"
  },
  {
    name: "Grass Double Chest",
    price: "18g",
    stock: "3 in Stock",
    image: "images/grass.png"
  },
  {
    name: "Glass Double Chest",
    price: "18g",
    stock: "As many as you need",
    image: "images/glass.png"
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
