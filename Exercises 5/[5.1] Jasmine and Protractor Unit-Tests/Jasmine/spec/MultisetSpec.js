describe("Multiset", function() {
  var player;
  var song;

  beforeEach(function() {
    clear();
  });

  it("should be able to add and count elements", function() {
    add("John John", 2);
    expect(count("John John")).toEqual(2);
  });
  
  it("should be able to remove elements", function() {
    add("John John", 3);
	removeIt("John John", 2);
    expect(count("John John")).toEqual(1);
  });
  
  it("should be able to apply a function to all elements", function(){
	add("John", 10);
	var concat = "";
	function doConcat(element){
		concat += element;
	}
	forEach(doConcat);
	expect(concat).toEqual("JohnJohnJohnJohnJohnJohnJohnJohnJohnJohn");
  });
  
  it("should do things that need to be done", function(){
	add("John", 1);
	spyOn(window, 'add'); // Start spying on calls to add function
	
    forEach(add); // Do a thing that should call add

    expect(window.add).toHaveBeenCalledWith("John"); // Verify
  });
  
  it("should error when adding negative number of elements", function(){
	  expect(function() {
		add("John", -1234567);
	  }).toThrowError("cannot add a negative number of elements");
  });
});
