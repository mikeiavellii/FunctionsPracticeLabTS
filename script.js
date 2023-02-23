"use strict";
exports.__esModule = true;
var name = "Justin";
var age = 25;
var amTired = true;
var anyData = 10; //like var anything can go in or come out
anyData = true; //this will still work
//reassigning variables
age = 18;
age += 9;
age -= 2;
age *= 4;
age /= 2;
//Console
console.log(age);
console.log(name);
console.log(amTired);
//array
var names = ["Justin", "Josh", "Billy"];
names.push("Tommy");
console.log(names);
names.forEach(function (n) {
    console.log(n);
});
names.splice(2, 1);
console.log(names);
//if
var x = 100;
if (x == 100) {
    console.log("Value is 100");
}
else if (x >= 101) {
    console.log("Value is greater than or equal to 101");
}
else {
    console.log("Value is less than 100");
}
//loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
//functions //this one has no return type
function DisplayGreeting(input) {
    //ts is name, parameter, return type
    console.log("Welcome to ts, ".concat(input));
}
DisplayGreeting("Justin");
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 7));
var Justin = {
    FirstName: "Justin",
    LastName: "Jones"
};
console.log(Justin);
console.log(Justin.FirstName);
var TechDepartment = {
    name: "Tech",
    // manager: Justin
    //or 
    manager: {
        FirstName: "Josh",
        LastName: "Carolin"
    }
};
console.log(TechDepartment);
console.log(TechDepartment.manager.FirstName);
//Classes
//This will be mainly angular
var Student = /** @class */ (function () {
    //public is a short hand to add a value and auto make a property off of it
    function Student(fName, lName, grade) {
        this.grade = grade;
        this.FirstName = fName;
        this.LastName = lName;
    }
    return Student;
}());
var John = new Student("John", "Glandon", 12);
console.log(John);
console.log(John.FirstName);
console.log(John.grade);
var collection = [
    {
        name: "Omniscience",
        rarity: 4
    },
    {
        name: "Wood Elf",
        rarity: 1
    },
    {
        name: "Storm Crow",
        rarity: 1
    },
    {
        name: "Black Lotus",
        rarity: 5
    },
    {
        name: "Birds of Paradise",
        rarity: 2
    }
];
function GetMostRare(cards) {
    var rareCard = cards[0];
    cards.forEach(function (c) {
        if (c.rarity > rareCard.rarity) {
            rareCard = c;
        }
    });
    return rareCard.name;
    //OR
    // let rareCard:Card = cards.reduce((prev, current) => (prev.rarity >  current.rarity)? prev : current );
}
var cardName = GetMostRare(collection);
console.log(cardName);
