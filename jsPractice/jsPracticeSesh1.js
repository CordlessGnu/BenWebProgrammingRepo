let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

/*The temperature today in kelvin, will not be converted so is a const*/
const kelvin  = 293;
//celsuis is 273 less than kelvin so we used the kelvin variable
var celsius = kelvin - 273;
//Used formula for converting celsuis to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//Used Math.floor() to round number
var fahrenheit = Math.floor(fahrenheit);
//Used string interpolation to display the variables value within text
console.log("The temperatre is " + fahrenheit+ " degrees Fahrenheit.")