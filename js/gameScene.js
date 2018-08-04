// Phaser Documentation:
// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html


// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
let getParameterByName = (name) => {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

let gameScene = new Phaser.Scene('Game');

// Runs first and is used to set all the variables
gameScene.init = () => {	
};

// Runs second and is used to set all the images used in the game
gameScene.preload = () => {
	// gameScene.load.image('key', 'image_location');

};

// Runs third and is used to position all the images initially in the game
gameScene.create = () =>  {
};

// Runs after every frame and is used to check 
// conditions and control things in thing in the game
// This may run 60 times per second and is the last thing that is ran
gameScene.update = () =>  {
	
};



// set config of game
let config = {
	type: Phaser.AUTO, // Will use webgl if avialable overwise it will use the canvas
	width: 640,
	height: 360,
	scene: gameScene, // default scene
	parent: 'game-canvas', // wrapper for canvas so you control where it is
	pixelArt: false,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 1000 // default gravity
			},
			debug: getParameterByName('debug') == '1' // if debug=1 in the query it will use debug mode
		}
	}
};

// create an new game and pass configuration to it
let game = new Phaser.Game(config);

