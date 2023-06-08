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

jQuery(document).ready(function ($) {
  $(".regular").slick({
    dots: true,
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    // autoplay: true,
    //       arrows: true,
    //       mobileFirst: true,
    //       easing: 'easeOutElastic',
    //       speed: 800,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 700,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    respondTo: "min",
    cssEase: "linear",
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>',
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>',
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});

$(() => {
  var $sendBtn = $(".send-button"),
    $iWrapper = $(".icon-wrapper"),
    $i1 = $(".icon-1"),
    $i2 = $(".icon-2");

  function animationEvent() {
    var t,
      el = document.createElement("fakeelement");

    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  $sendBtn.on("click", (e) => {
    $iWrapper.css("color", "#66bb6a");
    $iWrapper.addClass("icon-wrapper-animation");
    $sendBtn.addClass("clicked");
    $i1.delay(900);
    $i1.fadeTo(300, 0);
    $i2.delay(900);
    $i2.fadeTo(300, 1);
  });

  $sendBtn.on(animationEvent(), (e) => {
    if (e.originalEvent.animationName == "input-shadow") {
      $sendBtn.removeClass("clicked");
    }
  });

  $iWrapper.on(animationEvent(), (e) => {
    if (e.originalEvent.animationName == "icon-animation") {
      $iWrapper.removeClass("icon-wrapper-animation");
      setTimeout(reset, 1200);
    }
  });

  function reset() {
    $i1.fadeTo(250, 1);
    $i2.fadeTo(250, 0);
    $iWrapper.css("color", "#f8bbd0");
  }
}); // end of document ready
