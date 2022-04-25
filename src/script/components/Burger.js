let isLinkClicked = true;

export function addListenerToBurgerBtn() {
  let html = document.querySelector("html");
  let burgerBtn = document.querySelector(".burger-menu");
  let blackout = document.querySelector(".blackout");
  let nav = document.querySelector(".nav");

  let toggleElem = [burgerBtn, blackout, nav];

  [burgerBtn, blackout].forEach((el) => {
    el.addEventListener("click", toggleBurgerStyles(toggleElem, html, nav));
  });
}

function toggleBurgerStyles(arr, html, nav) {
  const toggleStyles = () => {
    arr.forEach((el) => {
      el.classList.toggle("_active");
    });

    html.classList.toggle("_no-scroll");

    if (isLinkClicked) {
      isLinkClicked = false;

      nav.addEventListener(
        "click",
        closeBurgerMenuClickingOnLink(nav, arr, html)
      );
    }
  };

  return toggleStyles;
}

function closeBurgerMenuClickingOnLink(nav, toggleElem, html) {
  const closeBurger = (e) => {
    if (e.target.classList.contains("nav__link")) {
      isLinkClicked = true;
      toggleBurgerStyles(toggleElem, html)();
      nav.removeEventListener("click", closeBurger);
    }
  };

  return closeBurger;
}
