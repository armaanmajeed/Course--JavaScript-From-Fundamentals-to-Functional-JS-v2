// Implementing functionality of _.curry & _.compose
// Since _ is already defined...

var abc = function (a, b) {
    return [a, b];
}

_.curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn (arg, arg2);
        }
    }
}

var curried = _.curry(abc);
console.log(curried(1)(2));

var ex = (name) => {
    return `My name is ...${name}`;
}

var ex2 = (state) => {
    return `${state.toUpperCase()}`;
}

_.compose = (fn, fn2) => {
    return (arg) => {
        var result = fn2(arg);
        return fn(result);
    }
}

var comp = _.compose(ex, ex2);
console.log(comp('amk'));

console.log("----------------End----------------");