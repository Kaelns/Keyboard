let isLinkClicked = true;
const TABLE_WINDOW_WIDTH = 768;
// let windowWidth = document.documentElement.clientWidth;

export function addListenerToBurgerBtn() {
  let html = document.querySelector("html");
  let burgerBtn = document.querySelector(".burger-menu");
  let blackout = document.querySelector(".blackout");
  let nav = document.querySelector("nav.nav");

  let toggleElem = [burgerBtn, blackout, nav];

  [burgerBtn, blackout].forEach((el) => {
    el.addEventListener("click", toggleBurgerStyles(toggleElem, html, nav));
  });
}

function toggleBurgerStyles(arr, html, nav) {
  const toggleStyles = () => {
    let windowWidth = document.documentElement.clientWidth;
    let nav = document.querySelector("nav.nav");

    arr.forEach((el) => {
      el.classList.toggle("_active");
    });

    html.classList.toggle("_no-scroll");

    if (isLinkClicked) {
      isLinkClicked = false;

      if (windowWidth < TABLE_WINDOW_WIDTH) {
        nav.addEventListener(
          "click",
          closeBurgerMenuClickingOnLink(nav, arr, html)
        );
      }
    }
  };

  return toggleStyles;
}

function closeBurgerMenuClickingOnLink(nav, toggleElem, html) {
  const closeBurger = (e) => {
    if (
      e.target.classList.contains("nav__link") ||
      e.target.classList.contains("logo__burger") ||
      e.target.classList.contains("logo__title") ||
      e.target.classList.contains("logo__subtitle")
    ) {
      isLinkClicked = true;
      toggleBurgerStyles(toggleElem, html)();
      nav.removeEventListener("click", closeBurger);
    }
  };

  return closeBurger;
}
