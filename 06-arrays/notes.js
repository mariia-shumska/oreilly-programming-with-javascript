// your notes here!
console.log("hello world!");
console.log("these are my section 6 notes");

var printValues = function (list){
  var index;

  for (index = 0; index < list.length; index = index+1){
    console.log("The element is " + list[index]);
  }
};

var sumValues = function (list) {
  var sum = 0;
  var index;
  for (index = 0; index < list.length; index = index + 1){
    sum = sum + list[index];
  }
  return sum;
};

var isVowel = function(letter){
  var letterLC = letter.toLowerCase();
  return letterLC === "a" || letterLC === "e" ||
         letterLC === "i" || letterLC === "o" ||
         letterLC === "u";
}
 var removeVowels = function (word){
   var result = "";
   var index;
   for (index = 0; index < word.length; index = index + 1){
     if (!isVowel(word[index])){
       result = result + word[index];
     }
   }

   return result;
 }

var removeVowelsFromEach = function(tweets){
  var result = [];
  var index;
  for (index = 0; index<tweets.length; index = index + 1){
    result.push(removeVowels(tweets[index]))
  }
  return result;
}

//smallestNumber([5,2,3,6,7,8,9])
//=>2
var smallestNumber = function(list){
  var smallestSoFar = list[0];
  var index;
  for (index = 1; index< list.length; index = index +1){
    if (list[index]< smallestSoFar){
      smallestSoFar = list[index];
    }
  }
  return smallestSoFar;
};

//biggestNumber([5,2,3,6,7,8,9])
//=>0
var biggestNumber = function(list){
  var biggest = list[0];
  for (var index = 1; index < list.length; index = index+ 1){
    if (list[index] > biggest){
      biggest = list[index]
    }
  }
  return biggest;
}

var divByThree = function (number) {
  return number % 3 === 0;
}

// multiplestOfThree
var arrayDivByThree = function (list) {
  var result = [];
  for (var index = 0; index < list.length; index = index +1){
    if (divByThree(list[index])){
      result.push(list[index])
    }
  }
  return result;
}

Array.isArray([])
true
Array.isArray(true)
false
Array.isArray("string")
false
Array.isArray(7)
false
