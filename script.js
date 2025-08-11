// Hiệu ứng chữ gõ
const typingText = ["Frontend Developer", "UI/UX Designer", "Freelancer"];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  let currentText = typingText[i];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % typingText.length;
      setTimeout(type, 500);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Parallax background
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-speed]").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    layer.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
