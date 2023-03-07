let offset = 0;
const sliderImg = document.querySelector(".slider-image");
const infoTexts = document.querySelectorAll(".info-text");
const dots = document.querySelectorAll(".dot");
const barElems = document.querySelectorAll(".project-bar-element");
const infoProjects = [
  {
    city: "Rostov-on-Don<br /> LCD admiral",
    area: "81 m2",
    repairTime: "3.5 months",
    cost: "Upon request",
  },
  {
    city: "Sochi<br /> Thieves",
    area: "105 m2",
    repairTime: "4 months",
    cost: "Upon request",
  },
  {
    city: "Rostov-on-Don<br /> Patriotic",
    area: "93 m2",
    repairTime: "3 months",
    cost: "Upon request",
  },
];

function printInfo(pos) {
  const obj = infoProjects[pos];
  infoTexts[0].innerHTML = obj.city;
  infoTexts[1].innerHTML = obj.area;
  infoTexts[2].innerHTML = obj.repairTime;
  infoTexts[3].innerHTML = obj.cost;
}

function changeHTML(num) {
  sliderImg.style.left = num + "px";
  const pos = Math.abs(num / 679);
  printInfo(pos);
  barElems.forEach((el) => el.classList.remove("project-active"));
  barElems[pos].classList.add("project-active");
  dots.forEach((el) => el.classList.remove("dot-active"));
  dots[pos].classList.add("dot-active");
}

document.querySelector(".dot-prev").addEventListener("click", () => {
  offset += 679;
  if (offset > 0) offset = -1358;
  changeHTML(offset);
});

document.querySelector(".dot-next").addEventListener("click", () => {
  offset -= 679;
  if (offset < -1358) offset = 0;
  changeHTML(offset);
});

dots[0].addEventListener("click", () => {
  offset = 0;
  changeHTML(offset);
});
dots[1].addEventListener("click", () => {
  offset = -679;
  changeHTML(offset);
});
dots[2].addEventListener("click", () => {
  offset = -1358;
  changeHTML(offset);
});

barElems[0].addEventListener("click", () => {
  offset = 0;
  changeHTML(offset);
});
barElems[1].addEventListener("click", () => {
  offset = -679;
  changeHTML(offset);
});
barElems[2].addEventListener("click", () => {
  offset = -1358;
  changeHTML(offset);
});

document.getElementById("slider").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1299px)").matches) {
    offset -= 679;
    if (offset < -1358) offset = 0;
    changeHTML(offset);
  }
});
