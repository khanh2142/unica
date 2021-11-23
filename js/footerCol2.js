const footer2 = [
  {
    content: "Giới thiệu về Unica",
    link: "https://unica.vn/gioi-thieu",
  },
  {
    content: "Câu hỏi thường gặp",
    link: "https://unica.vn/faq",
  },
  {
    content: "Điều khoản dịch vụ",
    link: "https://unica.vn/dieu-khoan-dich-vu.html",
  },
  {
    content: "Hướng dẫn thanh toán",
    link: "https://unica.vn/huong-dan-thanh-toan.html",
  },
  {
    content: "Kích hoạt khóa học",
    link: "https://unica.vn/kichhoat",
  },
  {
    content: "Góc chia sẻ",
    link: "https://unica.vn/blog",
  },
  {
    content: "Chính sách bảo mật",
    link: "https://unica.vn/chinh-sach-bao-mat.html",
  },
];

let footerContaienr2 = document.getElementById("footer2");

footer2.forEach((item) => {
  let footer = document.createElement("div");
  footer.className = "footer-item";
  footer.innerHTML = `
  <div class="footer-item">
  <a href="${item.link}" class="footer-content">${item.content}</a>
</div>`;
  footerContaienr2.appendChild(footer);
});
