/* ===== 滚动淡入动画 ===== */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

/* ===== 婚礼倒计时 ===== */
/* ⚠️ 改成你的婚礼时间 */
const weddingTime = new Date("2026-02-18T18:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingTime - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor(diff / (1000 * 60 * 60)) % 24;

  document.getElementById("minutes").innerText =
    Math.floor(diff / (1000 * 60)) % 60;

  document.getElementById("seconds").innerText =
    Math.floor(diff / 1000) % 60;
}

setInterval(updateCountdown, 1000);
updateCountdown();
