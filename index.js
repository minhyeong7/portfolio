const buttons = document.querySelectorAll(".sidebar button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const section = document.getElementById(targetId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


const topButton = document.getElementById("topButton");

/* 스크롤 위치에 따라 Top 버튼 표시 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

/* Top 버튼 클릭 시 최상단 이동 */
topButton.addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
});




