//메뉴 버튼 구간

const modal = document.getElementById("modalDis");
const barIcon = document.getElementById("icon");
const menuin = document.getElementById("menuIn");
const menuout = document.getElementById("menuOut");

menuin.addEventListener("click", () => {
  modal.style.display = "block";
  barIcon.classList.remove("menucircle1"),
    void barIcon.offsetWidth,
    barIcon.classList.add("menucircle1");

  modal.classList.remove("menuUnAnimated"),
    void modal.offsetWidth;

  setTimeout(function () {
    barIcon.className = "fa-thin fa-xmark";
  }, 200);
});

menuout.addEventListener("click", () => {

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

});


//슬라이더 구간
const btn = document.querySelectorAll("button");
let slider = document.getElementById("slider");
let innerSlider = document.querySelector(".slider-inner");
const box = document.querySelectorAll(".box");
let count = -1;
let slidenmoved = true;
const slideNum = document.querySelectorAll(".slider-number i");

setInterval(function () {
  if (count == 0) {
    slideNum[count].style.color = "white";
    slideNum[7].style.color = "rgb(49, 83, 145)";
  } else if (count == 7) {
    slideNum[count].style.color = "white";
    slideNum[count - 1].style.color = "rgb(49, 83, 145)";
  } else if (count <= 6) {
    slideNum[count].style.color = "white";
    slideNum[count - 1].style.color = "rgb(49, 83, 145)";
  }
});


//오른쪽 버튼 클릭시 한칸 넘어감
btn[0].addEventListener("click", () => {
  slidenmoved = false;
  setTimeout(function () {
    slidenmoved = true;
  }, 3000);
  if (count <= box.length - 2) {
    count++;
    innerSlider.appendChild(box[count]);
  } else if (count == box.length - 1) {
    innerSlider.appendChild(box[0]);
    count = 0;
  };
});

//왼쪽 버튼 클릭시 한칸 뒤로감
btn[1].addEventListener("click", () => {
  slidenmoved = false;
  setTimeout(function () {
    slidenmoved = true;
  }, 3000);
  if (count > -1) {
    innerSlider.prepend(box[count]);
    return count = count - 1;
  } else if (count == -1) {
    innerSlider.prepend(box[box.length - 1]);
    return count = box.length - 2;
  };
});

//버튼 클릭을 안해도 4초마다 한칸씩 움직임
//만약 이동 버튼 클릭시 7초뒤에 실행
setInterval(function () {
  if (slidenmoved == true) {
    if (count <= box.length - 2) {
      count++;
      innerSlider.appendChild(box[count]);
    } else if (count == box.length - 1) {
      innerSlider.appendChild(box[0]);
      count = 0;
    }
  }
}, 4000);