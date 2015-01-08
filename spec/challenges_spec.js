var fns = require('../challenges');


 describe("ageUp", function() {
 	it("should make each person age one year", function() {

 	var people = [
 	{ fname: "joe", lname: "smith", age: 15 },
	{ fname: "jane", lname: "jones", age: 35 },
	{ fname: "jasmine", lname: "gravity", age: 135 }
	];

	var peoplePlusOne = [
	{ fname: "joe", lname: "smith", age: 16 },
	{ fname: "jane", lname: "jones", age: 36 },
	{ fname: "jasmine", lname: "gravity", age: 136 }
	];

		expect(fns.ageUp(people)).toEqual(peoplePlusOne);
	
 	});
 });