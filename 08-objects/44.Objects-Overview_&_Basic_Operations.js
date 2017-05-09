var cardRank = "ten";
undefined
var cardSuit = "spades";
undefined
console.log(cardRank + " of " + cardSuit);
VM124:1 ten of spades
undefined
var card = { "rank":"ten", "suit":"spades"};
undefined
card
Object {rank: "ten", suit: "spades"}
var person = {"name":"Sara", "age": 28}
undefined
person
Object {name: "Sara", age: 28}
var words = ["hello", "world"]
undefined
words[0]
"hello"
person["name"]
"Sara"
person[name]
undefined
person[age]
VM387:1 Uncaught ReferenceError: age is not defined
    at <anonymous>:1:8
(anonymous) @ VM387:1
person["age"]
28

person
Object {name: "Sara", age: 28}
card
Object {rank: "ten", suit: "spades"}
words
["hello", "world"]
person["name"]
"Sara"
person.name
"Sara"
var o = {"1key":"value"}
undefined
o["1key"]
"value"
o.1key
VM523:1 Uncaught SyntaxError: Invalid or unexpected token

var anotherPerson = {"firstName": "Mariia", "lastName":"Shumska"}
undefined
anotherPerson
Object {firstName: "Mariia", lastName: "Shumska"}
var anotherPerson = {"firstName": "Mariia", "lastName":"Shumska", "age": 25}
undefined
anotherPerson
Object {firstName: "Mariia", lastName: "Shumska", age: 25}
anotherPerson["firstName"]
"Mariia"
anotherPerson.firstName
"Mariia"
anotherPerson.lastName
"Shumska"

var card = {}
undefined
card
Object {}
card["suit"] = "spades";
"spades"
card
Object {suit: "spades"}
card.rank = "ace"
"ace"
card
Object {suit: "spades", rank: "ace"}
var toCardString = function(card){
  return card.rank + " of " + card.suit;
}
undefined
toCardString(card)
"ace of spades"
