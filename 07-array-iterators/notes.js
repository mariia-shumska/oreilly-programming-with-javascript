// your notes here!
console.log("hello world!");
console.log("these are my sectin 7 notes");

var sumForLoop = function(list){
  var sum = 0;
  for (var index = 0; index < list.length; index = index+1){
    sum = sum + list[index];
  }

  return sum;
};

var sum = function(list){
  var sum = 0;

  list.forEach(function(number){
    sum = sum + number;
  });
  return sum;
};

//doubles ([1, 2, 3, 4, 5])
//=> [2, 4, 6, 8, 10]

var doublesForLoop = function (list){
  result = [];
  for (var index = 0; index< list.length; index = index +1){
    result.push(list[index]*2)
  }
  return result;
};

var doublesForEach = function(list){
  var result = [];
  list.forEach(function(n){
    result.push(n*2)
  });
  return result;
}

/*  var result = list.map(function(number){
      return number*2;
  });
  return result;
}
*/
var doublesWithMap = function(list){
  return list.map(function(number){
      return number*2;
  });
}

var square = function(number){
  return number * number;
}

var numbers = [2,4,6,8];
numbers.map(square);

numbers.map(function(number){
  return number* number
});

var thirdPower = function(list){
  return list.map(function(element){
      return Math.pow(element,3);
  });
};

//firstLetters(["gracie", "loki", "allie", "layla"]);
//=>["g", "l", "a", "l"]

var firstLetters = function (listOfStrings){
  return listOfStrings.map(function(word){
    // return word [0];
    return word.charAt(0);
  });
}

var range = function(max){
  var result = [];
  var index;
  for (index = 0; index <= max; index = index +1){
    result.push(index);
  };
  return result;
};

var isPrime = function (p) {
  var result = true;

  if (typeof p !== "number" || p < 2){
    result = false
  }
  for (var div = 2; div < p && result === true; div = div +1){
    if (p % div === 0){
      result = false;
    }
  }
  return result;
};


var sumWithReduce = function(list){
  var result = list.reduce(function(sumSoFar, number){
    return sumSoFar + number;
  });
  return result;
};

var smallest = function(list) {
  var result = list.reduce(function(smallestSoFar, current){
    var smallest = smallestSoFar;
    if (current < smallestSoFar){
      smallest = current;
    }
    return smallest;
  });
  return result;
}

//paragraphify(["this is a tweet", "this is not a tweet", "hello world"])
// => This is a tweet. This is not a tweet. Hello world.

var capitalize = function(tweet){
  return tweet[0].toUpperCase() + tweet.slice(1);
}

var paragraphify = function(tweets){
  return tweets.reduce(function(paragraph, currentTweet) {
    return paragraph + capitalize(currentTweet) + ". ";
  }, "");
};
