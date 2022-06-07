let navButton = document.querySelector("nav .btn input");
let newNav = document.getElementById("new-nav");

let rootEl = document.querySelector(':root');
let servicesHead = document.querySelector(".services-head")
let scrollDownServices = document.querySelector(".services-head > .scroll-down")

// the nav button created for responsive
navButton.onclick = function () {
    newNav.classList.toggle("active");
    if (newNav.classList.contains("active")) {
      newNav.style.height = "200px";
    } else {
      newNav.style.height = "0px";
    }
  };
  
  // make the movement of the background line animation in services size dynamic according to the screen size 
  rootEl.style.setProperty('--animation_translate_1', document.body.offsetWidth * 0.05 + "px"); 
  rootEl.style.setProperty('--animation_translate_2', document.body.offsetWidth * 0.1 + "px"); 
  rootEl.style.setProperty('--animation_translate_3', document.body.offsetWidth * 0.11 + "px"); 
   
  window.addEventListener('resize', function(e){ 
    rootEl.style.setProperty('--animation_translate_1', document.body.offsetWidth * 0.05 + "px"); 
    rootEl.style.setProperty('--animation_translate_2', document.body.offsetWidth * 0.1 + "px"); 
    rootEl.style.setProperty('--animation_translate_3', document.body.offsetWidth * 0.11 + "px"); 
     
  });
  
  // scroll down button in the services page
  scrollDownServices.onclick = (e) => {
    window.scrollTo({
      top: servicesHead.offsetHeight,
      left: 0,
      behavior: "smooth"
    })
  }