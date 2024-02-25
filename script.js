let herosection = document.querySelector(".hero-section");
let cursoreffect = document.querySelector(".cursor-effect");

//using pure javascript

// herosection.addEventListener("mousemove", (e) => {
//   cursoreffect.style.left = e.x + "px";
//   cursoreffect.style.top = e.y + "px";
// });

//using gsap js
herosection.addEventListener("mousemove", (e) => {
  gsap.to(cursoreffect, {
    x: e.x,
    y: e.y,
  });
});
