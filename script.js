const menuBtn = document.getElementById("menuBtn");

const mobMenu = document.getElementById("mob-menu");
const menuClicked = () => {
  mobMenu.classList.toggle("show-hide");
};
menuBtn.addEventListener("click", menuClicked);
