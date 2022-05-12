import { createPage } from './script/components/Keyboard';
import './styles/style.scss';

let language;

function getLocalStorage() {
  if (localStorage.getItem('language') && localStorage.getItem('language') !== 'undefined') {
    language = localStorage.getItem('language');
  } else {
    language = 'en';
  }
}

getLocalStorage();

window.onload = function onload() {
  // alert("Hi guys, I'm a little late so give me one more day please");
  createPage(language);
};
