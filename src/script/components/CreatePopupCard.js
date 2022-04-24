export class CreatePopupCard {
  constructor({
    id,
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  // PopupCard generator
  generatePopupCard() {
    let template = "";
    let popupCard = document.createElement("div");
    popupCard.className = "popup__body";

    template += '<div class="popup__content">';
    // +1
    template += '<div class="popup-btn__wrapper">';
    template +=
      '<button class="popup__btn btn-round_transparent cross"></button>';
    template += "</div>";

    template += `<img class="popup__column_1" src="${this.img}" alt="dog"/>`;

    template += '<div class="popup__column_2">';
    // +2
    template += `<h3 class="popup__title modal-text">${this.name}</h3>`;
    template += `<h4 class="popup__subtitle modal-text">${this.type} - ${this.breed}</h4>`;
    template += '<h5 class="popup__text modal-text">';
    template += `${this.description}`;
    template += "</h5>";

    template += '<ul class="popup__list h5-modal">';
    // +3
    template +=
      '<li class="popup__parameter popup__parameter_1 parameter__wrapper">Age: ';
    template += `${this.age}`;

    template +=
      '<li class="popup__parameter popup__parameter_2 parameter__wrapper">Inoculations: ';
    template += `${this.inoculations.join(", ")}`;

    template +=
      '<li class="popup__parameter popup__parameter_3 parameter__wrapper">Diseases: ';
    template += `${this.diseases.join(", ")}`;

    template +=
      '<li class="popup__parameter popup__parameter_4 parameter__wrapper">Parasites: ';
    template += `${this.parasites.join(", ")}`;
    // template += `${...this.parasites}`;

    // +3
    template += "</ul>";

    // +2
    template += "</div>";

    // +1
    template += "</div>";

    popupCard.innerHTML = template;
    return popupCard;

    /* let template = ` <div class="popup__body">
    <div class="popup__content">
      <div class="popup-btn__wrapper">
        <button class="popup__btn btn-round_transparent cross"></button>
      </div>
      <img
        class="popup__column_1"
        src="${this.img}"
        alt="dog"
      />
      <div class="popup__column_2">
        <h3 class="popup__title modal-text">${this.name}</h3>
        <h4 class="popup__subtitle modal-text">${this.type} - ${this.breed}</h4>
        <h5 class="popup__text modal-text">
          ${this.description}
        </h5>
        <ul class="popup__list h5-modal">
          <li
            class="popup__parameter popup__parameter_1 parameter__wrapper"
          >
            Age:
            <h5 class="modal-text">${this.age}</h5>
          </li>
          <li
            class="popup__parameter popup__parameter_2 parameter__wrapper"
          >
            Inoculations:
            <h5 class="modal-text">${this.age}</h5>
          </li>
          <li
            class="popup__parameter popup__parameter_3 parameter__wrapper"
          >
            Diseases:
            <h5 class="modal-text">none</h5>
          </li>
          <li
            class="popup__parameter popup__parameter_4 parameter__wrapper"
          >
            Parasites:
            <h5 class="modal-text">none</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>`; */
  }
}
