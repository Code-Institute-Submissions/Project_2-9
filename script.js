// Initialize the game
Game.prototype.initialize = function () {
    // Start the game by displaying the first text node
    this.showTextNode(1);
  };

  // Create an instance of the Game class
var game = new Game();
// Initialize the game when the window loads
window.onload = function () {
  game.initialize();
};

function Game() {
    // Get references to DOM elements
    this.storyElement = document.querySelector("#story");
    this.buttonsContainerElement = document.querySelector("#buttons-container");
    this.backgroundElement = document.querySelector("#background");
  }

// Text Nodes starting here

const textNodes = [

    // Story Forward
    {
      id: 1,
      text: "Are you ready to save the world?",
      img: "./assets/title_screen.png",
      options: [
        {
          text: "PLAY",
          nextText: 2,
        },
      ],
    },
]