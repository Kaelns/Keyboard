export class CreateKeyboard {
  constructor(rows) {
    this.rows = rows;
  }

  generateKeyboard() {
    let template = "";
    let keyboard = document.createElement("div");
    keyboard.id = "board";

    for (let row in this.rows) {
      template += '<div class="row">';

      this.rows[row].forEach(({ elEng, classes, elRus }) => {
        if (elEng !== "arrows") {
          template += `<button type="button" class="${classes.join(
            " "
          )}" data-сache="${elRus ? elRus : null}">${elEng}</button>`;
        } else {
          template += `<div class="arrows">
          <div class="row">
            <button type="button" class="arrow arrow_up"></button>
          </div>
          <div class="row">
            <button type="button" class="arrow arrow_left"></button>
            <button type="button" class="arrow arrow_down"></button>
            <button type="button" class="arrow arrow_right"></button>
          </div>
        </div>`;
        }
      });

      template += "</div>";
    }

    keyboard.innerHTML = template;
    return keyboard;
  }
}
