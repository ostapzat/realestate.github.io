const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
function toggleAccordion(element) {
  var accordionItem = element.parentNode;
  var accordionContent = accordionItem.querySelector(".accordion-content");
  accordionContent.classList.toggle("active");
}

// Отримуємо основний елемент сторінки
// Отримуємо основний елемент сторінки
var bodyElement = document.body;

// Встановлюємо overflow-x: hidden на елемент body
bodyElement.style.overflowX = "hidden";

// Функція, яка перевіряє розмір вікна та оновлює ширину сторінки
function updatePageWidth() {
  var windowWidth = window.innerWidth;
  mainElement.style.width = windowWidth + "px";
}

// Оновлюємо ширину сторінки при завантаженні та зміні розміру вікна
window.addEventListener("load", updatePageWidth);
window.addEventListener("resize", updatePageWidth);
