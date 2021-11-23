const arr = [
  {
    title: "Học đệm hát Guitar cùng Haketu",
    author: "Hà Kế Tú",
    rootPrice: 700,
    rateQuantity: 240,
    salePrice: 199,
    image: "./images/topsell1.jpg",
    link: "https://unica.vn/dem-hat-guitar-co-ban?boxcode=sell-course-most",
  },
  {
    title: "Guitar đệm hát nâng cao cùng Haketu",
    author: "Hà Kế Tú",
    rootPrice: 800,
    rateQuantity: 110,
    salePrice: 299,
    image: "./images/topsell2.jpg",
    link: "https://unica.vn/guitar-dem-hat-nang-cao-cung-haketu?boxcode=sell-course-most",
  },
  {
    title: "Làm chủ giọng nói",
    author: "Trần Thị Minh Hải",
    rootPrice: 600,
    rateQuantity: 350,
    salePrice: 399,
    image: "./images/topsell3.jpg",
    link: "https://unica.vn/lam-chu-giong-noi?boxcode=sell-course-most",
  },
  {
    title: "Guitar đệm hát 30 ngày cùng Hiển Râu",
    author: "Hiển Râu",
    rootPrice: 600,
    rateQuantity: 250,
    salePrice: 399,
    image: "./images/topsell4.jpg",
    link: "https://unica.vn/guitar-dem-hat-30-ngay-cung-hien-rau?boxcode=sell-course-most",
  },
  {
    title: "Fingerstyle cho người mới bắt đầu",
    author: "Hoàng Phúc",
    rootPrice: 600,
    rateQuantity: 850,
    salePrice: 599,
    image: "./images/topsell5.jpg",
    link: "https://unica.vn/finger-style-guitar-cho-nguoi-moi-bat-dau",
  },
  {
    title: "Tự do tài chính chứng khoán",
    author: "Đặng Trọng Khang",
    rootPrice: 600,
    rateQuantity: 420,
    salePrice: 399,
    image: "./images/topsell6.jpg",
    link: "https://unica.vn/tu-do-tai-chinh-cung-chung-khoan?boxcode=sell-course-most",
  },
  {
    title: "Nhập môn chứng khoán",
    author: "Đặng Trọng Khang",
    rootPrice: 600,
    rateQuantity: 220,
    salePrice: 219,
    image: "./images/topsell7.jpg",
    link: "https://unica.vn/nhap-mon-chung-khoan?boxcode=sell-course-most",
  },
  {
    title: "Học Autocad cơ bản và nâng cao",
    author: "Cầm Hải Phương",
    rootPrice: 500,
    rateQuantity: 150,
    salePrice: 299,
    image: "./images/topsell8.jpg",
    link: "https://unica.vn/autocad-co-ban-va-nang-cao?boxcode=sell-course-most",
  },
];

let topSellContainer = document.getElementById("topsell");

function handleSalePercent(rootPrice, salePrice) {
  return 100 - Math.trunc((salePrice / rootPrice) * 100);
}

arr.forEach((item) => {
  let product = document.createElement("a");
  product.className = "product__main-item";
  product.href = item.link;
  product.innerHTML = `<img
  src="${item.image}"
  alt=""
  class="product__main-img"
/>
<div class="product__main-content">
  <p class="product__main-desc">${item.title}</p>
  <div class="product__main-info">
    <div class="product__main-about">
      <p class="product__main-author">${item.author}</p>
      <p class="product__main-rootprice">${item.rootPrice}.000đ</p>
    </div>
    <div class="product__main-primary">
      <div class="product__main-rate">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p>(${item.rateQuantity})</p>
      </div>
      <p class="product__main-saleprice">${item.salePrice}.000đ</p>
    </div>
  </div>
</div>
<div class="product__main-sale">-${handleSalePercent(
    item.rootPrice,
    item.salePrice
  )}%</div>`;
  topSellContainer.appendChild(product);
});
