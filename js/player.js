class Player {
	constructor(playerImage) {
		// set the height, the initial location + the jump controls for the player
		this.image = playerImage;
		this.height = 140;
		this.width = 100;
		this.x = 0;
		// explain this to the students
		this.y = height - this.height;
		// these aren't all defined at the start of this part of the lecture
		this.gravity = 0.7;
		this.velocity = 0;
		this.score = 0;
	}
	drawPlayer() {
		this.velocity += this.gravity;
		this.y += this.velocity;
		// draw the player + jump logic with velocity
		if (this.y >= height - this.height) {
			this.y = height - this.height;
		}
		image(this.image, this.x, this.y);
	}

	jump() {
		if (this.y === height - this.height) {
			this.velocity = -10;
		}
		console.log("this will be the jump");
	}
}
