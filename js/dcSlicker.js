const slicker1 = [
  {
    title: "Nhập môn tìm hiểu thêm thị trường chứng khoán",
    author: "tâm hợp phát",
    rootPrice: 700,
    salePrice: 299,
    image: "./images/slider1_1.png",
    link: "https://unica.vn/nhap-mon-tim-hieu-va-tham-gia-thi-truong-chung-khoan",
  },
  {
    title: "Học Autocad 2D trong 15 ngày",
    author: "nguyễn phúc anh",
    rootPrice: 599,
    salePrice: 499,
    image: "./images/slider1_2.png",
    link: "https://unica.vn/khoa-hoc-autocad-2d-tu-co-ban-den-nang-cao",
  },
  {
    title: "Làm chủ Canva.com cơ bản và nâng cao",
    author: "nguyễn thành thơ",
    rootPrice: 999,
    salePrice: 299,
    image: "./images/slider1_3.png",
    link: "https://unica.vn/lam-chu-canva-com-co-ban-va-nang-cao",
  },
  {
    title: "Nhân tướng học trong giao tiếp và quản trị nhân sự",
    author: "phan văn trường",
    rootPrice: 799,
    salePrice: 499,
    image: "./images/slider1_4.png",
    link: "https://unica.vn/nhan-tuong-hoc-trong-giao-tiep-quan-tri-nhan-su",
  },
  {
    title: "Nhân tướng học ứng dụng",
    author: "phan văn trường",
    rootPrice: 999,
    salePrice: 399,
    image: "./images/slider1_5.png",
    link: "https://unica.vn/nhan-tuong-hoc",
  },
  {
    title: "Phong thủy giúp hưng phúc cho ngôi nhà bạn",
    author: "hoàng hà",
    rootPrice: 999,
    salePrice: 899,
    image: "./images/slider1_6.png",
    link: "https://unica.vn/phong-thuy-giup-hung-phuc-vuong-tai-cho-ngoi-nha-ban",
  },
];

let dcSlider = document.getElementById("slider1");

let numberOfItem = slicker1.length / 3;
let i = 0;
while (i < numberOfItem) {
  let dcItem = document.createElement("div");
  dcItem.className = "dc-item";
  dcSlider.appendChild(dcItem);
  i++;
}

i = 0;
let cout = 0;

slicker1.forEach((item, index) => {
  if (cout == 3) {
    i++;
    cout = 0;
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
  dcSlider.children[i].appendChild(product);
  cout++;
});
