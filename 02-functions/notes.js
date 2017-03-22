// your notes here!
console.log("hello world!");
console.log("this is another statement");

//greet"Semmy";
//=> "Hello, Semmy!";

var greet = function(name){
  return "Hello, " + name
}

var greet1 = greet("Semmy");
var greet2 = greet("Gracie");
console.log(greet1)
console.log(greet2)

var toCardString = function(rank, suit){
  return rank + " of " + suit;
}

console.log(toCardString("ace", "spades"));
console.log(toCardString("two", "diamonds"));
console.log(toCardString("queen", "hearts"));

// makeHtmlParagraph ("hello wrld");
//=> <p>hello world</p>
var makeHtmlParagraph = function(content){
  var openParagraphTag = "<p>";
  var closeParagraphTag = "</p>";
  var htmlParagraph = openParagraphTag + content + closeParagraphTag;
  return htmlParagraph
}

var openParagraphTag = "This is not a tag";
console.log(openParagraphTag);
