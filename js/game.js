const textElement = document.getElementById('message');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
  state = {}; // make sure the state is empty
  showTextNode(1); // loads the first text node
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); // finds the object with the id given
  textElement.innerText = textNode.text; // uses the text from the found object

  // removes all options
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  // adds all options available from the text node object 
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNode = option.nextText;
  if (nextTextNode <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNode);
}

startGame()