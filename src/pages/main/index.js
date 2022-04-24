import "../../styles/style.scss";
// import JSON from "../../assets/pets.json";
import { listenCardToCreatePopup } from "../../script/components/Popup";

window.onload = function () {
  // alert(
  //   "Hi, whoever you are, give me one more day because there's not much left)"
  // );
  listenCardToCreatePopup();
};

// console.log(new CreatePopupCard(JSON[0]).generatePopupCard());
