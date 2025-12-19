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


  // 캐러셀

 const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const cards = document.querySelectorAll('.project-card');

const cardWidth = cards[0].offsetWidth + 20; // gap 포함
const visibleCount = 3;
const totalCount = cards.length;

let index = 0;
const maxIndex = totalCount - visibleCount;

// 👉 오른쪽 버튼
nextBtn.addEventListener('click', () => {
  if (index >= maxIndex) return;
  index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

// 👉 왼쪽 버튼
prevBtn.addEventListener('click', () => {
  if (index <= 0) return;
  index--;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});



