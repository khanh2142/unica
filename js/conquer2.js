const conquer2 = [
  {
    background: "./images/conquer3.jpg",
    image: "./images/conquerIcon3.png",
    title: "Combo kế toán misa excel",
    course: 2,
    color: "#f26522",
    link: "https://unica.vn/hocketoan.unica.vn?boxcode=combo-home",
  },
  {
    background: "./images/conquer4.jpg",
    image: "./images/conquerIcon4.png",
    title: "Giảm eo giữ dáng với Yoga",
    course: 2,
    color: "#9e0b0f",
    link: "http://yoganguyenhieu.unica.vn/?boxcode=combo-home",
  },
  {
    background: "./images/conquer5.jpg",
    image: "./images/conquerIcon5.png",
    title: "Tự tin giao tiếp tiếng Anh",
    course: 3,
    color: "#2e3192",
    link: "http://combotienganhgiaotiep.unica.vn/?boxcode=combo-home",
  },
];

let conquerContainer2 = document.getElementById("conquer-second");

conquer2.forEach((item) => {
  let product = document.createElement("a");
  product.className = "conquer-container";
  product.href = item.link;
  product.style.backgroundImage = `url(${item.background})`;
  product.style.width = "32%";
  product.style.height = "175px";
  product.innerHTML = `              
    <div class="conquer-item">
    <div class="conquer-icon" style="background-color : ${item.color}">
      <img
        src="${item.image}"
        alt=""
        class="conquer-image"
      />
    </div>
    <div class="conquer-content">
      <p class="conquer-title">${item.title}</p>
      <p class="conquer-course">${item.course} khóa</p>
    </div>
  </div>`;
  conquerContainer2.appendChild(product);
});
