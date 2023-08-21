import "./styles.scss";

document.querySelector("#app");

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".search__menu--single");
  const boxes = document.querySelectorAll(".dropdown__box");
  const searchBtn = document.querySelector(".search__btn--box");
  const searchBox = document.querySelector(".search__input");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      boxes.forEach((box) => {
        box.classList.remove("active");
      });

      menuItem.classList.add("active");
      const correspondingBox = menuItem.querySelector(".dropdown__box");
      correspondingBox.classList.add("active");
    });
  });

  searchBtn.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    boxes.forEach((box) => {
      box.classList.remove("active");
    });

    searchBtn.classList.add("active");
    searchBox.classList.add("active");
  });
});
