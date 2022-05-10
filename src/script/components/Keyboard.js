/* eslint-disable no-multi-assign */
import JSON from '../../assets/keyboard.json';
import CreateKeyboard from './CreateKeyboard';

let lang;
let isEng;
let isCaps = false;
// eslint-disable-next-line prefer-const
let isShift = false;

const languageHandler = (event, isFirstTime) => {
  let further;
  let isRusInLocalStorage;

  if (isFirstTime) {
    isRusInLocalStorage = lang === 'ru';
  }

  if (event && event.altKey && event.ctrlKey) {
    lang = lang === 'en' ? 'ru' : 'en';
    isEng = lang === 'en';
    further = true;
  }
  if (isRusInLocalStorage || further) {
    const elementsToTranslate = document.querySelectorAll('[data-cache]');

    elementsToTranslate.forEach((el) => {
      const cache = el.dataset.cache;
      el.dataset.cache = el.innerHTML;
      el.innerHTML = cache;
    });

    further = false;
  }
};

const createTextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.id = 'editable';
  textarea.className = 'textarea';
  textarea.setAttribute(
    'placeholder',
    'All the keys that are not on the virtual keyboard are working',
  );
  textarea.setAttribute('autofocus', 'autofocus');

  return textarea;
};

const getPressedKey = (e, keyCode) => {
  const selector = `[data-code="${keyCode}"]`;

  const pressedKey = document.querySelector(selector);

  return pressedKey;
};

const capsLockHandler = () => {
  let chars;
  const charsEng = document.querySelectorAll('.char');

  if (lang === 'en') {
    chars = charsEng;
  } else {
    const charsRus = document.querySelectorAll('.char-ru');
    chars = [...charsEng, ...charsRus];
  }

  if (!isCaps) {
    chars.forEach((el) => {
      el.innerHTML = el.innerHTML.toUpperCase();
    });
    isCaps = true;
  } else {
    chars.forEach((el) => {
      el.innerHTML = el.innerHTML.toLowerCase();
    });
    isCaps = false;
  }
};

const sliceTextAreaInnerHTML = (str, index, isDel) => {
  let i = index - 1;
  const length = str.length;
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if ((i < 0 && !isDel) || (i + 1 === length && isDel)) {
    return null;
  }

  if (isDel) {
    i++;
  }

  return str.slice(0, i) + str.slice(i + 1);
};

const allClicksHandler = (keyCode, pressedKey, e) => {
  const textarea = document.querySelector('textarea');
  const position = textarea.selectionStart;
  const textareaLength = textarea.innerHTML.length;

  languageHandler(e, false);

  textarea.focus();

  switch (keyCode) {
    case 'CapsLock':
      if (e.repeat) return;
      pressedKey.classList.toggle('caps_active');
      capsLockHandler();
      break;
    case 'Enter':
      textarea.innerHTML += '\n';
      textarea.selectionStart = position + 1;
      break;
    case 'Space':
      textarea.innerHTML += ' ';
      textarea.selectionStart = position + 1;
      break;
    case 'Tab':
      textarea.innerHTML += '    ';
      textarea.selectionStart = position + 4;
      break;
    case 'ArrowLeft':
      textarea.selectionStart = textarea.selectionEnd = position - 1 < 0 ? 0 : position - 1;
      break;
    case 'ArrowRight':
      textarea.selectionStart = textarea.selectionEnd = position + 1 > textareaLength ? textareaLength : position + 1;
      break;
    case 'Delete':
      const sliceForDelete = sliceTextAreaInnerHTML(textarea.innerHTML, textarea.selectionStart, true);
      if (sliceForDelete !== null) {
        textarea.innerHTML = sliceForDelete;
        textarea.selectionStart = position;
      }
      break;
    case 'Backspace':
      const sliceForBackspace = sliceTextAreaInnerHTML(textarea.innerHTML, textarea.selectionStart, false);
      if (sliceForBackspace !== null) {
        textarea.innerHTML = sliceForBackspace;
        textarea.selectionStart = position - 1;
      }
      break;
    default:
      const includeRus = !isEng ? pressedKey.classList.contains('char-ru') : false;
      const includeEng = isEng ? pressedKey.classList.contains('char-ru') : false;

      if (pressedKey.classList.contains('char') || includeRus) {
        textarea.innerHTML += pressedKey.innerHTML.trim();
      } else if (pressedKey.classList.contains('double') || includeEng) {
        const [shiftSymbol, symbol] = pressedKey.innerHTML.split('<br>').map((el) => el.trim());
        textarea.innerHTML += isShift ? shiftSymbol : symbol;
      }
      textarea.selectionStart = position + 1;
  }
};

const createPage = (language) => {
  lang = language;
  isEng = lang === 'en';

  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'container';

  const textarea = createTextArea();
  const keyboard = new CreateKeyboard(JSON).generateKeyboard();

  container.append(textarea, keyboard);
  body.append(container);

  languageHandler(null, true);

  document.querySelector('#board').addEventListener('click', (e) => {
    const pressedKey = e.target;
    if (pressedKey.tagName.toLowerCase() === 'button') {
      const keyCode = pressedKey.dataset.code;
      allClicksHandler(keyCode, pressedKey, e);
    }
  });
};

// eslint-disable-next-line consistent-return
document.addEventListener('keydown', (e) => {
  const keyCode = e.code;
  const pressedKey = getPressedKey(e, keyCode);

  if (pressedKey) {
    e.preventDefault();
    pressedKey.classList.add('button_active');
  } else {
    // eslint-disable-next-line no-console
    return console.log('There is no such key on the virtual keyboard');
  }

  allClicksHandler(keyCode, pressedKey, e);
});

document.addEventListener('keyup', (e) => {
  const keyCode = e.code;
  const pressedKey = getPressedKey(e, keyCode);

  if (pressedKey) {
    pressedKey.classList.remove('button_active');
  }
});

function setLocalStorage() {
  localStorage.setItem('language', lang);
}

window.addEventListener('beforeunload', setLocalStorage);

// eslint-disable-next-line import/prefer-default-export
export { createPage };
