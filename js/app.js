const products = [
  {
    id: 1,
    title:
      "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD",
    price: 32_000_000,
    img: "./images/products/image01.png",
    description:
      "این لپ‌تاپ لنوو با پردازنده‌ی قدرتمند i7 نسل ۱۳ و ۱۶ گیگابایت رم، مناسب برای کارهای روزمره و سنگین. حافظه ۵۱۲ گیگابایتی SSD عملکرد سریعی را فراهم می‌کند.",
  },
  {
    id: 2,
    title:
      "لپ تاپ 14 اینچی ایسوس مدل VivoBook R465FA - Core i5 1135G7 8GB 256SSD",
    price: 27_000_000,
    img: "./images/products/image02.png",
    description:
      "لپ‌تاپ اقتصادی ایسوس با پردازنده i5 نسل ۱۱، دارای ۸ گیگابایت رم و ۲۵۶ گیگابایت حافظه SSD، مناسب برای استفاده روزمره و سبک.",
  },
  {
    id: 3,
    title: "لپ تاپ 13.3 اینچی اپل مدل MacBook Air 2020 M1 8GB 256SSD",
    price: 55_000_000,
    img: "./images/products/image03.png",
    description:
      "مک‌بوک ایر با پردازنده M1 و ۸ گیگابایت رم، ایده‌آل برای کاربران حرفه‌ای اپل که به دنبال سرعت و عملکرد بالا در یک بدنه سبک هستند.",
  },
  {
    id: 4,
    title: "لپ تاپ 16 اینچی اچ‌پی مدل Envy x360 - Ryzen 7 5700U 16GB 512SSD",
    price: 47_000_000,
    img: "./images/products/image04.png",
    description:
      "لپ‌تاپ تبدیل‌پذیر اچ‌پی با پردازنده Ryzen 7 و ۱۶ گیگابایت رم، مناسب برای کارهای گرافیکی و مالتی‌مدیا. صفحه‌نمایش ۱۶ اینچی و کیفیت ساخت عالی.",
  },
  {
    id: 5,
    title: "لپ تاپ 15.6 اینچی دل مدل G5 15 SE - Ryzen 5 4600H 8GB 512SSD",
    price: 36_000_000,
    img: "./images/products/image05.png",
    description:
      "لپ‌تاپ گیمینگ دل با پردازنده Ryzen 5 و ۸ گیگابایت رم، مناسب برای گیمرها و کاربران حرفه‌ای که به دنبال عملکرد قوی هستند.",
  },
  {
    id: 6,
    title:
      "لپ تاپ 15.6 اینچی ایسر مدل Nitro 5 AN515-45 - Ryzen 7 5800H 16GB 1TB SSD",
    price: 54_000_000,
    img: "./images/products/image06.png",
    description:
      "یک لپ‌تاپ گیمینگ قدرتمند از ایسر با پردازنده Ryzen 7 و ۱۶ گیگابایت رم. دارای ۱ ترابایت حافظه SSD برای بازی‌های حجیم و اجرای سریع.",
  },
  {
    id: 7,
    title:
      "لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon Gen 9 - Core i7 1165G7 16GB 1TB SSD",
    price: 62_000_000,
    img: "./images/products/image07.png",
    description:
      "لپ‌تاپ حرفه‌ای و باکیفیت از سری ThinkPad با پردازنده i7 و ۱۶ گیگابایت رم. مناسب برای کاربران تجاری و حرفه‌ای که به دنبال کیفیت ساخت بالا و امنیت هستند.",
  },
  {
    id: 8,
    title: "لپ تاپ 13.3 اینچی دل مدل XPS 13 - Core i7 1185G7 16GB 512SSD",
    price: 71_000_000,
    img: "./images/products/image08.png",
    description:
      "لپ‌تاپ دل XPS با طراحی زیبا و پردازنده i7، ۱۶ گیگابایت رم و صفحه‌نمایش باکیفیت، انتخابی عالی برای کاربران حرفه‌ای و علاقه‌مندان به تکنولوژی.",
  },
  {
    id: 9,
    title: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 - Ryzen 5 5500U 8GB 512SSD",
    price: 38_000_000,
    img: "./images/products/image09.png",
    description:
      "لپ‌تاپ سبک و زیبا از سری ZenBook با پردازنده Ryzen 5 و ۸ گیگابایت رم. مناسب برای کارهای روزمره و سبک با باتری قوی.",
  },
  {
    id: 10,
    title:
      "لپ تاپ 15.6 اینچی ام‌اس‌آی مدل GF63 Thin 11SC - Core i5 11400H 16GB 512SSD",
    price: 46_000_000,
    img: "./images/products/image10.png",
    description:
      "لپ‌تاپ قدرتمند MSI با پردازنده i5 نسل ۱۱، ۱۶ گیگابایت رم و کارت گرافیک مناسب. گزینه‌ای عالی برای گیمرها و کاربران حرفه‌ای.",
  },
  {
    id: 11,
    title: "لپ تاپ 15.6 اینچی اچ‌پی مدل Pavilion 15 - Core i5 1235U 8GB 512SSD",
    price: 34_000_000,
    img: "./images/products/image11.png",
    description:
      "لپ‌تاپ اقتصادی اچ‌پی با پردازنده i5 نسل ۱۲، ۸ گیگابایت رم و ۵۱۲ گیگابایت حافظه SSD، مناسب برای استفاده‌های روزمره و تجاری.",
  },
  {
    id: 12,
    title: "لپ تاپ 16 اینچی اپل مدل MacBook Pro 2021 M1 Pro 16GB 1TB SSD",
    price: 85_000_000,
    img: "./images/products/image12.png",
    description:
      "مک‌بوک پرو با پردازنده M1 Pro و ۱۶ گیگابایت رم، مناسب برای کاربران حرفه‌ای اپل که به دنبال عملکرد بی‌نظیر در کارهای سنگین و حرفه‌ای هستند.",
  },
];

