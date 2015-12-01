var multiset = [];

function clear(){
	multiset = [];
}

function add(element, occurences) {	
	// Return if 0 occurences should be added.
	if (occurences == 0) { 
		return;
	}
	
	if(occurences < 0){
		throw Error("cannot add a negative number of elements");
	}

	// If only one occurence should be added if will be used.
	if (typeof occurences === 'undefined') {
		multiset.push(element);				
	} else {
		for (var i = 1; i <= occurences; i++) {
			multiset.push(element);
		};
	}

	console.log('Adding');
	console.log(multiset);
	return true;
}

// Trying to call remove from HTML removes the button. Therefore the namechange.
function removeIt(element, occurences) {
	var idx = multiset.indexOf(element);

	// Return if 0 occurences should be added.
	if (occurences == 0) { 
		return;
	}

	// -1 is the index for does not exist. 
	if (typeof occurences === 'undefined') {
		multiset.splice(idx, 1);			
	} else {
		for (var i = 1; i <= occurences; i++) {
			if (idx != -1) {
				multiset.splice(idx, 1);						
			}
			idx = multiset.indexOf(element);
		};
	}	

	console.log('Removing');
	console.log(multiset);
	return true;
}

function count(element) {
	var count = 0;

	if (typeof element === 'undefined') {
		return;
	} 

	for (var i = 0; i <= multiset.length - 1; i++) {
		if (checkElement(element, multiset[i])) {
			count++;
		} 
	}

	return count;
}

function containsIt(element) {
	var checkedElement = false;

	if (typeof element === 'undefined') {
		return;
	}

	for (var i = 0; i <= multiset.length - 1; i++) {
		if (checkElement(element, multiset[i])) {
			checkedElement = true;
		} 
	}

	return checkedElement; 
}

function forEach(functionName) {
	var startLength = multiset.length - 1;
	for (var i = 0; i <= startLength; i++) {
		functionName(multiset[i]);
	}
}

function toStringIt() {
	// Start building the string to return.
	var res = "[";
	
	// Copy the array into a temporary array. 
	var temp = multiset.slice();
	
	// Sort the elements alphabetically 
	temp.sort();
	
	var elements = [];
	var counts = [];
	var lastIndex = 0;

	// Run through the array and count the elements. When a new element is encountered the element is saved into a new array.
	for (var i = 0; i <= temp.length - 1; i++) {
		if (temp[i] != temp[i+1]) {
			/* 
			* Count the entries. If i is 0 or 1, we add one, as we know that there is atleast one occurence, when we enter if loop.
			* If current element is the same as previous element we increment the counter aswell to make up for starting the index at 0. 
			*/ 
			var count = i - lastIndex;
			if (i <= 1 || temp[i] == temp[lastIndex]) {
				count += 1;
			}
			counts.push(count);
			elements.push(temp[i]);
			lastIndex = i;
		}
	} 

	// Write to the result string with counts, if there exists more than one. Add a comma between each, if another should be added.
	for (var i = 0; i <= elements.length - 1; i++) {
		if (counts[i] == 1) {
			res += elements[i]
		} else {
			res += elements[i] + " x " + counts[i];
		}
		if (i != (elements.length-1)) {
			res += ", ";
		}
	}

	res += "]";
	console.log(res);
	return res;
}

function helpForEach() {
	forEach(add);
}

function countIt(element) {
	return count(element);
}

function checkElement(element, value) {
	if (element == value) {
		return true;
	}
}