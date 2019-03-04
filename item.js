class Item {
	// constructor == initialize function
	constructor (name) {
		this._name = name;  // _ before the property denotes Private
		this.flag = false;
	}
		// getter and setter unnecessary but included to showcase setting property to Private
	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}


}

module.exports = Item;