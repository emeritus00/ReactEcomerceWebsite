const products = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    description:
      "The latest iPhone with A15 Bionic chip, 6.1-inch Super Retina XDR display, and improved dual-camera system.",
    price: 999,
    image: "./images/iphone13pro.jpeg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description:
      "Samsung’s flagship smartphone with Exynos 2100, 6.2-inch Dynamic AMOLED 2X display, and triple-camera setup.",
    price: 799,
    image: "./images/samsungS21.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    description:
      "Industry-leading noise canceling headphones with premium sound quality and up to 30 hours of battery life.",
    price: 349,
    image: "./images/sonyXM4.jpg",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    description:
      "Ultra-thin and powerful laptop with 11th Gen Intel Core processors, 13.4-inch FHD+ display, and exceptional build quality.",
    price: 1099,
    image: "./images/dellXP13.jpg",
  },
  {
    id: 5,
    name: "Apple Watch Series 7",
    description:
      "The most advanced Apple Watch with larger and more durable display, blood oxygen monitoring, and ECG app.",
    price: 399,
    image: "./images/applewatchS7.jpg",
  },
  {
    id: 6,
    name: "Amazon Echo Dot (4th Gen)",
    description:
      "Smart speaker with Alexa voice assistant, improved sound quality, and compact spherical design.",
    price: 49,
    image: "./images/amazonecho4.jpg",
  },
  {
    id: 7,
    name: "Bose QuietComfort 35 II",
    description:
      "Wireless Bluetooth headphones with noise cancellation, Alexa voice control, and balanced sound quality.",
    price: 299,
    image: "./images/bosequiet35.jpg",
  },
  {
    id: 8,
    name: "Nikon D3500",
    description:
      "Entry-level DSLR camera with 24.2 MP sensor, EXPEED 4 image processor, and easy-to-use controls.",
    price: 499,
    image: "./images/nikonD3500.jpg",
  },
  {
    id: 9,
    name: "PlayStation 5",
    description:
      "Sony’s next-gen gaming console with ultra-high-speed SSD, 4K gaming, and innovative DualSense controller.",
    price: 499,
    image: "./images/playstation5.jpg",
  },
  {
    id: 10,
    name: "Instant Pot Duo 7-in-1",
    description:
      "Multifunctional pressure cooker with 7 cooking modes, 14 one-touch programs, and stainless steel inner pot.",
    price: 89,
    image: "./images/instantPot7.jpg",
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
