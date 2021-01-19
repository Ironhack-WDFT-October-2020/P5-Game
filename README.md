# P5-Game

P5 full game

Intro

The goal is to build a basic jump and run game in P5: 
Create a jumping character
Create a moving background 
Create “collectable” coins

Step 1
Use the starter code + explain what each file does. 
Test the game functions with console.logs 
Draw the canvas in the main.js




Create the background: 

Explain how we’ll want the background to work. Moving multiple layers
Add the image file to the preload in the game.js:
Just add 1 for now to get it working
Create a new background in the game.js setup: 
setupGame() {
   // 2. initialize background
   this.background = new Background();
   this.background.imgs = this.backgroundImgs;
Create a background.js
Create a background class with an this.imgs in the constructor 
Create a drawbackground() function for one image first: 
Explain the hard coded values 
image(this.imgs[1].src, 0, 0, width, height);

Use a for each to move the image.
Just add the one image to the for loop to show it once. Use the picture var. 
Add the variables from the image to illustrate this
Show the image rolling off the screen then explain the logic for the endless scroll
Add the extra image - width
Add the if statement at the bottom of the forEach loop

Explain the extra layers: 
Add the picture.src to the forEach loop 
Then add the extra images to the array 
They’ll all show at the same pace

Change the variable for movement to the speed variable in the picture 


Next: Player
 
Draw and initialise the player: 
Game preload: this.playerImg = loadImage("../assets/player/bb8.gif");
Game set up: 
this.player = new Player();
this.player.img = this.playerImg;
Then in the player.js: 
Set the height + width
Set the initial load x+y value 
Draw the player: 
image(this.image, this.x, this.y, this.width, this.height);
Add the draw player function to the drawGame() class 
CHECK THE VARIABLE NAMES

Do the jump: 
Add the jump keypress function to the main.js 
Show without velocity firs:
Add the this.gravity in the constructor
In the draw function: this.y += this.gravity
In the jump function: this.gravity -= 0.9;

Then add the velocity
Initialise the gravity in the constructor 
Add the logic to the draw player method
Let the jump update the velocity

Stop the jumps compounding: 
Add a jumpCount variable
Increment in the jump variable 

Now the obstacles…
Explain how this is going to work: 
We create an array of coins that all have an individual set of values so we can interact with them 
Define an empty array in the constructor of the game class 
Add the image to the preload in the game file
In the game.js draw function add the frame rate count to push the images to the empty array: 
if (frameCount % 30 === 0) {
      	this.obstacles.push(new Obstacle(this.coinImg));
    	}
Then add a for each to call the draw function in each obstacle class 
    	this.obstacles.forEach((obstacle) => {
      	obstacle.drawObstacle();
    	});

Finally the collisions … 
First explain what we’re going to try and do: 
Use the coordinates of the player to trigger a boolean change so we can then filter out specific elements from the obstacle array 
Now do it: 
Define the collision function in the obstacle. 
Pass in player info as an argument 
Define the parameters for the dist function (in built function in P5)
Then create the filter function in the game.js

