# Single Player Pong
Interactive Frontend Development Project - Code Institute

## Game History

Pong is one of the earliest arcade video games. It is a table tennis sports game featuring simple two-dimensional graphics. The game was originally manufactured by Atari, which released it in 1972. Allan Alcorn created Pong as a training exercise assigned to him by Atari co-founder Nolan Bushnell.

Pong was the first commercially successful video game, which helped to establish the video game industry along with the first home console, the Magnavox Odyssey. Soon after its release, several companies began producing games that copied its gameplay, and eventually released new types of games. As a result, Atari encouraged its staff to produce more innovative games. The company released several sequels which built upon the original's gameplay by adding new features.

### A live version is hosted [here](https://armedcor.github.io/classic-pong-single-player/)

## UX

This game was designed to be played by a single player on a desktop computer, as such the design is such to suit the screens of desktops and the usage of a keyboard.
The design of the website was chosen to invoke a sense of nostalgia while the user played the game, a very specific Google Font was used to help create that feeling.
Text is minimal and mostly kept to bootstrap modals to keep from distracting the player and taking their focus away from the game.
There is a score board built into the html to allow the player keep track of the score.

### No template was used on this page.

User requirements are met as such:

* The game does not begin until the player presses the start game button.
* There is a specific bootstrap modal which instructs the player on how to control and play the game.
* When the player wins or looses the game a bootstrap modal appears either congratulating them or telling them to try again.
* The user can view the how to play modal at any time.
* A modal appears on first loading the page that instructs the player this game was designed for desktop and requires a keyboard.
* At any time the player can easily see what their or player two's score is.

## Wireframing

Wireframing was done using a pen and paper, photos of which can be found in the image folder.

## Technologies used

* HTML
* CSS
* JavaScript

## Features left to implement

* The ability to select a two player game and play against a friend.
* More randomization of ball placement and trajectory.
* New Game button to restart the game without reloading the webpage.
* Disable the Start Game button once a game  has begun to stop the speed-up bug.

## Testing

The game as tested on  13", 27", 46" and 52" screens to make sure the game elements stayed in the correct position. 
It was also tested using Chrome, Firefox, Safari and Microsoft Edge. 
I planed to enable music on page load but due to new [browser policies such as on chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes), this proved difficult to implement.

Manual testing was done to ensure:
* The game plays as intended.
* Appropriate win/loose notifications show up when the specific condition was met.
* The Games score updated correctly when a point was scored by either players.
* Modals worked correctly.
* The buttons and controls provide to the player functioned as intended.
* Tests to make sure the game was enjoyable and the player could beat the "AI"

## Issues

Because of an incredibly tight timeline (A week from inception to submission) I found I ran into a number of issues.
I would have liked to spend more time refactoring my code to allow the game to have a number of different functions and tidy up the code and allow me to implement a number of different functions. While in its current state the game works and is functional the main game function is overly long and could do with refactoring.
The ball travels on the same path every game and ends at the same point if the player is able to keep up with the computer.
I was unable to implement audio in the game because of the tight timeframe and needed to move on with other functions in the game.

## Personal Takeaway

With an extremely tight schedule to learn JavaScript I chose to build a game using core JavaScript to help me get a better grasp of how the code is written and implemented. From starting JavaScript fundamentals to submitting this project only three weeks have passed. I now realize how the code could have been implemented in a better way and have gained a much better understanding of JavaScript because of it.

## Deployment

The project was deployed from the main branch of this Github repository using github pages. Any updates that are pushed to the master branch automatically update the live page and are implemented within a matter of minutes.

### Run locally
To run this site locally, in your terminal enter: git clone https://github.com/armedcor/classic-pong-single-player

## Media
The game font was taken from Google Fonts.

## Awknowledgements.

Allan Alcorn the creater of the original pong.
Code for the glowing neon title game from [here](https://cssreset.com/create-glowing-neon-text-using-css3/)
The game basics came from [here](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) before been greatly changed to suit my needs.