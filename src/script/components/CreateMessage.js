export default class CreateMessage {
  constructor(arrOfMessages) {
    this.arrOfMessages = arrOfMessages;
  }

  generateMessage() {
    const messageContainer = document.createDocumentFragment();

    this.arrOfMessages.forEach((element) => {
      const message = document.createElement('p');
      message.className = 'message';

      message.innerHTML = element;
      messageContainer.append(message);
    });

    return messageContainer;
  }
}
