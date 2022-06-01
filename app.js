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