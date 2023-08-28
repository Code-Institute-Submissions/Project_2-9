# PHOSPHORUS WOMAN THE GAME


## Introduction:
The fictional character Phosphorus Woman was part of a film project about our resource problems.
As a superheroine, she has to fight against the Uranium Emperor.
Actually, this project was planned as a small 2D fighting game.
The video/photo material should be converted into 2D sprite sheets (like in Mortal Kombat 1-3).
Unfortunately this was not possible in the short deadline.
As an MVP approach it has now become a text based game.
The first iteration included 2 buttons so that a user can navigate through the story.
To improve the gamification factor a bit, there is now an input field for the texts instead of the buttons.
The context of the game does not take itself too seriously.
The content of the game is produced by the author.
The best way to try the game is in a web browser, not as a mobile version. The application is responsive but the recommendation is to use it not mobile, because it's complete text based.


## Features:
PHOSPHORUS WOMAN THE GAME is an interactive Front End Application.
This MVP sets the focus on the functionality and is simple as possible.
More or less its only possible to move forward in the game.
When a user decides to go back in the story, a motivation screen is displayed, motivating the user to continue with the story again.
There is only one change to be GAME OVER.
The message is, never give up. There is always a chance to move farward.

- ### Choices: 
The storyline offers 2 possible choices for the user. The motivation screen always offers 1 choice to move forward. The possible choices are marked in the storyline. The screenshot shows an example of two possible choices in the game: "Jump" and "Home".

![choices](/assets/documentation/choices.png "choices")

- ### The input field: 
The decisions are written into the input field and submitted to the game via the submit button. It is also possible not to use the button and press enter instead.

![input_field](/assets/documentation/input_field.png "input_field")

- ### The error handling: 
As soon as a user types something that the game does not specify as a decision, an error message is displayed informing the user that something false has been entered. The user can read the possible decisions contained in the storyline.

![error_handling](/assets/documentation/error_handling.png "error_handling")

- ### The storyline: 
The storyline is told through the text as well as supported by images. To give the game a retro feel, the images have an 8 bit look.

![story](/assets/documentation/story.png "story")

## Features left to implement:

- a option for playing music in the background
- also a option to turn the music on/ off
- more choices and possabilitys to be GAME OVER
- Image and Text animations

## Code Breakdown:

The code is object-oriented with prototype methods. The origin idea behind the prototype methods was, to use part of the code for the more complexer 2D game version of PHOSPHORUS Woman.

1.	#### Game Initialization:
-	The Game prototype has a method called initialize which is responsible for starting the game by displaying the first text node.
-	An instance of the Game class is created using var game = new Game();.
-	The window.onload event is used to initialize the game once the window has finished loading.
2.	#### Game Class:
-   The Game constructor function is defined. It initializes DOM element references (storyElement, inputContainerElement, backgroundElement) for later use.
3.	#### Displaying Text Nodes:
-   The showTextNode function is defined on the Game.prototype. It displays a text node based on the provided index.
-   It finds the corresponding text node in the textNodes array using find.
-   Updates the story text content and sets the background image based on the text node's image URL.
-   Calls the manageInput function to display input fields for options.
4.	#### Managing Input Fields for Options:
-   The manageInput function is defined on the Game.prototype. It manages and displays input fields for options.
-   It clears existing input fields, creates an input field with a placeholder and class, and appends it to the input container.
-   Creates a submit button, sets its text and class, and attaches a click event handler.
-   The click event handler tries to match user input with options and triggers the showTextNode function accordingly.
-   Additionally, an event listener for the Enter key is added to the input field to simulate clicking the submit button.
5.	#### Clearing Input Fields:
-   The clearInput function is defined on the Game.prototype. It removes existing input fields from the input container.
6.	#### Showing Error Message:
-   The showError function is defined on the Game.prototype. It displays an error message in the input container.
-   It clears any existing error messages, creates an error message element, sets its class and text content, and appends it to the input container.
7.	#### Clearing Error Message:
-   The clearError function is defined on the Game.prototype. It removes any existing error message element from the input container.
8.	#### Text Nodes:
-	The textNodes array contains various text node objects that define the story progression.
- 	Each text node object has an ID, text content, image URL, and options array.

## UX/ UI Site Goals

- The MVP should be kept as simple as possible in its functionality and design to prevent potential overthinking.
- The main colors are black and white, and red for error handling.
- The design consists of a black background, story content consisting of photos + text, and a simple white input field with gray submit button.

## Game Logic

Basically, a user can only move forward in the story. There are 2 options to choose from in most screens. The story allows the way forward to fight bravely against the Uranium Emperor or to retreat almost any time, because you do not trust yourself to fight.
Some screens contain only one choice in the logic.

#### The following screens contain only one choice:
- Beginning the game: Play
- The motiviation screens for move forward trigger the storyline
- The GAME OVER screen -> begin to Play
- The last hit move the kill the Uranium Emperor
- The final screen can only trigger to Play again

The flowchart demonstrate that logic:

![game_logic](/assets/documentation/game_logic.png "game_logic")



## Credits:
Inspiration Tutorial:
https://www.youtube.com/watch?v=R1S_NhKkvGA

Titel Screen Design with:
https://placeit.net/

General Design Inspiration:
https://www.indieretronews.com/2022/03/golden-seas-high-quality-text-adventure.html




