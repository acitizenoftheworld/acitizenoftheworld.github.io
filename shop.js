const items = [
  {
    name: "Diamond Sword",
    price: "$500",
    stock: "12 in stock",
    image: "images/sword.png"
  },
  {
    name: "Totem of Undying",
    price: "$150",
    stock: "32 in stock",
    image: "images/totem.png"
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
