const slicker3 = [
  {
    title: "30 Tuyệt chiêu gia tăng nhanh doanh số",
    author: "phạm thành long",
    rootPrice: 2999,
    salePrice: 1299,
    image: "./images/slider3_1.jpg",
    link: "https://unica.vn/30-tuyet-chieu-gia-tang-doanh-so?boxcode=new-views-vip",
  },
  {
    title: "Money Counts Live",
    author: "phạm thành long",
    rootPrice: 3000,
    salePrice: 1299,
    image: "./images/slider3_2.jpg",
    link: "https://unica.vn/money-counts-live?boxcode=new-views-vip",
  },
  {
    title: "Kinh doanh đột phá",
    author: "phạm thành long",
    rootPrice: 1678,
    salePrice: 1010,
    image: "./images/slider3_3.jpg",
    link: "https://unica.vn/kinh-doanh-dot-pha?boxcode=new-views-vip",
  },
  {
    title: "Quản trị cảm xúc",
    author: "phạm thành long",
    rootPrice: 2000,
    salePrice: 1299,
    image: "./images/slider3_4.jpg",
    link: "https://unica.vn/quan-tri-cam-xuc?boxcode=new-views-vip",
  },
  {
    title: "Tuyệt chiêu đàm phán",
    author: "phạm thành long",
    rootPrice: 2000,
    salePrice: 1200,
    image: "./images/slider3_5.jpg",
    link: "https://unica.vn/tuyet-chieu-dam-phan?boxcode=new-views-vip",
  },
  {
    title: "Trở thành bậc thầy bán hàng",
    author: "nguyễn ngọc huy",
    rootPrice: "2.000",
    salePrice: "1.200",
    image: "./images/slider3_6.jpg",
    link: "https://unica.vn/tro-thanh-bac-thay-ban-hang?boxcode=new-views-vip",
  },
];

let dcSlider3 = document.getElementById("slider3");

let k = 0;
while (k < slicker3.length / 3) {
  let dcItem = document.createElement("div");
  dcItem.className = "dc-item";
  dcSlider3.appendChild(dcItem);
  k++;
}

k = 0;
let cout3 = 0;

slicker3.forEach((item, index) => {
  if (cout3 == 3) {
    k++;
    cout3 = 0;
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
      <p class="dc-root">${divideNum(item.rootPrice)}.000đ</p>
      <p class="dc-sale">${divideNum(item.salePrice)}.000đ</p>
    </div>
  </div>`;
  dcSlider3.children[k].appendChild(product);
  cout3++;
});
