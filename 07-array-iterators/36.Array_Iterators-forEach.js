var tweets = ["hello world", "this is a tweet", "lol"];
undefined

for (var index = 0; index < tweets.length; index = index +1){
    console.log(tweets[index]);
}
VM304:2 hello world
VM304:2 this is a tweet
VM304:2 lol
undefined

var printElement = function (tweet){
    console.log(tweet);
}
undefined

tweets.forEach(printElement);
VM403:2 hello world
VM403:2 this is a tweet
VM403:2 lol
undefined

tweets.forEach(function (tweet){
    console.log(tweet);
});
VM458:2 hello world
VM458:2 this is a tweet
VM458:2 lol
undefined

var numbers = [1,2,3,4,5,6,7,8, 9,10];
undefined
numbers.map(function(number){
    return Math.pow(number,3);
})
[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

[true, false, false, true, false]
[true, false, false, true, false]
[true, false, false, true, false].map(function (value){
    return !value;
})
[false, true, true, false, true]
