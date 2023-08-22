import "./styles.scss";

document.querySelector("#app");

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".search__menu--single");
  const boxes = document.querySelectorAll(".dropdown__box");
  const searchBtn = document.querySelector(".search__btn--box");
  const searchBox = document.querySelector(".search__input");
  const main = document.querySelector(".main");
  const mobileMenu = document.querySelector(".header__mobile--btn");
  const headerMenu = document.querySelector(".header__navbar--menu");
  const searchMenu = document.querySelector(".search__menu");
  const searchClose = document.querySelector(".search__input--cross");

  function removeActiveClasses() {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    boxes.forEach((box) => {
      box.classList.remove("active");
    });
    main.classList.remove("overlay");
    // searchBox.classList.remove("active");
    searchMenu.classList.remove("hidden");
    // headerMenu.classList.remove("active");
  }

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      // Check if the clicked menu item is already active
      if (!menuItem.classList.contains("active")) {
        // Remove active classes from all menu items and boxes
        removeActiveClasses();

        // Add active class to the clicked menu item and corresponding box
        menuItem.classList.add("active");
        const correspondingBox = menuItem.querySelector(".dropdown__box");
        correspondingBox.classList.add("active");

        // Add overlay to main when a menu is open
        main.classList.add("overlay");
        searchBox.classList.remove("active");
      }
    });
  });

  searchBtn.addEventListener("click", () => {
    // Toggle the active class for the search button
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
      // Remove active classes from all menu items and boxes
      removeActiveClasses();

      // Add overlay to main when the search is open
      main.classList.add("overlay");
      searchMenu.classList.add("hidden");
    } else {
      // Remove overlay when the search is closed
      main.classList.remove("overlay");
    }
  });

  main.addEventListener("click", (event) => {
    if (!event.target.closest(".search__menu--single")) {
      removeActiveClasses();
      headerMenu.classList.remove("active");
    }
  });

  mobileMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    if (headerMenu.classList.contains("active")) {
      // Remove active classes from all menu items and boxes
      removeActiveClasses();

      // Add overlay to main when the mobile menu is open
      main.classList.add("overlay");
      searchBox.classList.remove("active");
    } else {
      // Remove overlay when the mobile menu is closed
      main.classList.remove("overlay");
    }
  });

  searchClose.addEventListener("click", () => {
    removeActiveClasses();
    searchBox.classList.remove("active");
  });
});
