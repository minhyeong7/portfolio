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

//  오른쪽 버튼
nextBtn.addEventListener('click', () => {
  if (index >= maxIndex) return;
  index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

//  왼쪽 버튼
prevBtn.addEventListener('click', () => {
  if (index <= 0) return;
  index--;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});


// 모달 열기
document.querySelectorAll(".openModal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal; // modal-roommind
    const modal = document.getElementById(modalId);

    if (!modal) return;

    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });
});

// 닫기 버튼
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal-overlay");
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  });
});

// 배경 클릭 시 닫기
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
});



// 해당섹션에 맞게 사이드바 활성화
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        buttons.forEach(btn => {
          btn.classList.toggle(
            'active',
            btn.dataset.target === id
          );
        });
      }
    });
  },
  {
    threshold: 0.6   // 섹션 60% 보이면 활성화
  }
);

sections.forEach(section => observer.observe(section));

