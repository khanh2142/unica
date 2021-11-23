const conquer = [
  {
    background: "./images/conquer1.png",
    image: "./images/conquerIcon1.png",
    title: "Đầu tư chứng khoán chuyên nghiệp Đặng Trọng Khang",
    course: 5,
    color: "#00aeef",
    link: "https://unica.vn/%C4%90%E1%BA%A7u%20t%C6%B0%20ch%E1%BB%A9ng%20kho%C3%A1n%20chuy%C3%AAn%20nghi%E1%BB%87p%20%C4%90%E1%BA%B7ng%20Tr%E1%BB%8Dng%20Khang?boxcode=combo-home",
  },
  {
    background: "./images/conquer2.png",
    image: "./images/conquerIcon2.png",
    title: "Combo marketing online",
    course: 6,
    color: "#3cb878",
    link: "http://marketing.unica.vn/?boxcode=combo-home",
  },
];

let conquerContainer = document.getElementById("conquer-first");

conquer.forEach((item) => {
  let product = document.createElement("a");
  product.className = "conquer-container";
  product.href = item.link;
  product.style.backgroundImage = `url(${item.background})`;
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
  conquerContainer.appendChild(product);
});
