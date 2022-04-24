import "../../styles/style.scss";
import JSON from "../../assets/pets.json";
import { CreatePopupCard } from "../../script/components/CreatePopupCard";

window.onload = function () {
  // alert(
  //   "Hi, whoever you are, give me one more day because there's not much left)"
  // );
};

console.log(new CreatePopupCard(JSON[0]).generatePopupCard());
