var a = 5;
var b = 6;
var c = 7;

//semi perimeter using Heron's formula
var s = (a + b + c)/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);