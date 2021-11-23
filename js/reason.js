const reason = [
  {
    image: "./images/reason1.png",
    title: "Giảng viên uy tín",
    content: "Bài giảng chất lượng",
  },
  {
    image: "./images/reason2.png",
    title: "Thanh toán 1 lần",
    content: "Học mãi mãi",
  },
  {
    image: "./images/reason3.png",
    title: "Học trực tuyến",
    content: "Hỗ trợ trực tiếp",
  },
];

let reasonContainer = document.getElementById("reason-container");

reason.forEach((item) => {
  let product = document.createElement("div");
  product.className = "reason-item";
  product.innerHTML = `
  <div class="reason-image">
  <img src="${item.image}" alt="" />
</div>
<p class="reason-title">${item.title}</p>
<p class="reason-content">${item.content}</p>`;
  reasonContainer.appendChild(product);
});
