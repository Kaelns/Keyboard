export default class CreateKeyboard {
  constructor(rows) {
    this.rows = rows;
  }

  generateKeyboard() {
    let template = '';
    const keyboard = document.createElement('div');
    keyboard.id = 'board';

    Object.keys(this.rows).forEach((row) => {
      template += '<div class="row">';

      this.rows[row].forEach(({
        elEng, classes, dataCode, elRus,
      }) => {
        if (elEng !== 'arrows') {
          template += `<button type="button" class="${classes.join(
            ' ',
          )}" data-code="${dataCode}" data-cache="${elRus || null}">${elEng} </button>`;
        } else {
          template += `<div class="arrows">
          <div class="row">
            <button type="button" class="arrow arrow_up" data-code="ArrowUp"></button>
          </div>
          <div class="row">
          <button type="button" class="arrow arrow_left" data-code="ArrowLeft"></button>
          <button type="button" class="arrow arrow_down" data-code="ArrowDown"></button>
            <button type="button" class="arrow arrow_right" data-code="ArrowRight"></button>
          </div>
        </div>`;
        }
      });

      template += '</div>';
    });

    keyboard.innerHTML = template;
    return keyboard;
  }
}
