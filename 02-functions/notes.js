// your notes here!
console.log("hello world!");
console.log("this is another statement");

//greet"Semmy";
//=> "Hello, Semmy!";

var greet = function(name){
  return "Hello, " + name;
};

var greet1 = greet("Semmy");
var greet2 = greet("Gracie");
console.log(greet1);
console.log(greet2);

var toCardString = function(rank, suit){
  return rank + " of " + suit;
};

console.log(toCardString("two", "diamonds"));
console.log(toCardString("queen", "hearts"));
var aceOfSpades = toCardString("ace", "spades");
console.log(aceOfSpades);

// makeHtmlParagraph ("hello wrld");
//=> <p>hello world</p>
var makeHtmlParagraph = function(content){
  var openParagraphTag = "<p>";
  var closeParagraphTag = "</p>";
  var htmlParagraph = openParagraphTag + content + closeParagraphTag;
  return htmlParagraph;
};

var openParagraphTag = "This is not a tag";
console.log(openParagraphTag);

var add = function (x, y) {
    var x = 100;  // we lose the argument x
    console.log(x);
    return x + y;
};

var addThree = function(first, second,  third){
  return first+second+third;
};
