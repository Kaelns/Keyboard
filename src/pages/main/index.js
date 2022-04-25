import "../../styles/style.scss";
import { listenCardToCreatePopup } from "../../script/components/Popup";
import { addListenerToBurgerBtn } from "../../script/components/Burger";

window.onload = function () {
  // alert(
  //   "Hi, whoever you are, give me one more day because there's not much left)"
  // );
  addListenerToBurgerBtn();
  listenCardToCreatePopup();
};

// console.log(new CreatePopupCard(JSON[0]).generatePopupCard());
