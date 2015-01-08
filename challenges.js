var people = [
  	{
  		fname: "joe",
  		lname: "smith",
 		age: 15
 	},
 	{
		fname: "jane",
 		lname: "jones",
 		age: 35
 	},
 	{
 		fname: "jasmine",
 		lname: "gravity",
 		age: 135
 	}
];

var ageUp = function(people){
	people.forEach(function(v,i) {
		people[i].age = people[i].age+1;
	}); 
	return people;
};

//ageUp(people);

module.exports = {
	"ageUp": ageUp
};