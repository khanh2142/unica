const teacher = [
  {
    image: "./images/teacher1.jpg",
    name: "Thầy Thẩm Dương",
    content:
      "Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....",
    link: "https://unica.vn/teacher/ts-le-tham-duong?boxcode=aff-teacher-home",
  },
  {
    image: "./images/teacher2.jpg",
    name: "Phạm Thành Long",
    content: "Luật sư - Diễn giả",
    link: "https://unica.vn/teacher/pham-thanh-long?boxcode=aff-teacher-home",
  },
  {
    image: "./images/teacher3.jpg",
    name: "Nguyễn Hiếu Yoga",
    content: "Đại sứ Yoga Việt Nam - CEO Zenlife Yoga",
    link: "https://unica.vn/teacher/nguyen-hieu?boxcode=aff-teacher-home",
  },
  {
    image: "./images/teacher4.jpg",
    name: "Huy Quần Hoa",
    content: "Giảng viên Photoshop",
    link: "https://unica.vn/teacher/mai-xuan-huy-huy-quan-hoa?boxcode=aff-teacher-home",
  },
  {
    image: "./images/teacher5.jpg",
    name: "Phùng Phong",
    content:
      "Kỷ lục gia Siêu trí nhớ Thế giới - Chủ tịch Tổ chức Trí nhớ Việt Nam",
    link: "https://unica.vn/teacher/nguyen-phung-phong?boxcode=aff-teacher-home",
  },
];

let teacherContainer = document.getElementById("teacher-container");

teacher.forEach((item) => {
  let product = document.createElement("a");
  product.href = item.link;
  product.className = "teacher-item";
  product.innerHTML = `
  <div class="teacher-avatar"> 
  <div class="teacher-image" style="background-image: url(${item.image})"></div>
  </div>
  <div class="teacher-desc">
<div class="teacher-name">${item.name}</div>
<div class="teacher-job">${item.content}</div>
</div>`;
  teacherContainer.appendChild(product);
});
