#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1

```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

```
// output: 1. My name is Keith
 
### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

```
// output: 2. 5

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

```
// output: 3.
// 1: Chickens
// 2: Dogs
// 3: Lions

### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
```
// output: 4.
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is Keith

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
```
// output: 5.
// Poirot

### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
```

// output: 6.
// the murderer is, rick

### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