let basket = [];

const productsContainer = document.querySelector(".wrapper");
const openBasketBtn = document.querySelector(".open-basket");
const basketScreen = document.querySelector(".basket-screen");
const productsCountElemInBasket = document.querySelector(".products-count");
const productsCountElem = document.querySelector(".count");
const productCount = document.querySelector(".product-count");
const closeBasketBtn = document.querySelector(".close-basket");
const basketProductsContainer = document.querySelector(".basket-main");
const basketItemTitle = document.querySelector(".basket-item_title");
const basketItemPrice = document.querySelector(".basket-item_price");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const removeProductBtn = document.querySelector(".remove-button");
const totalPriceElem = document.querySelector(".total-price");
const clearBasketBtn = document.querySelector(".clear-button");
const completeShoppingBtn = document.querySelector(".complete-button");

const showProducts = () => {
  products.forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <article>
          <header class="product-header">
            <img
              src="${product.img}"
              class="product-img"
              alt=""
            />
          </header>
          <main class="product-body">
            <h3 class="product-title">
              ${product.title}
            </h3>
            <p class="desc">
              ${product.description}
            </p>
          </main>
          <footer class="product-footer">
            <p class="price">${product.price.toLocaleString()} ت</p>
            <button class="add-to-cart" onclick="addProductToBasket(${product.id})">
              <i class="bx bx-cart-alt"></i>
              افزودن به سبد
            </button>
          </footer>
        </article>
      `,
    );
  });
};

const addProductToBasket = (productId) => {
  const mainProduct = products.find((product) => product.id === productId);

  const productInBasket = basket.find((product) => product.id === productId);

  if (productInBasket) {
    productInBasket.count++;
  } else {
    const basketNewProduct = {
      id: mainProduct.id,
      title: mainProduct.title,
      price: mainProduct.price,
      img: mainProduct.img,
      count: 1,
      description: mainProduct.description,
    };

    basket.push(basketNewProduct);
  }

  saveBasketInLocalStorage();
  calculateTotalPrice();
};

const showBasketProducts = () => {
  basketProductsContainer.innerHTML = "";

  if (!basket.length) {
    basketProductsContainer.innerHTML = `<p class="empty-basket">سبد خرید شما خالی می باشد :(</p>`;
  }

  basket.forEach((basketProduct) => {
    basketProductsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <article class="basket-item">
          <div class="flex-center">
            <img src="./images/products/image01.png" alt="" />
            <div class="basket-item_details">
              <p class="basket-item_title">
              ${basketProduct.title}
              </p>
              <p class="basket-item_price">${basketProduct.price.toLocaleString()}</p>
            </div>
            <div>
              <div class="buttons">
                <button class="increase" onclick='increaseProductCount(${basketProduct.id})'>
                  <i class="bx bx-plus"></i>
                </button>
                <button class="remove-button" onclick='removeProductFromBasket(${basketProduct.id})'>
                  <!-- Boxicons trash icon -->
                  <i class="bx bx-trash"></i>
                </button>
                <button class="decrease" onclick='decreaseProductCount(${basketProduct.id})'>
                  <!-- Decrease icon -->
                  <i class="bx bx-minus"> </i>
                </button>
              </div>
              <div class="product-count-card">
                <span>تعداد:</span>
                <span class="product-count">${basketProduct.count}</span>
              </div>
            </div>
          </div>
        </article>
      `,
    );
  });

  calculateTotalPrice();
  productsCountElemInBasket.innerHTML = `(${basket.length})`;
};

