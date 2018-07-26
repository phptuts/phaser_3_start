let gameScene = new Phaser.Scene('Game');

// Runs first and is used to set all the variables
gameScene.init = function() {
};

// Runs second and is used to set all the images used in the game
gameScene.preload = function() {
	// gameScene.load.image('key', 'image_location');

};

// Runs third and is used to position all the images initially in the game
gameScene.create = function() {
		// gameScene.add.sprite('key', 'image_location');
		// setOrigin() changes the center of the image
};

// Runs after every frame and is used to check 
// conditions and control things in thing in the game
// This may run 60 times per second and is the last thing that is ran
gameScene.update = function() {
	
};



// set config of game
let config = {
	type: Phaser.AUTO, // Will use webgl if avialable overwise it will use the canvas
	width: 640,
	height: 360,
	scene: gameScene
};

// create an new game and pass configuration to it
let game = new Phaser.Game(config);