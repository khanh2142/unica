const footer3 = [
  {
    content: "Đăng ký giảng viên",
    link: "https://unica.vn/teacher",
  },
  {
    content: "Giải pháp e-learning",
    link: "https://edubit.vn/?ref=unica",
  },
  {
    content: "Đào tạo doanh nghiệp",
    link: "https://acabiz.vn/?ref=unica",
  },
  {
    content: "Affiliate",
    link: "https://unica.vn/affiliate",
  },
  {
    content: "Agency",
    link: "https://unica.vn/agency",
  },
];

let footerContaienr3 = document.getElementById("footer3");

footer3.forEach((item) => {
  let footer = document.createElement("div");
  footer.className = "footer-item";
  footer.innerHTML = `
  <div class="footer-item">
  <a href="${item.link}" class="footer-content">${item.content}</a>
</div>`;
  footerContaienr3.appendChild(footer);
});
