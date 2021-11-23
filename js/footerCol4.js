const footer4 = [
  {
    image: "./images/download1.png",
    link: "https://itunes.apple.com/us/app/unica-online-learning/id1230853725?ls=1&mt=8",
  },
  {
    image: "./images/download2.png",
    link: "https://play.google.com/store/apps/details?id=com.inet.Learning",
  },
];

let footerContainer4 = document.getElementById("footer4");

footer4.forEach((item) => {
  let footer = document.createElement("a");
  footer.className = "footer-download";
  footer.href = item.link;
  footer.innerHTML = `
  <img src="${item.image}" alt="" />
  `;
  footerContainer4.appendChild(footer);
});

let footerContainer5 = document.getElementById("footer5");

const footer5 = [
  {
    image: `<i class="fab fa-facebook-f"></i>`,
    color: "#3b5998",
    link: "https://www.facebook.com/Unica.vn",
  },
  {
    image: `<i class="fab fa-youtube"></i>`,
    color: "#c22e2a",
    link: "https://www.youtube.com/channel/UCrQoGDajCBs91atwgV8H6gw",
  },
];

footer5.forEach((item) => {
  let ft = document.createElement("a");
  ft.href = item.link;
  ft.className = "social-item";
  ft.style.backgroundColor = item.color;
  ft.innerHTML = `${item.image}`;
  footerContainer5.appendChild(ft);
});
