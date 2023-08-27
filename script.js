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
    this.storyElement = document.querySelector("#story-text");
    this.inputContainerElement = document.querySelector("#input-container");
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
  this.backgroundElement.src = textNode.img;
  // Function to display input field for options
  this.manageInput(textNode.options);
};

// Function to manage and display input field for options
Game.prototype.manageInput = function (options) {
  // Clear existing input field
  this.clearInput();

  // Create input field for options
  const input = document.createElement("input");
    // Set placeholder text
    input.placeholder = "Enter your choice...";
    // Set class for styling
  input.className = "input";
    // Append the input element to the input container
    this.inputContainerElement.appendChild(input);
    // Create a new button element
  const submitButton = document.createElement("button");
    // Set the button text
    submitButton.innerText = "Submit";
    // Set class for styling
  submitButton.className = "submit-button";
  const self = this;
  // Handle submit button click event
submitButton.onclick = function () {
  const userInput = input.value.trim().toLowerCase();
    // Find the option with matching user input
    const option = options.find(opt => opt.text.toLowerCase() === userInput);
    if (option) {
      // Show the next text node based on the option's nextText ID
      self.showTextNode(option.nextText);
    } else {
      // Show error message if the user input doesn't match any option
      self.showError("You typed something wrong. Please follow the instructions of the storyline.");
    }
  };
    this.inputContainerElement.appendChild(submitButton);
  };

  // Clear existing input field
Game.prototype.clearInput = function () {
  while (this.inputContainerElement.firstChild) {
    this.inputContainerElement.removeChild(this.inputContainerElement.firstChild);
  }
};

// Function to show error message
Game.prototype.showError = function (message) {
    // Clear existing error message
    this.clearError();

  // Create error message element
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  
    // Append error message element to the input container
    this.inputContainerElement.appendChild(errorElement);
  };

  // Function to clear error message
Game.prototype.clearError = function () {
  const errorElement = this.inputContainerElement.querySelector(".error-message");
  if (errorElement) {
    this.inputContainerElement.removeChild(errorElement);
  }
};

// Text Nodes starting here
const textNodes = [

    // Story Forward
    {
      id: 1,
      text: "Are you ready to save the world? Type: # Play # for start playing.",
      img: "./assets/title_screen.png",
      options: [
        {
          text: "Play",
          nextText: 2,
        },
      ],
    },
    {
      id: 2,
      text: "After the world ran out of natural resources, it became chaos. It takes a super heroine to save humanity. It is Phosphorus Woman. She must defeat the Uranium Emperor. Type: # Jump # for jump and search for the Uranium Emperor or type: # Home # for better not to jump.",
      img: "./assets/beginning1.png",
      options: [
        {
          text: "Jump",
          nextText: 3,
        },
        {
          text: "Home",
          nextText: 600,
        },
      ],
    },
    {
      id: 3,
      text: "Phosphorus Woman swung up on her motorcycle and set on her way. The Uranium Emperor is already preparing for her. Are you ready to save the world? Type: # Fight # for let's fight! Or type: # Unsure # for unsure, I am scared.",
      img: "./assets/motorbike2.png",
      options: [
        {
          text: "Fight",
          nextText: 4,
        },
        {
          text: "Unsure",
          nextText: 601,
        },
      ],
    },
    {
      id: 4,
      text: "The Uranium Emperor is already expecting you. Type: # Eye contact # for looking deep into the eyes of the Uranium Emperor. Or type: # Fear # for better to go home.",
      img: "./assets/imperator3.png",
      options: [
        {
          text: "Eye contact",
          nextText: 5,
        },
        {
          text: "Fear",
          nextText: 602,
        },
      ],
    },
    {
      id: 5,
      text: "The final battle to save humanity is at hand. You look deep into the eyes of the Uranium Emperor. You will rescue the world. You just have to want to. Type: # Sword # for take out your sword! Or type: # Netflix # for Unsure, better watch Netflix.",
      img: "./assets/p_woman4.png",
      options: [
        {
          text: "Sword",
          nextText: 6, 
        },
        {
          text: "Netflix", // Link to GANE OVER Screen
          nextText: 666,
        },
      ],
    },
    {
      id: 6,
      text: "You hold your sword in your hand and you will defeat the Uranium Emperor. You are powerful. But still be careful. The Emperor is very clever... Type: # Attack # for attacking the Uranium Emperor or type: # Dodging # for a smart move like in the Matrix.",
      img: "./assets/sword.png",
      options: [
        {
          text: "Attack",
          nextText: 7,
        },
        {
          text: "Dodging",
          nextText: 603,
        },
      ],
    },
    {
      id: 7,
      text: "Great stuff! You hit the Uranium Emperor hard. Type: # Attack # for attacking the Uranium Emperor again or type: # Dodging # for a smart move like in the Matrix 4.",
      img: "./assets/attack1.png",
      options: [
        {
          text: "Attack",
          nextText: 8,
        },
        {
          text: "Dodging",
          nextText: 604,
        },
      ],
    },
    {
      id: 8,
      text: "Best attack ever! The Uranium Emperor will lose! Type: # One last hit # for your final attack.",
      img: "./assets/attack2.png",
      options: [
        {
          text: "One last hit",
          nextText: 9,
        },
      ],
    },
    {
      id: 9,
      text: "You have triumphed. The Uranium Emperor is now defeated. You are unkillable. Have you noticed that the only way to be GAME OVER is to start watching Netflix? Type: # Play again # if you want another walktrough.",
      img: "./assets/won.png",
      options: [
        {
          text: "Play again",
          nextText: 1,
        },
      ],
    },
  
    // GANE OVER Screen
    {
      id: 666,
      text: "GAME OVER! You cannot escape the Uranium Emperor. You can only defeat him. Type: # Try again # if you want another chance.",
      img: "./assets/game_over.png",
      options: [
        {
          text: "Try again",
          nextText: 1,
        },
      ],
    },
  
    // Story Backward
    {
      id: 600,
      text: "You are a super heroine. You are not scared. Jump and save the world! Type: # Move forward # because you have to go and move forward. It's your job!",
      img: "./assets/not_jump.png",
      options: [
        {
          text: "Move forward",
          nextText: 3,
        },
      ],
    },
    {
      id: 601,
      text: "Phosphorus Woman is in her secret underground cave. Her decision is made. The entire world must be rescued. Type: # Move forward # because you have to go and move forward. It's your job!",
      img: "./assets/cave.png",
      options: [
        {
          text: "Move forward",
          nextText: 4,
        },
      ],
    },
    {
      id: 602,
      text: "Being at home in the cave does not keep you happy. You have to save the world. Type: # Move forward # because you have to go and move forward. It's your job!",
      img: "./assets/underground.png",
      options: [
        {
          text: "Move forward",
          nextText: 5,
        },
      ],
    },
    {
      id: 603,
      text: "Perfect. The Uranium Emperor could not hit you. Type: # Attack # to make an attack stronger then Arnold Schwarzenegger.",
      img: "./assets/dodging1.png",
      options: [
        {
          text: "Attack",
          nextText: 7,
        },
      ],
    },
    {
      id: 604,
      text: "Perfect. The Uranium Emperor had no chance to hit you. Type: # Attack # to make an attack stronger then Jean Claude Van Damme.",
      img: "./assets/dodging2.png",
      options: [
        {
          text: "Attack",
          nextText: 8,
        },
      ],
    },
]