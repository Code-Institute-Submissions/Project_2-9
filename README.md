## General Information:
Interactive Front End Application
More or less its only possible to move forward.
When a user decides to go back in the story, a motivation screen is displayed, motivating the user to continue with the story again.
There is only one change to be GAME OVER.
The message is, never give up. There is always a change to move farward.

1.	Game Initialization:
•	The Game prototype has a method called initialize which is responsible for starting the game by displaying the first text node.
•	An instance of the Game class is created using var game = new Game();.
•	The window.onload event is used to initialize the game once the window has finished loading.
2.	Game Class:
•	The Game class constructor initializes references to the DOM elements: the story container, buttons container, and background.
3.	Displaying Text Nodes:
•	The showTextNode method is responsible for displaying a specific text node.
•	It uses the textNodeIndex to find the corresponding text node from the textNodes array.
•	The story's content is updated, and the background image is set based on the text node's properties.
•	The manageButtons method is called to create and display buttons based on the text node's options.
4.	Managing Buttons:
•	The manageButtons method clears any existing buttons in the buttons container.
•	It iterates over the options of the current text node, creates a button for each option using the createButton method, and appends it to the buttons container.
5.	Creating Buttons:
•	The createButton method generates a button element with the text and class specified in the option.
•	An onclick event handler is attached to the button. When clicked, it calls the selectOption method with the chosen option.
6.	Clearing Buttons:
•	The clearButtons method removes all child elements from the buttons container, effectively clearing any existing buttons.
7.	Selecting Options:
•	The selectOption method handles the user's choice of an option.
•	If the option's action is a "link," it opens the link URL in a new window.
•	If the option's action is empty, a console message is logged.*
•	Otherwise, the showTextNode method is called to display the next text node based on the chosen option.
8.	Text Nodes:
•	The textNodes array contains various text node objects that define the story progression.
•	Each text node object has an ID, text content, image URL, and options array.
*In this context, an "empty" action doesn't have a specific action associated with it. It could be possible in a future version of that game prototype that some options in the textNodes array might have an empty action, indicating that when the user selects that option, nothing specific should happen, or there is no special behavior to execute.
When this condition is met, the code logs an empty string (console.log("");) to the browser's console. This is essentially a placeholder or indication that for this particular option, no custom action is defined, and the code proceeds to the next text node in the story.
It doesn't have any functional impact on the game itself but can help keep track of the game's logic and progression during development and testing.

![game_logic](/assets/game_logic.png "game_logic")

## Credits:
Inspiration Tutorial:
https://www.youtube.com/watch?v=R1S_NhKkvGA

Titel Screen Design with:
https://placeit.net/

General Design Inspiration:
https://www.indieretronews.com/2022/03/golden-seas-high-quality-text-adventure.html




