//메뉴 버튼 구간

const modal = document.getElementById("modalDis");
const barIcon = document.getElementById("icon");
const menuin = document.getElementById("menuIn");
const menuout = document.getElementById("menuOut");

function menuIn() {
  modal.style.display = "block";
  barIcon.classList.remove("menucircle1"),
    void barIcon.offsetWidth,
    barIcon.classList.add("menucircle1");

  modal.classList.remove("menuUnAnimated"),
    void modal.offsetWidth;

  setTimeout(function () {
    barIcon.className = "fa-thin fa-xmark";
  }, 200);
};

function menuOut() {

  void modal.offsetWidth;
  modal.classList.add("menuUnAnimated");
  setTimeout(function () {
    modal.style.display = "none";
  }, 400);
  barIcon.classList.remove("menucircle2"),
    void barIcon.offsetWidth,
    barIcon.classList.add("menucircle2");
  setTimeout(function () {
    barIcon.className = "fa-thin fa-bars";
  }, 200);

};


menuin.addEventListener("click", menuIn);
menuout.addEventListener("click", menuOut);

//슬라이더 구간
let slider = document.querySelector(".slider")
let banner1 = document.querySelector("#banner1");
let innerSlider = document.querySelector(".slider-inner")
let pressed = false
let startx
let x

slider.addEventListener("mousedown", e => {
  pressed = true
  startx = e.offsetX - innerSlider.offsetLeft
  slider.style.cursor = "pointer"
})

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "pointer"
})

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "pointer"
})

window.addEventListener("mouseup", () => {
  pressed = false
})

slider.addEventListener("mousemove", e => {
  if (!pressed) return
  e.preventDefault()
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`
  checkboundary()
})

function checkboundary() {
  let outer = slider.getBoundingClientRect()
  let inner = innerSlider.getBoundingClientRect()

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "-0px"
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`
  }
}

const rightClick = document.getElementById("btnRight");
const leftClick = document.getElementById("btnLeft");

let plus = 0;
let rightC = false;
function onclickRight() {
  if (plus < 3000) {
    plus += 300;
    innerSlider.style.left = `-${plus}px`;
    anima
  }
};
function onclickLeft() {
  if (plus > 0) {
    plus -= 300;
    innerSlider.style.left = `-${plus}px`;
  }
};

rightClick.addEventListener("click", onclickRight);
leftClick.addEventListener("click", onclickLeft);