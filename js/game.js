const textElement = document.getElementById( 'message' );
const optionButtonsElement = document.getElementById( 'option-buttons' );

let state = {}

function startGame() {
  state = {}
  showTextNode( 1 )
}

function showTextNode( textNodeIndex ) {
  const textNode = textNodes.find( textNode => textNode.id === textNodeIndex )
  textElement.innerText = textNode.text
}

function showOption( option ) {

}

function selectOption( option ) {

}

startGame()