const calculateTotalPrice = () => {
  let totalPrice = 0;
  let totalAmount = 0;

  basket.forEach((basketProduct) => totalAmount += basketProduct.count);

  if (totalAmount === 0) {
    productsCountElem.classList.add("hidden");
  } else {
    productsCountElem.classList.remove("hidden");
    productsCountElem.innerHTML = totalAmount;
  }

  basket.forEach((basketProduct) => totalPrice += basketProduct.count * basketProduct.price)

  totalPriceElem.innerHTML = totalPrice.toLocaleString();
};

const increaseProductCount = (productId) => {
  const productToIncreaseCount = basket.find((basketProduct) => basketProduct.id === productId);

  productToIncreaseCount.count += 1;

  saveBasketInLocalStorage();
  showBasketProducts();
  calculateTotalPrice();
};

const decreaseProductCount = (productId) => {
  const productToDecreaseCount = basket.find((basketProduct) => basketProduct.id === productId);

  productToDecreaseCount.count -= 1;

  if (!productToDecreaseCount.count) {
    removeProductFromBasket(productId);
  }

  saveBasketInLocalStorage();
  showBasketProducts();
  calculateTotalPrice();
};

const removeProductFromBasket = (productId) => {
  const productToRemove = basket.findIndex((basketProduct) => basketProduct.id === productId);

  basket.splice(productToRemove, 1);
  saveBasketInLocalStorage();
  showBasketProducts();
  calculateTotalPrice();
};

const saveBasketInLocalStorage = () => localStorage.setItem("basket", JSON.stringify(basket));

const getProductsFromLocalStorage = () => {
  const localBaskets = JSON.parse(localStorage.getItem("basket"));

  if (localBaskets) {
    basket = localBaskets;
  }

  showProducts();
  showBasketProducts(localBaskets);
};

const openBasket = () => {
  basketScreen.classList.remove("hidden");
  showBasketProducts();
};

const hideBasket = () => basketScreen.classList.add("hidden");

const clearBasket = () => {
  basket = [];
  showBasketProducts();
  saveBasketInLocalStorage();
};

openBasketBtn.addEventListener("click", openBasket);
closeBasketBtn.addEventListener("click", hideBasket);
clearBasketBtn.addEventListener("click", clearBasket);
