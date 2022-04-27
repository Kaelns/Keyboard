export class CreateCard {
  constructor({ id, name, img, ...rest }) {
    this.id = id;
    this.name = name;
    this.img = img;
  }

  // Card generator
  generateCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "slider__slide";
    card.dataset.id = this.id;

    template += '<div class="slide-img__container">';
    template += `<img class="slide__img" src="${this.img}" alt="dog"/>`;
    template += "</div>";

    template += ` <h4 class="slide__title">${this.name}</h4>`;
    template +=
      '<button class="slide__btn btn-oval_transparent">Learn more</button>';

    card.innerHTML = template;
    return card;
  }
}
