const array3 = [
  {
    title: "Tiktok : Tiếp cận 100k+ khách với chi phí 0đ",
    author: "cấn mạnh linh",
    rootPrice: 390,
    rateQuantity: 50,
    salePrice: 90,
    image: "./images/st1.jpg",
    link: "https://unica.vn/quy-trinh-xay-kenh-tiktok-trieu-follows-cho-kinh-doanh-quang-ba-thuong-hieu",
  },
  {
    title: "Bí quyết bán lẻ ngàn đơn trên Shopee, Zalo và Facebook",
    author: "trần hoa",
    rootPrice: 1200,
    rateQuantity: 452,
    salePrice: 199,
    image: "./images/st2.jpg",
    link: "https://unica.vn/bi-quyet-ban-le-ngan-don-tren-shopee-zalo-va-facebook",
  },
  {
    title: "Kinh doanh theo mạng từ A - Z",
    author: "nguyễn minh cường",
    rootPrice: 950,
    rateQuantity: 227,
    salePrice: 199,
    image: "./images/st3.jpg",
    link: "https://unica.vn/mlm-2-0-bi-mat-he-thong-mlm-van-hanh-tu-dong",
  },
  {
    title: "Học Forex - Những giá trị mang lại thàng công",
    author: "trần quốc minh",
    rootPrice: 500,
    rateQuantity: 533,
    salePrice: 199,
    image: "./images/st4.jpg",
    link: "https://unica.vn/hoc-forex-nhung-gia-tri-mang-lai-thanh-cong",
  },
  {
    title: "Thu nhập thụ động từ việc Đóng gói kiến thức & tạo khóa học",
    author: "nguyễn chương",
    rootPrice: 900,
    rateQuantity: 345,
    salePrice: 199,
    image: "./images/st5.jpg",
    link: "https://unica.vn/xay-dung-khoa-hoc-online-thanh-cong",
  },
  {
    title: "Khởi nghiệp thực chiến từ A - Z",
    author: "nguyễn minh cường",
    rootPrice: 800,
    rateQuantity: 153,
    salePrice: 199,
    image: "./images/st6.jpg",
    link: "https://unica.vn/khoi-nghiep-thuc-chien-tu-a-z",
  },
  {
    title: "Bí quyết kiếm tiền trên Youtube",
    author: "KNSV TV",
    rootPrice: 799,
    rateQuantity: 149,
    salePrice: 199,
    image: "./images/st7.jpg",
    link: "https://unica.vn/cach-lam-video-animation-bai-ban-chuyen-nghiep-de-kiem-thu-nhap-thu-dong-tren-youtube",
  },
  {
    title: "Gia tăng lợi nhuận trong kinh doanh bất động sản",
    author: "phạm vũ bình",
    rootPrice: 600,
    rateQuantity: 444,
    salePrice: 210,
    image: "./images/st8.jpg",
    link: "https://unica.vn/bi-quyet-gia-tang-loi-nhuan-ben-vung-trong-kinh-doanh-bat-dong-san-cho-nguoi-moi-co-von-it",
  },
];

let startUpContainer = document.getElementById("startup");

array3.forEach((item) => {
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
        <p class="product__main-rootprice">${divideNum(item.rootPrice)}.000đ</p>
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
        <p class="product__main-saleprice">${divideNum(item.salePrice)}.000đ</p>
      </div>
    </div>
  </div>
  <div class="product__main-sale">-${handleSalePercent(
    item.rootPrice,
    item.salePrice
  )}%</div>`;
  startUpContainer.appendChild(product);
});
