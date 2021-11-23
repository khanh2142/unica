const footer1 = [
  {
    icon: `<i class="fas fa-map-marker-alt"></i>`,
    content: "Nam Từ Liêm, Hà Nội",
  },
  {
    icon: `<i class="fas fa-map-marker-alt"></i>`,
    content: "Sông Lô, Vĩnh Phúc",
  },
  {
    icon: `<i class="fas fa-phone-alt"></i>`,
    content: "0369 698 501",
  },
  {
    icon: `<i class="fas fa-envelope"></i>`,
    content: "k2142a@gmail.com",
  },
  {
    icon: `<i class="fab fa-github"></i>`,
    content: "github.com/khanh2142",
  },
  {
    icon: `<i class="fas fa-clock"></i>`,
    content: "8:00 - 22:00",
  },
];

let footerContainer1 = document.getElementById("footer1");

footer1.forEach((item) => {
  let footer = document.createElement("div");
  footer.className = "footer-item";
  footer.innerHTML = `<div class="footer-icon">
  ${item.icon}
</div>
<p class="footer-content">${item.content}</p>
  `;
  footerContainer1.appendChild(footer);
});
