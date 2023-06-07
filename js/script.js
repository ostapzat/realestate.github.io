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

