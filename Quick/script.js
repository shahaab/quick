//1. Header>Navbar>for mobile device expanding MENU section
//STARTS HERE!!!!
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
//1. Header>Navbar>for mobile device expanding MENU section
//ENDS HERE


// num increase

//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 0, 1, 1000);
  counterAnim("#count2", 0, 2, 1500);
  counterAnim("#count3", 0, 12, 2000);
  counterAnim("#count4", 0, 20, 2500);
});


