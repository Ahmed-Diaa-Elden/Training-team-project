let servicesBackgroundImgs = document.querySelectorAll(".services .image");
let aboutUsSection = document.querySelector(".about");
let navButton = document.querySelector("nav .btn input");
let newNav = document.getElementById("new-nav");
let rootEl = document.querySelector(':root');
let servicesHead = document.querySelector(".services-head")
let scrollDownServices = document.querySelector(".services-head > .scroll-down")

window.onscroll = () => {
  if (window.scrollY >= aboutUsSection.offsetHeight) {
    servicesBackgroundImgs.forEach((e) => {
      e.classList.add("image-animation");
    });
  }
};
// the nav button created for responsive
navButton.onclick = function () {
  newNav.classList.toggle("active");
  if (newNav.classList.contains("active")) {
    newNav.style.height = "200px";
  } else {
    newNav.style.height = "0px";
  }
};

