/* eslint-disable no-multi-assign */
import JSON from '../../assets/keyboard.json';
import CreateKeyboard from './CreateKeyboard';

let lang;
let isEng;
let isCaps = false;
// eslint-disable-next-line prefer-const
let isShift = false;

function createTextArea() {
  const textarea = document.createElement('textarea');
  textarea.id = 'editable';
  textarea.className = 'textarea';
  textarea.setAttribute(
    'placeholder',
    "Hi guys, I'm a little late so give me one more day please",
  );
  textarea.setAttribute('autofocus', 'autofocus');

  return textarea;
}

function createPage(language) {
  lang = language;
  isEng = lang === 'en';

  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'container';

  const textarea = createTextArea();
  const keyboard = new CreateKeyboard(JSON).generateKeyboard();

  container.append(textarea, keyboard);
  body.append(container);

  return lang;
}

function getPressedKey(e, keyCode) {
  const selector = `[data-code="${keyCode}"]`;

  const pressedKey = document.querySelector(selector);

  return pressedKey;
}

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
      if (sliceForBackspace) {
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

document.addEventListener('keydown', (e) => {
  console.log(e);
  const keyCode = e.code;
  e.preventDefault();
  const pressedKey = getPressedKey(e, keyCode);

  if (pressedKey) {
    pressedKey.classList.add('button_active');
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

// eslint-disable-next-line import/prefer-default-export
export { createPage };
