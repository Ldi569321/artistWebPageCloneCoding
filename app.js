//메뉴 버튼 구간

const modal = document.getElementById("modalDis");
const barIcon = document.getElementById("icon");
const menuin = document.getElementById("menuIn");
const menuout = document.getElementById("menuOut");

function menuIn() {
  modal.style.display = "block";
  const target = barIcon;
  target.classList.remove("menucircle1"),
    void target.offsetWidth,
    target.classList.add("menucircle1");
  setTimeout(function () {
    barIcon.className = "fa-thin fa-xmark";
  }, 200);
};

function menuOut() {
  setTimeout;
  modal.style.display = "none";
  const target = barIcon;
  target.classList.remove("menucircle2"),
    void target.offsetWidth,
    target.classList.add("menucircle2");
  setTimeout(function () {
    barIcon.className = "fa-thin fa-bars";
  }, 200);
};


menuin.addEventListener("click", menuIn);
menuout.addEventListener("click", menuOut);

//모달창 구간

function madalMenu() {

}