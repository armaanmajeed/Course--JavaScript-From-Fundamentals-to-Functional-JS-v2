// Implementing functionality of _.map
// Since _ is already defined...

_.map = function(list, callback) {
    if (Array.isArray(list)) {
        var arr = [];
        for (let i = 0; i < list.length; i++) {
            arr.push(callback(list[i], i, list));
        }
        return arr;
    }
}

var a = _.map([1,2,3], function(val) {
    return val + 1;
})

console.log(a);
console.log("----------------End----------------");