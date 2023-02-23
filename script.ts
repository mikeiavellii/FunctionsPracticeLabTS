//trick Ts to allow it to work for single file project
export {};

let name: string = "Justin";
let age: number = 25;
let amTired: boolean = true;
let anyData: any = 10; //like var anything can go in or come out
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
let names: string[] = ["Justin", "Josh", "Billy"];
names.push("Tommy");
console.log(names);
names.forEach((n: string) => {
  console.log(n);
});
names.splice(2, 1);
console.log(names);

//if

let x: number = 100;
if (x == 100) {
  console.log("Value is 100");
} else if (x >= 101) {
  console.log("Value is greater than or equal to 101");
} else {
  console.log("Value is less than 100");
}

//loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let counter: number = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

//functions //this one has no return type
function DisplayGreeting(input: string): void {
  //ts is name, parameter, return type
  console.log(`Welcome to ts, ${input}`);
}

DisplayGreeting("Justin");

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(5,7));

//interface - ts class
interface /* followed by name */ Person {
   //properties
   FirstName:string; //Property name:Data type
   LastName :string;
}

let Justin: Person = {
    FirstName: "Justin",
    LastName: "Jones"
}

console.log(Justin);
console.log(Justin.FirstName);

interface Department {
    name: string;
    manager: Person;
}

let TechDepartment: Department = { //declaring an instance
    name:"Tech",
    // manager: Justin
    //or 
    manager: { //referencing another function. In order to make a manager we need to fulfill the criteria for the person class 
        FirstName: "Josh",
        LastName: "Carolin"
    }
} 

console.log(TechDepartment);
console.log(TechDepartment.manager.FirstName);

//Classes
//This will be mainly angular
class Student {
    public FirstName: string;
    public LastName: string;


    //public is a short hand to add a value and auto make a property off of it
    constructor(fName:string, lName:string, public grade:number) {
        this.FirstName = fName;
        this.LastName = lName
    }
}

let John:Student = new Student("John", "Glandon", 12);
console.log(John);
console.log(John.FirstName);
console.log(John.grade);

//card exercise
interface Card {
    name: string;
    rarity: number; //higher = more rare
}

let collection:Card[] = [
    {
        name:"Omniscience",
        rarity: 4
    },
    {
        name:"Wood Elf",
        rarity: 1
    },
    {
        name:"Storm Crow",
        rarity: 1
    },
    {
        name:"Black Lotus",
        rarity: 5
    },
    {
        name:"Birds of Paradise",
        rarity: 2
    }
];

function GetMostRare(cards: Card[]) : string{ /* first is parameter - cards: Card[] which is an array of cards  */
    // let rareCard: Card = cards[0];

    // cards.forEach((c:Card) => {
    //     if(c.rarity > rareCard.rarity){
    //         rareCard = c;
    //     }
    // });

    // return rareCard.name;
    //OR
    let rareCard:Card = cards.reduce((prev, current) => (prev.rarity >  current.rarity)? prev : current );
    return rareCard.name;
}

let cardName:string = GetMostRare(collection);
console.log(cardName);