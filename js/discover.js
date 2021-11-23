const discoverList = [
  {
    title: "Ngoại ngữ",
    icon: `<i class="fas fa-language"></i>`,
    link: "https://unica.vn/course/ngoai-ngu?boxcode=category-home-suggest",
  },
  {
    title: "Marketing",
    icon: `<i class="fas fa-chart-line"></i>`,
    link: "https://unica.vn/course/marketing?boxcode=category-home-suggest",
  },
  {
    title: "Tin học văn phòng",
    icon: `<i class="fas fa-desktop"></i>`,
    link: "https://unica.vn/course/tin-hoc-van-phong?boxcode=category-home-suggest",
  },
  {
    title: "Thiết kế",
    icon: `<i class="fas fa-paint-brush"></i>`,
    link: "https://unica.vn/course/thiet-ke?boxcode=category-home-suggest",
  },
  {
    title: "Kinh doanh - Startup",
    icon: `<i class="fas fa-rocket"></i>`,
    link: "https://unica.vn/course/kinh-doanh-khoi-nghiep?boxcode=category-home-suggest",
  },
  {
    title: "Phát triển cá nhân",
    icon: `<i class="far fa-lightbulb"></i>`,
    link: "https://unica.vn/course/phat-trien-ca-nhan?boxcode=category-home-suggest",
  },
  {
    title: "Sales, bán hàng",
    icon: `<i class="fas fa-shopping-cart"></i>`,
    link: "https://unica.vn/course/sales-ban-hang?boxcode=category-home-suggest",
  },
  {
    title: "Công nghệ thông tin",
    icon: `<i class="fas fa-code"></i>`,
    link: "https://unica.vn/course/cong-nghe-thong-tin?boxcode=category-home-suggest",
  },
  {
    title: "Sức khỏe - Giới tính",
    icon: `<i class="fas fa-heartbeat"></i>`,
    link: "https://unica.vn/course/suc-khoe-gioi-tinh?boxcode=category-home-suggest",
  },
  {
    title: "Phong cách sống",
    icon: `<i class="fas fa-utensils"></i>`,
    link: "https://unica.vn/course/phong-cach-song?boxcode=category-home-suggest",
  },
  {
    title: "Nuôi dạy con",
    icon: `<i class="fas fa-child"></i>`,
    link: "https://unica.vn/course/nuoi-day-con?boxcode=category-home-suggest",
  },
  {
    title: "Hôn nhân & Gia đình",
    icon: `<i class="fas fa-users"></i>`,
    link: "https://unica.vn/course/hon-nhan-gia-dinh?boxcode=category-home-suggest",
  },
  //   {
  //     title: "Nhiếp ảnh, dựng phim",
  //     icon: `<i class="fas fa-camera"></i>`,
  //   },
];

let discoverContainer = document.getElementById("discover-list");

discoverList.forEach((item) => {
  let product = document.createElement("a");
  product.href = item.link;
  product.className = "discover-item";
  product.innerHTML = `              
  <div class="discover-icon">
  ${item.icon}
    </div>
    <p class="discover-title">${item.title}</p>`;
  discoverContainer.appendChild(product);
});
