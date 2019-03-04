const Player = require("./player.js");
const Item = require("./item.js");
process.stdin.setEncoding('utf8');
process.stdout.write("Choose a character name: ");

let playerOne = null;

process.stdin.on('readable', ()=> {
	let chunk = process.stdin.read();
	if(chunk != null) {
		playerOne = new Player(chunk);
		console.log(playerOne);
	}

});