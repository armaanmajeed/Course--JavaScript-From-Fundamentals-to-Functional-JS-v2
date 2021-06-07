const constructArr = function () {
    const arr = Array.prototype.slice.call(arguments);
    // In ES6 we can just write [Array.from(arguments)] instead of above line
    arr.push("the billiards room?");
    return arr.join(" ");
}

console.log(constructArr("was", "it", "in"));

console.log("----------------End----------------");