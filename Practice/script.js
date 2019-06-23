// ES5 compare with ES6 and leran new syntax and fetures of ES6


// let and const


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);



var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);




/////////////////////////////////
// Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();

//console.log(c);




/////////////////////////////////
// Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));




// Arrow function


const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);



//ES 5

var box5 ={
    color: "green",
    position: 1,
    clickMe: function(){
        var self = this;

        document.querySelector('.green').addEventListener("click", function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}

box5.clickMe();


//ES6

const box6 ={
    color: "green",
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener("click", () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();

const box66 ={
    color: "green",
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener("click", () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();


// Constructor Functionn example with ES5 and ES6

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriennds5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ["Shehjad","Yahya", "Abu", "Zubeen"];
new Person('Zakwan').myFriennds5(friends);

//ES6

Person.prototype.myFriennds6 = function(friends){
    var arr = friends.map( el =>  `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ["Shehjad","Yahya", "Abu", "Zubeen"];
new Person('Zakwan').myFriennds6(friends);



//Destructuring

// //ES5
var zakwan = ["Zakwan", 26];
var name5 = zakwan[0];
var age5 = zakwan[1];

console.log(name5,age5);

//ES6

const [name6,age6] = ["Zakwan!!",26];
console.log(name6,age6);

const obj = {
    firstName: "Zakwan",
    lastName: "Bhaiyat"
};

const{firstName, lastName} = obj;
console.log(firstName, lastName);

const{firstName: a, lastName: b} = obj;
console.log(a,b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1993);
console.log(age2, retirement);




//Arrays

const boxes = document.querySelectorAll('.box');
console.log(boxes);

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
// console.log(boxesArr5);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = "dodgerblue";
});

// //ES6
const boxesArr6 = Array.from(boxes);
// console.log(boxesArr6);
boxesArr6.forEach( cur => cur.style.backgroundColor = "dodgerblue");

//ES5

for(var i=0; i<boxesArr5.length; i++){
    if(boxesArr5[i].className === "box blue"){
        continue;
    }
    boxesArr5[i].textContent = "I'm chnaged to blue!"
}

//ES6

for( cur of boxesArr6){
    // if(cur.className === "box blue"){
    //     continue;
    // }
    if(cur.className.includes("blue")){
        continue;
    }
    cur.textContent = "I'm change to blue by Zakwan"
}


// //ES5
var ages = [12,17,8,21,14,11];

var isFullAge = ages.map(function(cur){
    return cur > 18;
});

console.log(isFullAge.indexOf(true));
console.log(ages[isFullAge.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find( cur => cur >= 18));




// Spread Operator in ES6

const h = document.querySelector('h1');
const allBoxes = document.querySelectorAll(".box");
const all = [h, ...allBoxes];

Array.from(all).forEach( cur => cur.style.color = "purple");



//Rest Parameters

//ES5
function isFullAge6(limit,...years){
    // console.log(years);
    const now = new Date().getFullYear();
    (years.forEach( cur => 
        console.log( (now - cur) >= limit ) )
    );
}

isFullAge6(16,1990,1993,1992);
console.log(isFullAge6);


// Default paramerters

//ES5

function Smith(firstName, yearOfBirth,  lastName, nationality){

    lastName === undefined ? lastName = "Smith" : lastName = lastName;
    nationality === undefined ? nationality = "american" : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


// ES6
function smithPerson(firstName, yearOfBirth, lastName = "Smith", nationality="american"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new smithPerson("John", 1991);
console.log(john);


// MAPS

var question = new Map();
question.set("question", "What is the latest version of JavaScript?");
question.set(1,"ES5");
question.set(2,"ES6");
question.set(3,"ES2015");
question.set(4,"ES7");
question.set("correct", 3);
question.set(true,"Correct answer.");
question.set(false,"Wrong answer! Please, try again");


// console.log(question);
console.log(question.get('question'));
// question.delete(4);
// question.clear();
// question.size();

for (let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

var ans = parseInt(prompt("Please select the write answer"));

console.log(question.get(ans === question.get("correct")));


//Arrays

let arr = [1 ,3 ,5, 9];

for (let [key,value] of arr.entries()){
    console.log(`Index is ${key} and value is ${value}`);
}


// Classes 

// // ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

// // Classes with SubClass in ES5

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Inherit the person5 method to athlete5 class
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.medal = function(){
    this.medals++;
    console.log(this.medals);
}

var zakwan5 = new Athlete5("Zakwan", 1990, "Cricketer", 3 , 10);
zakwan5.calculateAge();
zakwan5.medal();
console.log(zakwan5);
console.log(zakwan5.calculateAge());


// ES6

class Person6{
    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}



var zakwan6 = new Athlete6("Zakwan", 1993, "Full Stack Developer", 3 , 15);
// Person6.greeting();
// console.log(zakwan6.calculateAge());
// console.log(zakwan6.wonMedal());