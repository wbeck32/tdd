//eachFunction.js

var arr = [0,1,2,3,5,8,13];

var cb = function(element) {
	var element = element * element;	
	return element;
};

var myEach = function(arr, cb) {
	arr.forEach(function(v,i) {
		arr[i] = cb(arr[i]);
	});
	console.log(arr);	
	return arr;
};

myEach(arr,cb);