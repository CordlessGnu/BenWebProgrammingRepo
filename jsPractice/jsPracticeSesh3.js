var a = 5;
var b = 6;
var c = 7;

//semi perimeter using Heron's formula
var s = (a + b + c)/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}