const array2 = [
  {
    title: "Massage uyên ương",
    author: "Bác sĩ Lê Hải",
    rootPrice: 600,
    rateQuantity: 50,
    salePrice: 399,
    image: "./images/offer1.jpg",
    link: "https://unica.vn/massage-uyen-uong",
  },
  {
    title: "Excel ứng dụng thực tế trong doanh nghiệp",
    author: "Lê Chí Xuân",
    rootPrice: 999,
    rateQuantity: 999,
    salePrice: 199,
    image: "./images/offer2.jpg",
    link: "https://unica.vn/excel-ung-dung-thuc-te-trong-doanh-nghiep",
  },
  {
    title: "Pha chế cafe barista từ cơ bản đến nâng cao",
    author: "Nguyễn Tấn Trung",
    rootPrice: 800,
    rateQuantity: 127,
    salePrice: 549,
    image: "./images/offer3.jpg",
    link: "https://unica.vn/pha-che-cafe-barista-tu-co-ban-den-nang-cao",
  },
  {
    title: "Nấu ngon hơn mẹ - Master món thịt heo",
    author: "Phạm Phương Mai",
    rootPrice: 500,
    rateQuantity: 233,
    salePrice: 299,
    image: "./images/offer4.jpg",
    link: "https://unica.vn/nau-ngon-hon-me-master-mon-thit-heo",
  },
  {
    title: "Bé vui học toán theo phương pháp FINGERMATH NHẬT",
    author: "Nguyễn Thị Hạnh",
    rootPrice: 700,
    rateQuantity: 333,
    salePrice: 399,
    image: "./images/offer5.jpg",
    link: "https://unica.vn/sieu-tri-tue-finger-math-nhat-online",
  },
  {
    title: "Bộ bí quyết công thức 20 món ăn Trung Hoa nổi tiếng",
    author: "Y Lợi Ẩn",
    rootPrice: 999,
    rateQuantity: 653,
    salePrice: 555,
    image: "./images/offer6.jpg",
    link: "https://unica.vn/bo-bi-quyet-cong-thuc-20-mon-an-trung-hoa-noi-tieng",
  },
  {
    title: "Bí quyết đầu tư chứng khoán từ vài chục triệu lên vài tỷ",
    author: "Phạm Minh Hoàng",
    rootPrice: 800,
    rateQuantity: 119,
    salePrice: 459,
    image: "./images/offer7.jpg",
    link: "https://unica.vn/bi-quyet-dau-tu-chung-khoan-tu-vai-chuc-trieu-len-vai-ty",
  },
  {
    title: "IELTS Speaking online tại nhà với thầy Patrick",
    author: "Patrick O'Grandy",
    rootPrice: 700,
    rateQuantity: 754,
    salePrice: 399,
    image: "./images/offer8.jpg",
    link: "https://unica.vn/ielts-speaking-online-tai-nha-voi-thay-patrick",
  },
];

let offerTodayContainer = document.getElementById("offerToday");

array2.forEach((item) => {
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
  offerTodayContainer.appendChild(product);
});
