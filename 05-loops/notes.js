// your notes here!
console.log("these are the notes for section 5");
var sumFirstOneHundred = function(x){
  var sum = 0;
  var currentNumber;
  for (currentNumber = 1; currentNumber <= x; currentNumber = currentNumber +1){
      sum = sum + currentNumber;
  }
  return sum;
}

var largestDivisor = function(number){
  var result = 1;
  var current;
  for (current =2; current < number; current = current +1){
      if (number % current === 0){
        result = current
      }
  }
  return result
}

var removeVowels = function (word){
  if (typeof word !== "string"){
      throw "the input to removeVowels shouls be a string";
  }
  var result="";
  var index;

  for (index = 0; index < word.length; index = index +1){
      if (word.charAt(index) !== "a" && word.charAt(index) !== "e" &&
          word.charAt(index) !== "o" && word.charAt(index) !== "u" &&
          word.charAt(index) !== "i"){
          result = result + word.charAt(index);
          }
  }
  return result
}

//firstLowerCaseLetter("THIS is a short tweet");
//=> i
//firstLowerCaseLetter("HHIS IS ANOTHER TWeet");
//=> e
//firstLowerCaseLetter("HHIS IS A SCREAMING TWEET");
//=>""

var firstLowerCaseLetter = function(tweet){
  if (typeof tweet !== "string"){
    throw "We require a string here, sorry...";
  }
  var result = "";
  var index;
//  for (index = 0; index < tweet.length && result ===""; index = index +1){
  for (index = 0; index < tweet.length; index = index +1){
    if ("a"<=tweet.charAt(index) && tweet.charAt(index)<="z"){
//      result = tweet.charAt(index);
        return tweet.charAt(index)
    }
  }

  return result
}

// countDown(10)
//=>10
//=>9
//=>8
//=>...
//=>0

var countDown = function (number) {
  if (typeof number !== "number"){
    throw "NUMBER SHOULD BE A NUMBER!!!"
  }
  var current;
  for (current = number; current>=0; current = current -1){
    console.log(current);
  }
};
