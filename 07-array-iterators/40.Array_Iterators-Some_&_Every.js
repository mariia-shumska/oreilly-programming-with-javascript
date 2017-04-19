var tweets = ["hello world", "lol", "this is an awesome tweet tweet", "this is awesome"];
undefined
tweets.some(function(tweet){
  return tweet.indexOf("awesome") > -1;
})
true

tweets.every(function(tweet){
  return tweet.indexOf("awesome") > -1;
})
false

tweets.filter(function(tweet){
  return tweet.indexOf("awesome") > -1;
})
["this is an awesome tweet tweet", "this is awesome"]

var tweets = ["hello world", "lol", "this is an awesome tweet", "this is awesome"];
undefined

tweets.some(function(tweet){
  console.log(tweet)
  return tweet.indexOf("awesome") > -1;
})
VM1023:2 hello world
VM1023:2 lol
VM1023:2 this is an awesome tweet
true

tweets.some(function(tweet){
  return tweet.indexOf("awesome") > -1;
  console.log(tweet)
})
true

range(100).filter(function(number){
    return number % 2 === 0;
})
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]

range(100).filter(function(number){
    return number % 2 === 0;
}).every(function(number){
    return number % 2 === 0;
})
true

tweets
["hello world", "lol", "this is an awesome tweet", "this is awesome"]

tweets.every(function(tweet){
    return tweet.indexOf("lol") > -1
})
false
