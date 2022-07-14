class Cow {
	constructor(name) {
		this.id = `${new Date().toString()}${Math.random().toString()}`;
		this.name = name;
		this.date = new Date();
	}

	save() {}
}

export default Cow;
