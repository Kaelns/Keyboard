import JSON from '../../assets/keyboard.json';
import CreateKeyboard from './CreateKeyboard';

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

function createPage() {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'container';

  const textarea = createTextArea();
  const keyboard = new CreateKeyboard(JSON).generateKeyboard();

  container.append(textarea, keyboard);
  body.append(container);
}

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });

// eslint-disable-next-line import/prefer-default-export
export { createPage };
