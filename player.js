class Player {
	constructor (name) {
		this.name = name;
		this.inventory = [];
	}

// This item is a string itemName = ""
	searchInventoryFind (itemName) {
		return this.inventory.find((i)=> {
			return i.name === itemName;
		});
	}


	searchInventoryLoop (itemName) {
		let found = null;
		let i = 0;

		while (i < this.inventory.length && found == null) {
			if (this.inventory[i].name == itemName) {
				found = this.inventory[i];
			}
				i++;
		}
			return found; 
	}
// This item is an object && object literal is = {}
	addInventory (itemObj = {}) {
		this.inventory.push(itemObj);
	}

	activateInventoryObj (itemName) {
		let found = this.searchInventoryFind(itemName);
		if (found) {
			found.flag = true;
		}
	}



}

module.exports = Player;

// Next stages: verbs and nouns
// Create a new file, create new player
// Figure out how to remove an inventory item