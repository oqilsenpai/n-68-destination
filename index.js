const findElement = (selector, parent = document) => {
  return parent.querySelector(selector);
};

const elWrapperProducts = findElement(".top-cards");
const elProductTemplate = findElement("#template");

const products = [
  {
    id: 1,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 2,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 3,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 4,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 5,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 6,
    categories: ["single-door"],
    img: "images/img-product.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
  {
    id: 7,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
  {
    id: 8,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
  {
    id: 9,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
  {
    id: 10,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
  {
    id: 11,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
  {
    id: 12,
    categories: ["double-door"],
    img: "images/img-door.png",
    title: "Дверной Замок Golden Soft для офиса",
    realPrice: "33 000₽",
    discountPrice: "39 000₽",
  },
];

function renderProducts(list = products, parent = elWrapperProducts) {
  parent.textContent = null;

  list.forEach((product) => {
    const newTemplate = elProductTemplate.content.cloneNode(true);

    const elImg = findElement(".picture", newTemplate);
    const elTitleProduct = findElement(".titleproduct", newTemplate);
    const elPrice = findElement(".price", newTemplate);
    const elDiscountPrice = findElement(".discountpayment", newTemplate);
    const elCategories = findElement(".catagories", newTemplate);
    const elCardLink = findElement(".card-link", newTemplate);

    elImg.src = product.img;
    elTitleProduct.textContent = product.title;
    elPrice.textContent = product.realPrice;
    elDiscountPrice.textContent = product.discountPrice;

    elCategories.textContent = "";
    product.categories.forEach((category) => {
      const newLi = document.createElement("li");
      newLi.textContent = category;
      elCategories.appendChild(newLi);
    });

    elCardLink.href = `product.html?id=${product.id}`;

    parent.appendChild(newTemplate);
  });
}

function filteringCategories(event) {
  const category = event.target.getAttribute("data-category");
  let filteredProducts;

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) =>
      product.categories.includes(category)
    );
  }

  renderProducts(filteredProducts);
}

const minPriceInput = findElement(".minPrice");
const maxPriceInput = findElement(".maxPrice");

function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[^\d]/g, ""), 10);
}

function filterByPrice() {
  const minPrice = parsePrice(minPriceInput.value) || 0;
  const maxPrice = parsePrice(maxPriceInput.value) || Infinity;

  const filteredProducts = products.filter((product) => {
    const productPrice = parsePrice(product.realPrice);
    return productPrice >= minPrice && productPrice <= maxPrice;
  });

  renderProducts(filteredProducts);
}

minPriceInput.addEventListener("input", filterByPrice);
maxPriceInput.addEventListener("input", filterByPrice);

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", filteringCategories);
});

renderProducts();
