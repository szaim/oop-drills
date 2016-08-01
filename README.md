Objects, Constructor and Inheritance Drills

I. Object Initializers and Methods

Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.
II. Constructors and Prototypes

Create an empty constructor function called Loaf which has two parameters, flour and water.
In the body of the constructor function, create two properties, flour and water, and set them equal to the arguments passed to the parameters.
Add a hydration method to the Loaf object's prototype. The method should return the calculated hydration for the loaf.
Use the new keyword to create an instance of Loaf, with flour set to 300, and water set to 210.
Create a second instance of Loaf, with flour set to 300, and water set to 225.
Use console.log to print the flour and water values of the two loaves.
Call the hydration methods of the two loaves and use console.log to print the results.
III. Inheritance

Create a constructor function called YeastedLoaf and make it inherit from the Loaf constructor which you created in the previous exercise. The constructor function should have three parameters, flour, water, and yeast.
In the body of the constructor function:
Call the Loaf constructor function to set the flour and water properties.
Create a yeast property and set it equal to the yeast argument passed to the parameter.
Add an empty method called riseTime to the YeastedLoaf object's prototype.
Fill in the body of the riseTime method to return an estimate of how long the loaf will take to rise (the flour divided by the yeast)
Create an instance of YeastedLoaf with flour set to 300, water set to 225, and yeast set to 20.
Create a second instance of YeastedLoaf, with flour set to 300, and water set to 210, and yeast set to 100.
Use console.log to print the flour, water, and yeast values of the two loaves.
Call the hydration methods of the two loaves and use console.log to print the results.
Call the riseTime methods of the two loaves and use console.log to print the results.
