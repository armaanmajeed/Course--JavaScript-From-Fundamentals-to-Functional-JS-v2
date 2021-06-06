// Implementing functionality of _.each
const _ = {};

_.each = function(list, callback) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        } 
    } else {
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

_.each(["AMK", "Jitu", "Mayank"], function(name, i, list) {
    if(list[i + 1]) {
        console.log(name, "is younger than", list[i+1]);
    } else {
        console.log(name, "is the oldest");
    }
})

// We can _.each or _.map and many more methods by including underscore.js library.
console.log("----------------End----------------");