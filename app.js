const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColors = document.querySelectorAll(".color");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: "PKR 19,999",
    colors: [
      { code: "black", img: "./p2pic/air.png" },
      { code: "darkblue", img: "./p2pic/air2.png" },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN",
    price: "PKR 14,999",
    colors: [
      { code: "lightgray", img: "./p2pic/jordan.png" },
      { code: "green", img: "./p2pic/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: "PKR 16,999",
    colors: [
      { code: "lightgray", img: "./p2pic/blazer.png" },
      { code: "green", img: "./p2pic/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: "PKR 12,999",
    colors: [
      { code: "black", img: "./p2pic/crater.png" },
      { code: "lightgray", img: "./p2pic/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: "PKR 17,999",
    colors: [
      { code: "gray", img: "./p2pic/hippie.png" },
      { code: "black", img: "./p2pic/hippie2.png" },
    ],
  },
];

let choosenProduct = products[0];

// 1. MENU CLICK - Slider change
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    productTitle.textContent = choosenProduct.title;
    productPrice.textContent = choosenProduct.price;
    productImg.src = choosenProduct.colors[0].img;
    
    productColors.forEach((color, i) => {
      color.style.backgroundColor = choosenProduct.colors[i].code;
    });
  });
});

// 2. COLOR CLICK - Image change
productColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = choosenProduct.colors[index].img;
  });
});
