// Destructuring is used to reduce line of code
var {name , room, weapon} = {"name": "Rusty", "room": "kitchen", "weapon": {"type": "candelstick", "location": "bedroom"}};
console.log(name, room, weapon);

// In the above line of code we used desturcturing to reduce the line of code in making separate variables

// Destructuring Arrays
var [a, b] = [1,2];
console.log(a,b);

// Spread/Rest Operator
var [a, ...b] = [1,2,3];
console.log(a,b);

// Swap Variables without using temp
var a = 1, b = 2;
[b,a] = [a,b];
console.log(a,b);

// Advance Deep Arrays
var [a, [b, [c,d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log(a,b,c,d);

// Objects
var {user: x} = {user: 5};
console.log(x);

console.log("----------------End----------------");