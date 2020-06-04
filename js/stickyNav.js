const menu = document.querySelector(".menuContainer");
const nav = document.querySelector(".static");
let position = 0;
let counter = 0;

document.addEventListener("scroll", () => {
  position = nav.getBoundingClientRect().top;
  if (position < 0) {
    counter = 1;
  } else {
    counter = 0;
  }
  console.log(counter, position, nav.getBoundingClientRect().top);
});
document.addEventListener("scroll", () => {
  if (counter == 1) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
});
