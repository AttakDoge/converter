// hi
var val1 = document.getElementById("value1");
var val2 = document.getElementById("value2");
var drop1
var drop2
/*
get value of option, so for(x = drop1, x <= or >= drop2, x++ or x--)
going up: x <= drop2, x++
going down: x >= drop2, x--

first, check if we are converting up
true:
for(x = drop1, x <= drop2, x++)
false:
for(x = drop1, x >= drop2, x--)

while in these for loops check if we need to * or / by 8
up: if x = 0, val1 * 8
down: if x = 1, val1 / 8
*/