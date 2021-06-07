// Implementing functionality of _.reduce
// Since _ is already defined...

_.reduce = function (list, cb, initial) {
    let memo = initial;
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}

var result = _.reduce([1,2,3], (v, sum) => v + sum);
console.log(result);

console.log("----------------End----------------");