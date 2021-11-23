const solution = [
  {
    image: "./images/solution1.jpg",
    title: "Edubit.vn - Ai cũng có thể dạy học online",
    content:
      "Giải pháp elearning giúp tại bài giảng, bài trắc nghiệm online chỉ với 1 click chuột",
    link: "https://edubit.vn/?ref=unica",
  },
  {
    image: "./images/solution2.jpg",
    title: "Acabiz - Giải pháp đào tạo nội bộ cho doanh nghiệp",
    content:
      "Nâng cao năng lực đội ngũ với nền tảng Acabiz và hơn 500 khoá học chọn lọc từ Unica",
    link: "https://acabiz.vn/?ref=unica",
  },
];

let solutionContainer = document.getElementById("solution-container");

solution.forEach((item) => {
  let product = document.createElement("a");
  product.href = item.link;
  product.className = "solution-item";
  product.innerHTML = `<div class="solution-image">
  <img src="${item.image}" alt="" />
</div>
<div class="solution-desc">
  <p class="solution-title">${item.title}</p>
  <p class="solution-content">${item.content}</p>
</div>
  `;
  solutionContainer.appendChild(product);
});
