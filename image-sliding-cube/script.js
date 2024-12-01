let cube = document.querySelector(".img_cube");
let btnNext = document.querySelector("#next");
let btnPrev = document.querySelector("#pre");

let pos = 0;

btnNext.addEventListener("click", function () {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", function () {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
