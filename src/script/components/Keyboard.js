import JSON from "../../assets/keyboard.json";
import { CreateKeyboard } from "./CreateKeyboard";

function createPage() {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.className = "container";

  let textarea = createTextArea();
  const keyboard = new CreateKeyboard(JSON).generateKeyboard();

  container.append(textarea, keyboard);
  body.append(container);
}

function createTextArea() {
  const textarea = document.createElement("textarea");
  textarea.id = "editable";
  textarea.className = "textarea";
  textarea.setAttribute(
    "placeholder",
    "Hi guys, I'm a little late so give me one more day please"
  );
  textarea.setAttribute("autofocus", "autofocus");

  return textarea;
}

// document.addEventListener('keydown')

export { createPage };
