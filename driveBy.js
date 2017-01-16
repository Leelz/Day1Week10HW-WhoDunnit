// Who murdered Biggie

var name = 'The Notorious B.I.G.';

var printName = function() {
  console.log(name + "has been struck down, cold blooded.  Who did it?");
};

printName();


// output: 1. My name is Keith
 
### Episode 2
var Xzibit = {
  Location: "Pimping someone's ride",
}

function addSuspects(suspects) {
  suspectList = [];
  for (var i = 0; i < suspects.length; i++) {
    console.log(suspectList.unshift(suspects[i]));
  }
}

var Dre = {
  Location: "unknown", 
}

var Eminem = {
  Location: "arguing with Kim - as always",
}

var Coolio = {
  Location: "unknown",
}
var Snoop {
  Location: "Hot tub",
}

var rappers = [Dre, Eminem, Coolio, Snoop, Xzibit];
addSuspects(rappers);

// output: 2. 5

### Episode 3

var suspectList = [Dre, Eminem, Coolio, Snoop, Xzibit]
filterSuspects(suspectList)

function filterSuspects(suspectList) {
  newSuspectList = []
  for (var i = 0; i < suspectList.length; i++) {
    if (suspectList[i]["Location"] == "unknown") {
      newSuspectList.push(suspectList[i]);
    }
    console.log(newSuspectList)
  }
  console.log("We've narrowed down the suspects to the above list")
}


### Episode 4


var articleOne = 'gun';
var articleTwo = 'sunglasses';
var articleThree = 'Giant Clock Necklace';

var allSuspects = function() {
  var articleOne = 'slick beats'
  console.log('Evidence includes: ' + articleOne + ', ' + articleTwo + ', ' + articleThree);
};

allSuspects();
console.log( 'The murder weapon is a:' + articleOne );

### Episode 5

var stoneColdKiller = function(killer) {
  var killer = "Coolio"
  return killer;
}

console.log( "The man popped a cap in Biggie is none other than", stoneColdKiller("Dre") );

### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
