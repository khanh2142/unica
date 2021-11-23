const slicker2 = [
  {
    title: "Facebook Marketing từ A - Z",
    author: "tâm hợp phát",
    rootPrice: 999,
    salePrice: 599,
    image: "./images/slider2_1.jpg",
    link: "https://unica.vn/facebook-marketing-tu-a-z?boxcode=new-views-vip",
  },
  {
    title: "Học SEO từ A - Z",
    author: "henry phước",
    rootPrice: 700,
    salePrice: 245,
    image: "./images/slider2_2.jpg",
    link: "https://unica.vn/hoc-seo-tu-a-z?boxcode=new-views-vip",
  },
  {
    title: "Anh văn giao tiếp cho người mất gốc",
    author: "ruby thảo trần",
    rootPrice: 600,
    salePrice: 479,
    image: "./images/slider2_3.jpg",
    link: "https://unica.vn/anh-van-giao-tiep-cho-nguoi-hoan-toan-mat-goc?boxcode=new-views-vip",
  },
  {
    title: "Tập Yoga cơ bản tại nhà",
    author: "nguyễn hiếu",
    rootPrice: 700,
    salePrice: 549,
    image: "./images/slider2_4.jpg",
    link: "https://unica.vn/yoga-co-ban-ngay-tai-nha?boxcode=new-views-vip",
  },
  {
    title: "Học đệm hát Guitar cùng Haketu",
    author: "hà kế tú",
    rootPrice: 700,
    salePrice: 199,
    image: "./images/slider2_5.jpg",
    link: "https://unica.vn/dem-hat-guitar-co-ban?boxcode=new-views-vip",
  },
  {
    title: "30 Tuyệt chiêu gia tăng nhanh doanh số",
    author: "phạm thành long",
    rootPrice: "2.999",
    salePrice: "1.299",
    image: "./images/slider2_6.jpg",
    link: "https://unica.vn/30-tuyet-chieu-gia-tang-doanh-so?boxcode=new-views-vip",
  },
  {
    title: "Tự học tiếng Trung cơ bản",
    author: "thanh mai",
    rootPrice: 499,
    salePrice: 800,
    image: "./images/slider2_7.jpg",
    link: "https://unica.vn/tu-hoc-tieng-trung-co-ban?boxcode=new-views-vip",
  },
  {
    title: "Guitar đệm hát nâng cao cùng Haketu",
    author: "hà kế tú",
    rootPrice: 800,
    salePrice: 299,
    image: "./images/slider2_8.jpg",
    link: "https://unica.vn/guitar-dem-hat-nang-cao-cung-haketu?boxcode=new-views-vip",
  },
  {
    title: "Tự do tài chính cùng chứng khoán",
    author: "đặng trọng khang",
    rootPrice: 600,
    salePrice: 399,
    image: "./images/slider2_9.jpg",
    link: "https://unica.vn/tu-do-tai-chinh-cung-chung-khoan?boxcode=new-views-vip",
  },
];

let dcSlider2 = document.getElementById("slider2");

let j = 0;
while (j < slicker2.length / 3) {
  let dcItem = document.createElement("div");
  dcItem.className = "dc-item";
  dcSlider2.appendChild(dcItem);
  j++;
}

j = 0;
let cout2 = 0;

slicker2.forEach((item, index) => {
  if (cout2 == 3) {
    j++;
    cout2 = 0;
  }
  let product = document.createElement("a");
  product.className = "dc-course";
  product.href = item.link;
  product.innerHTML = `
    <img src="${item.image}" alt="" class="dc-image">
    <div class="dc-detail">
    <h5 class="dc-title">${item.title}</h5>
    <p class="dc-author">${item.author}</p>
    <div class="dc-price">
      <p class="dc-root">${item.rootPrice}.000đ</p>
      <p class="dc-sale">${item.salePrice}.000đ</p>
    </div>
  </div>`;
  dcSlider2.children[j].appendChild(product);
  cout2++;
});
