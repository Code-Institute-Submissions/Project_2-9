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

  // Display a text node
Game.prototype.showTextNode = function (textNodeIndex) {
    // Find the text node with the specified index
    var textNode = textNodes.find(function (node) {
      return node.id === textNodeIndex;
    });

   // Update the story text content
  this.storyElement.textContent = textNode.text;
  // Add the "with-image" class to enable background image display
  this.backgroundElement.classList.add("with-image");
  // Set the background image based on the text node's image URL
  this.backgroundElement.style.backgroundImage = "url('" + textNode.img + "')";
  // Function to loop buttons for each option in the text node
  this.manageButtons(textNode.options);
};

// Function to manage and display buttons within the text nodes
Game.prototype.manageButtons = function (options) {
  // Clear existing buttons
  this.clearButtons();

  // Create buttons for each option
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    var button = this.createButton(option);
    this.buttonsContainerElement.appendChild(button);
  }
};

// Setting text, class, and click event handler
Game.prototype.createButton = function (option) {
  var button = document.createElement("button");
  button.innerText = option.text;
  button.className = "button";
  var self = this;
  button.onclick = function () {
    self.selectOption(option);
  };
  return button;
};

// Clear existing buttons
Game.prototype.clearButtons = function () {
  while (this.buttonsContainerElement.firstChild) {
    this.buttonsContainerElement.removeChild(this.buttonsContainerElement.firstChild);
  }
};

// Handle option selection
Game.prototype.selectOption = function (option) {
  if (option.action === "link") {
    window.open(option.linkUrl, "_blank");
    return;
  }

  var nextTextNodeId = option.nextText;

  if (option.action === "") {
    console.log("");
  } else {
    // Display the next text node based on the chosen option
    this.showTextNode(nextTextNodeId);
  }
};


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