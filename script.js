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
// step 2:
