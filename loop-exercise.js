var games = {};
games["suspects"] = [];
games.suspects.push({
    "name": "Rusty",
    "color": "Orange"
});
games.suspects[1] = {
    "name": "Ms Scarlet",
    "color": "Red"
};

function loop() {
    for (let i = 0; i < games.suspects.length; i++) {
        console.log(games.suspects[i]);
    }
}

loop();

function loop1() {
    for (let i = 0; i < games.suspects.length; i++) {
        for (let key in games.suspects[i]) {
            if (games.suspects[i][key] == "Ms Scarlet") {
                console.log("Found them!");
            } else {
                console.log("Nope, better luck next time!!");
            }
        }
    }
}

loop1();

// Assigning colors to strings using destructuring
var [{color: firstName}, {color: secondName}] = games.suspects;
console.log(firstName, secondName);

// Using functions
function CreateSuspectObjects (name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`)
        }
    };
};

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

var suspectsList = [];
// Using forEach to loop
suspects.forEach(function(name) {
    suspectsList.push(CreateSuspectObjects(name));
});

for (let i = 0; i < suspectsList.length; i++) {
    console.log(suspectsList[i]);
}
console.log("----------------End----------------");