hello world!
var greeting = ["hello", "hola", "aloha", "bonjour", "hallo"];
undefined
var greetings = ["hello", "hola", "aloha", "bonjour", "hallo"];
undefined
greetings
["hello", "hola", "aloha", "bonjour", "hallo"]
var primes = [2,3,5,7,11, 13, 17, 19, 23, 29];
undefined

primes
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
greetings[1]
"hola"
primes[1]
3
greetings[0]
"hello"
greetings[5]
undefined
primes[0]
2
primes.push(31)
11
primes
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
greetings
["hello", "hola", "aloha", "bonjour", "hallo"]
greetings.push("salutations")
6
greetings
["hello", "hola", "aloha", "bonjour", "hallo", "salutations"]
greetings[0] = "goodbye"
"goodbye"
greetings
["goodbye", "hola", "aloha", "bonjour", "hallo", "salutations"]
var index;
undefined

for (index = 0; index<greetings.length; index = index +1){
    console.log(greetings[index]);
}
VM495:2 goodbye
VM495:2 hola
VM495:2 aloha
VM495:2 bonjour
VM495:2 hallo
VM495:2 salutations
undefined
for (index = 0; index<greetings.length; index = index +1){
    console.log(greetings(index));
}
VM504:2 Uncaught TypeError: greetings is not a function
    at <anonymous>:2:17
(anonymous) @ VM504:2
var numbers = [];
undefined
numbers.push(1);
1
numbers
[1]
var count;
undefined
for (count = 2; count < 10; count = count + 1){
    numbers.push(count)
}
9
count
10
numbers
[1, 2, 3, 4, 5, 6, 7, 8, 9]


var num = [0, 1, 2, 3, 4,];
undefined
for (n = 5; n < 10; n = n +1){
    num.push(n)
}
10
num
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var k = 0; k < num.length; k = k+1){
    console.log(num[k])
}
VM177:2 0
VM177:2 1
VM177:2 2
VM177:2 3
VM177:2 4
VM177:2 5
VM177:2 6
VM177:2 7
VM177:2 8
VM177:2 9
undefined
var ar = [];
undefined
for (var n = 1; n <=15; n = n+1){
    ar.push(n)
}
15
ar
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


var evenNumbers = [];
undefined
var caunt;
undefined
for (count = 0; count < 10; count = count +1){
    if (count % 2 === 0){
        evenNumbers.push(count);
}
}
undefined
evenNumbers
[0, 2, 4, 6, 8]

for (count = 0; count < evenNumbers.length; count = count +1){
    console.log(evenNumbers[count])
}
VM573:2 0
VM573:2 2
VM573:2 4
VM573:2 6
VM573:2 8
