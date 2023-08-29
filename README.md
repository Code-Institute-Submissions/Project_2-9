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
The best way to try the game is in a web browser, not as a mobile version. The application is responsive but the recommendation is to use it in the desktop version, not mobile because it's complete text based.


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
- multiple languages

## Code Breakdown:

The code is object-oriented with prototype methods. The origin idea behind the prototype methods was, to use part of the code for the more complexer 2D game version of PHOSPHORUS Woman. When I started writing the code, I used a tutorial (link in the credits). I used the tutorial as inspiration for the structure of the text nodes. The code for the tutorial is written state based.

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

## Wireframes:

- The game design is for every screen exactly the same to keep the MVP simple and prevent overthinking.
- Black background, a centered image with the storytext below and below of that the input field with the submit button.
- That means, whatever choice from a user is made, moving forard or backward in the story, looks always exactly the same each other.

The wireframe demonstrate that look:

![game_design](/assets/documentation/game_design.png "game_design")

## User Storys

- As a user, I want to start the game, so that I can begin the adventure and explore the storyline.

- As a user, I want to read the story text, so that I can understand the context and make informed decisions.

- As a user, I want to see background images that correspond to the different parts of the story, so that I can visualize the setting.

- As a user, I want to see a text input field and a submit button, so that I can interact with the game and make choices.

- As a user, I want to enter my choice in the input field, so that I can proceed with the story based on my decision.

- As a user, I want the game to validate my input choice, so that I receive appropriate feedback if I make a mistake.

- As a user, I want to click the submit button to proceed with my chosen option, so that I can continue the adventure.

- As a user, I want to press the Enter key to submit my choice, so that I can interact with the game using keyboard shortcuts.

- As a user, I want to receive an error message if I enter an invalid choice, so that I can correct my input and make progress.

- As a user, I want the game to show the next part of the story based on my choice, so that I can explore different paths.

- As a user, I want the game to end and restart if there are no more options available, so that I can replay the adventure.

- As a user, I want to easily navigate through the story by making choices, so that I can engage with the narrative.

- As a user, I want the background image to change based on the current part of the story, so that I can visualize the changing scenes.

## Testing User Stories

### *Testing User Storie Starting the Game*

### Expactation:
The user should be able to begin the adventure and see the first text node displayed.

### Test:
- Open the game in the browser

### Result:
- The game initializes, and the first text node is shown along with the corresponding background image.

### *Testing Uaer Storie Reading Story Text*

### Expactation:
The user should be able to read the context and storyline.

### Test:
- Observe the displayed story text

### Result:
- The story text is visible, providing the context and setting for the adventure.

### *Testing User Storie Progressing in the Story*

### Expactation:
The user should be able to explore different paths and consequences.

### Test:
- Make choices and observe the story progression

### Result:
- The story unfolds based on choices, leading to different outcomes


### *Testing User Storie Restarting the Game*

### Expactation:
The user should be able to replay the adventure from the beginning.

### Test:
- Reach an end point and choose to restart

### Result:
- The game resets, allowing a new playthrough of the adventure

###  *Testing User Storie Navigating through the Story*

### Expactation:
The user should be able to easily navigate the story using choices.

### Test:
- Make choices and follow the storyline

### Result:
- Choices guide the narrative, enabling smooth navigation through the adventure

### *Testing User Storie Changing Background Images*

### Expactation:
The user should be able to visualize changing scenes in the story.

### Test:
- Progress through the story and observe the background changes

### Result:
- Background images shift according to the narrative, enhancing scene visualization

## Testing Features

Test every function of the game with Function > Expected result  > Action taken > Result
- Document each functional test with a screenshot

![user_testing](/assets/documentation/user_testing.png "user_testing")

### Feature: Responsiveness

- ### Expectation:
The game should be responsive and adapt well to different screen sizes, including mobile devices and tablets.

- ### Action:
Access the game on various devices with different screen sizes with the dev tools and also with real devices.

- ### Result:
The game layout and content adjust appropriately to different screen sizes, ensuring a user-friendly experience without any content cutoff or overlapping.

The screenshot is taken from a Samsung Galaxy S20

![responsive_smartphone](/assets/documentation/responsive_smartphone.png "responsive_smartphone")


## Not tested:
- Safari
- IOS

## Validator Testing:
- HTML No errors were returned when passing through the official W3C validator 
- CSS No errors were found when passing through the official (Jigsaw) validator

### W3C Validator
![w3_fine](/assets/documentation/w3_fine.png "w3_fine")

### Jigsaw Validator
![jigsaw_fine](/assets/documentation/jigsaw_fine.png "jigsaw_fine")

## Accesability

### Desktop Version

![desktop_access](/assets/documentation/desktop_access.png "desktop_access")

### Mobile Version

![mobile_access](/assets/documentation/mobile_access.png "mobile_access")

## Fixed Bugs:

#### W3C error messages at the HTML page:
- Error: Bad value for attribute src on the img element
- Error: Missing alt attribute for the img element
- the img element had an stray end tag

![w3_test](/assets/documentation/w3_test.png "w3_test")


## Unfixed Bugs:
- If a user has set a language other than english in the browser or uses a translation within the browser, the user believes to have entered the correct selection in the input field.
As the source in the text nodes is english, the error handling is triggered.
- As the error message is displayed, the input field slides slightly to the left side of the screen.

### Solutions:
- Dedicated additional rules for error handling
- Quick solution is the add additional information to the current error message
- set CSS styles for the error handling and the input field

The screenshot demonstrates the error handling problem within the german language

![test_german](/assets/documentation/test_german.png "test_german")

### Deployment:

The website has been deployed on GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab.
- Select the main branch from the source area dropdown menu.
- Once the main branch is selected, the page will automatically refresh with a detailed ribbon display to indicate successful deployment.
- The link can be found here - https://renebaumann3000.github.io/Project_2/

## Credits:
Inspiration Tutorial:
Youtube: https://www.youtube.com/watch?v=R1S_NhKkvGA
GitHub: https://github.com/WebDevSimplified/JavaScript-Text-Adventure

Titel Screen Design with:
https://placeit.net/

General Design Inspiration:
https://www.indieretronews.com/2022/03/golden-seas-high-quality-text-adventure.html

Code is written by myself with help from:
- Mentor
- Friends





