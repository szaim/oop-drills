var loaf = {
  flour: 300,
  water: 210
}

console.log(loaf.flour);
// add property in object litteral
loaf.sugar = 100;

console.log(loaf);
// delete property from the object
delete loaf.sugar;

console.log(loaf);
// add method to the object
loaf.hydration = function() {
  var result = (this.water / this.flour) * 100;
  console.log(result);
}

// calling the method

loaf.hydration();

// object.create
var waffle = Object.create(loaf);

waffle.flour = 500;
console.log(waffle.flour);
//factory function
function factory(flour, water) {
  var loaf1 = {
    myFlour: flour,
    myWater: water

  }
  return loaf1;
}
var waffle2 = factory(100, 900);
console.log(waffle2);

/*********** step 2: ****************/

function Loaf(flour, water) {
	this.flour = flour;
	this.water = water;	
}
console.log(Loaf.prototype);
Loaf.prototype.hydration = function() {
	var result = (this.water / this.flour) * 100;
  	console.log(result);
}


waffles = new Loaf(300, 210);
console.log(waffles);

loaf2 = new Loaf(300, 250);
console.log(loaf2);

waffles.hydration();
loaf2.hydration();
////**************************
function YeastedLoaf(yeast, flour, water) {
	this.yeast = yeast;
	Loaf.call(this, flour, water);
	
}
// YeastedLoaf.call(Loaf);
YeastedLoaf.prototype = Object.create(Loaf.prototype);  //use protypal methods from the "parent"
 YeastedLoaf.prototype.constructor = YeastedLoaf; // fixes: lets you use your own prototype methods

YeastedLoaf.prototype.riseTime = function() {
	var result = this.flour / this.yeast;
	console.log(result);
}


console.log(YeastedLoaf.prototype);
// Create an instance of YeastedLoaf
waffles2 = new YeastedLoaf(20, 300, 225);
console.log(waffles2);
waffles2.riseTime();
waffles2.hydration();

// Create a second instance of YeastedLoaf just to check 
waffles3 = new YeastedLoaf(67, 78, 90);
console.log(waffles3);
waffles3.riseTime();

// machine 1 = new Loaf(2012, "not clear", "not clear");

// machine 1 year: 2012 scan: not clear , printing: not clear 
// machine 2 year: 2013 scan: a little clear, printing: a little clear 


/*********** step 3:  **************/





