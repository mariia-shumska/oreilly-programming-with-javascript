var range = function (number) {
  if (typeof number !== "number"){
    throw "arguments to range must be numbers"
  }
  var list = [];
  var i = 0;
  while (i <= number){
    list.push(i);
    i = i + 1;
  }
  return list;
};

var isVowel = function (letter) {
    var letterLC = letter.toLowerCase();
    return letterLC === "a" || letterLC === "e" || letterLC === "i" ||
          letterLC === "o" || letterLC === "u";
};


// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (arr) {
  return arr.reduce(function(first, second){
//    console.log("first " + first);
//    console.log("second " + second);
    return [second].concat(first)
  },[])
};

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function (arrayOfArrays) {
  return arrayOfArrays.reduce(function(element, current){
//    console.log("element " + element);
//    console.log("current " + current);
    return element.concat(current)
  },[])
};

// solution variant
var flatten1 = function (arrayOfArrays) {
  return arrayOfArrays.reduce(function(element, current){
    return Array.isArray(current) ? element.concat(current) : element.concat([current]) //// !!!  ternary conditional operator
  },[])
};

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var sumOfMultiplesOf3And5 = function (maxNum) {
  return range(maxNum).reduce(function(sum, current){
    if (current % 3 === 0 || current % 5 ===0){
      sum = sum + current;
    } return sum;
  },0)
}

//solution variant
var sumOfMultiplesOf3And5Solution = function (maxNum) {
  return range(maxNum).filter(function(number){
    return number % 3 === 0 || number % 5 === 0
  }).reduce(function(sum, current){
    return sum = sum + current
  },0)
}



// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel1 = function (str) {
  return str.split("").some(function(letter){
    return letter === "a" || letter === "e" || letter === "i" ||
           letter === "o" || letter ==="u"  })
};

var atLeastOneVowel2 = function (str) {
  return str.split("").some(function(letter){
    return isVowel(letter)})
};

//solution variant
var atLeastOneVowel = function (str) {
  return str.split("").some(isVowel)
};


// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function(tweets){
  var awesomeTweets =  tweets.filter(function(tweet){
    return tweet.indexOf("awesome") > -1
  })
  if (awesomeTweets.length === 0){
    return ""
  } else {
  return awesomeTweets.reduce(function(longest, current){
      if (longest.length > current.length) {
        return longest
      } else {
        return current
      }
  })
  }
};

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var elementsToContent = function () {
};

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function () {
};

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function () {
};
