let currentPage = 0;

const pages = document.querySelectorAll(".page");
const pageCount = document.getElementById("pageCount");

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));

  pages.forEach((page, i) => {
    page.classList.toggle("active", i === currentPage);
  });

  pageCount.textContent = `PAGE ${String(currentPage + 1).padStart(2, "0")} / ${pages.length}`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changePage(direction) {
  showPage(currentPage + direction);
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") changePage(1);
  if (event.key === "ArrowLeft") changePage(-1);
});

showPage(0);
